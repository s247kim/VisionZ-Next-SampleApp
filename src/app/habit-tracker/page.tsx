import { HabitTrackerCalendar } from "@/components/habitTrackerCalendar/habitTrackerCalendar.component";
import styles from "./habit-tracker.styles.module.scss";

export default async () => {
  return (
    <main className={styles.trackerApp}>
      <HabitTrackerCalendar />
    </main>
  );
};
