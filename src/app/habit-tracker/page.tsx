import { HabitTrackerCalendar } from "@/components/habitTrackerCalendar/habitTrackerCalendar.component";
import styles from "./habit-tracker.styles.module.scss";

export default async ({ searchParams }: { searchParams: { q: string } }) => {
  const habits = await fetch(
    "http://localhost:3000/api/habits?date=2023-05-01",
    { cache: "no-store" }
  ).then((res) => res.json());

  return (
    <main className={styles.trackerApp}>
      {habits.map((habit: any) => (
        <p key={habit}>{habit}</p>
      ))}
      <HabitTrackerCalendar />
    </main>
  );
};
