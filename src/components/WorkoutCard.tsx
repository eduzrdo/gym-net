import { IconBarbell, IconTallymarks } from "@tabler/icons-react";
import colors from "tailwindcss/colors";

import { Workout } from "@/src/data/workoutPlan";
import Link from "next/link";

type WorkoutCardProps = {
  workout: Workout;
  number: number;
};

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const WorkoutCard = ({ workout, number }: WorkoutCardProps) => {
  const numberOfExercises = workout.exercises.length;
  const numberOfSets = workout.exercises
    .map((e) => e.sets)
    .reduce((a, b) => a + b, 0);

  return (
    <Link
      href={`/${number}`}
      className="flex flex-col gap-3 p-4 rounded-xl bg-white"
    >
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 flex justify-center items-center rounded-xl bg-green-600">
          <span className="text-base text-white font-semibold">
            {letters[number]}
          </span>
        </div>

        <p className="flex-1 text-base font-semibold">{workout.title}</p>
      </div>

      <div className="flex pl-10 gap-5">
        <div className="flex gap-2 items-center">
          <IconBarbell color={colors.zinc[400]} size={16} />{" "}
          <span className="text-sm font-semibold">
            {numberOfExercises} exercícios
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <IconTallymarks color={colors.zinc[400]} size={16} />{" "}
          <span className="text-sm font-semibold">{numberOfSets} séries</span>
        </div>
      </div>
    </Link>
  );
};
