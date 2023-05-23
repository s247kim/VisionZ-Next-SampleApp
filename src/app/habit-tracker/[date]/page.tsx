import { getHabitList } from "@/api/habits";
import { HabitDetailPage } from "@/app/habit-tracker/[date]/habitDetail.page";

type HabitTrackerDateProps = {
  params: {
    date: string;
  };
};

export default async ({ params }: HabitTrackerDateProps) => {
  const data = await getHabitList(params.date);

  return <HabitDetailPage date={params.date} initialHabits={data} />;
};
