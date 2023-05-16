import { NextResponse } from "next/server";
import { getHabitList } from "@/api/habits";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date") || "";

  return NextResponse.json(await getHabitList(date));
};
