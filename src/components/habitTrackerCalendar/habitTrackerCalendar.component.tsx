"use client";

import { FC, PropsWithChildren, ReactNode, useMemo, useState } from "react";
import { DateTime } from "luxon";
import Link from "next/link";
import { cx } from "@/utils/classname.utils";

type HabitTrackerCalendarProps = {
  // ...
};

const HabitTrackerCalendarComponent: FC<
  PropsWithChildren<HabitTrackerCalendarProps>
> = () => {
  const [year, setYear] = useState<number>(DateTime.now().year);
  const [month, setMonth] = useState<number>(DateTime.now().month);
  const monthYearDisplay = DateTime.local(year, month).toFormat("MMM yyyy");

  const calendarComponent = useMemo(() => {
    const day1 = DateTime.local(year, month, 1).weekday;
    let date = DateTime.local(year, month, 1).minus({
      days: day1 === 7 ? 0 : day1,
    });

    const weekRows: ReactNode[] = [];
    do {
      const dayCols: ReactNode[] = [];
      for (let i = 0; i < 7; i++) {
        dayCols.push(
          <Link
            key={i}
            className={cx(
              "date-box",
              date.month === month ? "in-month" : "out-month"
            )}
            href={`/habit-tracker/${date.toFormat("yyyy-MM-dd")}`}
          >
            <div>
              <div className="date">{date.day}</div>
            </div>
          </Link>
        );
        date = date.plus({ day: 1 });
      }

      weekRows.push(
        <div key={date.toUnixInteger()} className={"week-row"}>
          {dayCols}
        </div>
      );
    } while (date.month === month);

    return weekRows;
  }, [month, year]);

  const goToRelativeMonth = (months: number) => {
    if (months === 0) return;

    const newDate = DateTime.local(year, month).plus({ month: months });
    setYear(newDate.year);
    setMonth(newDate.month);
  };

  return (
    <>
      <section className="header">
        <div className="btn btn-left" onClick={() => goToRelativeMonth(-1)}>
          &lt;
        </div>
        <div className="month-year-display">{monthYearDisplay}</div>
        <div className="btn btn-right" onClick={() => goToRelativeMonth(1)}>
          &gt;
        </div>
      </section>

      <section className="calendar">
        <div className="day-header">
          <div className="day">Sun</div>
          <div className="day">Mon</div>
          <div className="day">Tue</div>
          <div className="day">Wed</div>
          <div className="day">Thu</div>
          <div className="day">Fri</div>
          <div className="day">Sat</div>
        </div>

        {calendarComponent}
      </section>
    </>
  );
};
HabitTrackerCalendarComponent.displayName = "HabitTrackerCalendar";

export const HabitTrackerCalendar = HabitTrackerCalendarComponent;
