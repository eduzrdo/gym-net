"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { IconBarbell, IconX } from "@tabler/icons-react";
import colors from "tailwindcss/colors";

import { ExerciseCard, Header } from "@/src/components";
import { workoutPlan } from "@/src/data/workoutPlan";

export default function Home() {
  const [showWorkoutList, setshowWorkoutList] = useState(false);

  const params = useParams<{ workoutId: string }>();
  const { workoutId } = params;

  const router = useRouter();

  const handleShowWorkoutList = () => {
    setshowWorkoutList(true);
  };

  const handleHideWorkoutList = () => {
    setshowWorkoutList(false);
  };

  const handleSelectWorkout = (index: number) => {
    router.push(`/${index}`);
    handleHideWorkoutList();
  };

  return (
    <div className="relative flex flex-col h-[100dvh] md:max-w-96 mx-auto">
      <Header
        title={workoutPlan[Number(workoutId)].title}
        onClickHeaderIcon={handleShowWorkoutList}
      />

      <div className="flex flex-1 flex-col p-5 gap-5 overflow-scroll">
        {workoutPlan[Number(workoutId)].exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} {...exercise} />
        ))}
      </div>

      {showWorkoutList && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-end gap-5">
          <div className="bg-white rounded-tl-xl rounded-tr-xl px-5 py-2">
            <ul className="flex flex-col">
              <li className="flex justify-between items-center gap-3 py-2">
                <p>Treinos</p>
                <button onClick={handleHideWorkoutList}>
                  <IconX color={colors.zinc[500]} size={24} />
                </button>
              </li>
              {workoutPlan.map((workoutPlanItem, index) => (
                <li key={workoutPlanItem.title}>
                  <button
                    onClick={() => handleSelectWorkout(index)}
                    className="flex items-center gap-3 py-2"
                  >
                    <IconBarbell color={colors.zinc[800]} size={24} />
                    <p>{workoutPlanItem.title}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
