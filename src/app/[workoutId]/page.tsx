"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { IconBarbell, IconX } from "@tabler/icons-react";
import colors from "tailwindcss/colors";

import { Header, ExerciseCard_2 } from "@/src/components";
import { WorkoutPlan } from "@/src/data/workoutPlan";

import localStorageManager from "@/src/services/localStorage";

export default function WorkoutPage() {
  const [showWorkoutList, setshowWorkoutList] = useState(false);

  const [loadedWorkoutPlan, setLoadedWorkoutPlan] =
    useState<WorkoutPlan | null>(null);

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

  const handleSaveWeight = (
    exerciseIndex: number,
    weightIndex: number,
    weight: number
  ) => {
    const payload = [...loadedWorkoutPlan!];

    payload[Number(workoutId)].exercises[exerciseIndex].weight[weightIndex] =
      weight;

    localStorageManager.update("workoutPlan", payload);

    setLoadedWorkoutPlan(payload);
  };

  useEffect(() => {
    const workoutPlan = localStorageManager.read<WorkoutPlan>("workoutPlan");

    if (workoutPlan) {
      setLoadedWorkoutPlan(workoutPlan);

      // TODO: DELETE ALL NOTES

      // const payload = [...workoutPlan];

      // workoutPlan?.forEach((w, i) => {
      //   const exercises = payload[i].exercises.map((e) => ({
      //     ...e,
      //     notes: undefined,
      //   }));

      //   payload[i].exercises = exercises;
      // });

      // localStorageManager.update("workoutPlan", payload);
    }
  }, []);

  if (!loadedWorkoutPlan) {
    return (
      <div className="h-[100dvh] flex justify-center items-center p-5">
        <p className="text-lg font-semibold">Carregando treino...</p>
      </div>
    );
  }

  return (
    <div className="relative flex flex-1 flex-col">
      <Header
        title={loadedWorkoutPlan[Number(workoutId)].title}
        onClickHeaderIcon={handleShowWorkoutList}
      />

      <div className="flex flex-1 flex-col p-5 gap-5 overflow-auto">
        {loadedWorkoutPlan[Number(workoutId)].exercises.map(
          (exercise, index) => (
            // <ExerciseCard key={exercise.id} {...exercise} />
            <ExerciseCard_2
              key={exercise.id}
              {...exercise}
              handleSaveWeight={handleSaveWeight}
              exerciseIndex={index}
            />
          )
        )}
      </div>

      {/* TODO: */}
      {/* TOTAL PROGRESS BAR */}
      {/* <div className="flex items-center py-3 px-5 gap-2.5 bg-white border-t-1 border-zinc-200">
        <span className="text-sm font-semibold">25%</span>

        <div className="flex-1 bg-zinc-200 rounded-full">
          <div
            className="bg-green-600 h-1 rounded-full"
            style={{ width: "33%" }}
          />
        </div>
      </div> */}

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
              {loadedWorkoutPlan.map((workoutPlanItem, index) => (
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
