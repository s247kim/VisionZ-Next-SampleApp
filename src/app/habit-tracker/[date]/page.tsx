import { getHabitList } from "@/api/habits";

type HabitTrackerDateProps = {
  params: {
    date: string;
  };
};

export default async ({ params }: HabitTrackerDateProps) => {
  const data = await getHabitList(params.date);

  return (
    <>
      {data.map((x: string) => (
        <h1 key={x}>{x}</h1>
      ))}
    </>
  );
};
