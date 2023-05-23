import { NextResponse } from "next/server";
import dbPool from "@/utils/mysql.utils";

export const POST = async (request: Request) => {
  const body = await request.json();
  const { date, habitName } = body;

  // if (
  //   !date ||
  //   typeof date !== "string" ||
  //   !/^20[0-3][0-9]-[0-9]{2}-[0-9]{2}$/.test(date)
  // ) {
  //   NextResponse.status(400).end();
  //   return;
  // }
  //
  // if (!habitName || typeof habitName !== "string") {
  //   res.status(400).end();
  //   return;
  // }

  const dbConn = await dbPool.getConnection();

  await dbConn.beginTransaction();
  try {
    await dbConn.execute(
      `
    INSERT INTO habits
    SET habit_name = ?
    ON DUPLICATE KEY UPDATE
    habit_id = habit_id;
        `,
      [habitName]
    );

    await dbConn.execute(
      `
    INSERT INTO habit_records
    SET date = ?, habit_id = (
        SELECT habit_id FROM habits
        WHERE habit_name = ?
    )
        `,
      [date, habitName]
    );

    await dbConn.commit();

    const [results] = await dbConn.execute(
      `
    SELECT h.habit_name FROM habit_records hr
    JOIN habits h ON h.habit_id = hr.habit_id
    WHERE hr.date = ?
        `,
      [date]
    );

    if (results instanceof Array) {
      console.log(results);
      return NextResponse.json(results.map((x: any) => x.habit_name));
      // } else {
      //   throw new TypeError("Wrong type from DB");
    }
  } catch (e: any) {
    await dbConn.rollback();

    // if (e.code === "ER_DUP_ENTRY") {
    //   res.status(400).send("Duplicated habit");
    //   return;
    // }
    //
    // res.status(500).end();
  } finally {
    dbConn.release();
  }

  return NextResponse.json("");
};
