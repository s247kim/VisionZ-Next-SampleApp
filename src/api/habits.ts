import "server-only";
import dbPool from "@/utils/mysql.utils";

export const getHabitList = async (date: string): Promise<string[]> => {
  if (!date) return [];

  const dbConn = await dbPool.getConnection();
  const [results] = await dbConn.execute(
    `
SELECT h.habit_name FROM habit_records hr
JOIN habits h ON h.habit_id = hr.habit_id
WHERE hr.date = ?
    `,
    [date]
  );
  dbConn.release();

  return results.map((x: any) => x.habit_name);
};
