"use client";

import { FC, PropsWithChildren, useRef, useState } from "react";

type HabitDetailPageProps = {
  date: string;
  initialHabits: string[];
};

const HabitDetailPageComponent: FC<PropsWithChildren<HabitDetailPageProps>> = ({
  date,
  initialHabits,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [habits, setHabits] = useState(initialHabits);

  const saveHabit = () => {
    if (!inputRef.current) return;

    const newHabitName = inputRef.current.value.trim();
    if (!newHabitName) return;

    fetch("http://localhost:3000/api/habit", {
      method: "POST",
      body: JSON.stringify({ date, habitName: newHabitName }),
    })
      .then((res) => res.json())
      .then((data) => {
        setHabits(data);
      });
    // .then(() => {
    //   return fetch(`http://localhost:3000/api/habits?date=${date}`);
    // })
    // .then((res) => res.json())
    // .then((data) => {
    //   setHabits(data);
    // });
  };

  return (
    <>
      {habits.map((x) => (
        <h1 key={x}>{x}</h1>
      ))}

      <input ref={inputRef} />
      <button onClick={saveHabit}>Submit</button>
    </>
  );
};
HabitDetailPageComponent.displayName = "HabitDetailPage";

export const HabitDetailPage = HabitDetailPageComponent;
