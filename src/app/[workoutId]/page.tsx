"use client";

import { useParams } from "next/navigation";

import { ExerciseCard, Header } from "@/src/components";
import { workoutPlan } from "@/src/data/workoutPlan";
import router from "next/router";

export default function Home() {
  const router = useParams<{ workoutId: string }>();
  const { workoutId } = router;

  return (
    <div className="flex flex-col h-[100dvh] md:max-w-96 mx-auto">
      <Header title="(Push) Dorsal e Bíceps" />

      <div className="flex flex-col p-5 gap-5">
        {workoutPlan[Number(workoutId)].exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} {...exercise} />
        ))}
      </div>
    </div>
  );
}
