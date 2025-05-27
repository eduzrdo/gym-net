"use client";

import { useState } from "react";
import {
  // IconCheck,
  // IconClockPause,
  IconNote,
  IconProps,
  IconRepeat,
  IconRestore,
  IconTallymarks,
  IconWeight,
} from "@tabler/icons-react";
import clsx from "clsx";
import colors from "tailwindcss/colors";

// import { Tag } from "@/src/components/Tag";

import { Exercise } from "@/src/data/workoutPlan";
import { connectors } from "@/src/utils/exercise";

export function ExerciseCard_2({
  title,
  reps,
  // weight,
  execution,
}: Exercise) {
  const [setsDone, setSetsDone] = useState(0);

  const connector = !execution ? "" : connectors[execution];

  const handleClick = () => {
    if (setsDone === reps.length) {
      // setSetsDone(0);
      return;
    }

    setSetsDone((count) => count + 1);
  };

  const handleReset = () => {
    setSetsDone(0);
  };

  return (
    <div
      className={clsx(
        "relative flex flex-col p-4 border-1 rounded-xl gap-5 overflow-hidden min-h-fit",
        setsDone === reps.length
          ? "bg-green-50 border-green-600"
          : "bg-white border-white"
      )}
      onClick={handleClick}
    >
      <div className="flex items-start gap-4">
        <p className="flex-1 text-sm font-medium">{title}</p>

        {/* <Tag tag="Pirâmide" /> */}

        <button>
          <IconNote color={colors.zinc[800]} size={20} />
        </button>
      </div>

      <div className="flex gap-3">
        {/* SETS */}
        <Column icon={IconTallymarks}>
          {reps.map((rep, index) => (
            <div
              key={`set${index}`}
              className={clsx(
                "h-8 w-full flex justify-center items-center rounded-sm",
                setsDone >= index + 1 ? "bg-green-50" : "bg-white"
              )}
            >
              <span
                className={clsx(
                  setsDone >= index + 1 ? "text-green-600" : "text-gray-800"
                )}
              >
                {index + 1}
              </span>
            </div>
          ))}
        </Column>

        {/* REPS */}
        <Column icon={IconRepeat}>
          {reps.map((rep, index) => (
            <div
              key={`reps${index}`}
              className="h-8 w-full flex justify-center items-center"
            >
              <span>{rep.join(connector)}</span>
            </div>
          ))}
        </Column>

        {/* REPS DONE */}
        {/* <Column icon={IconCheck}>
          {reps.map((rep, index) => (
            <Input key={`reps-done${index}`} />
          ))}
        </Column> */}

        {/* WEIGHT */}
        <Column icon={IconWeight}>
          {reps.map((_, index) => (
            <Input key={`weight${index}`} />
          ))}
        </Column>

        {/* REST */}
        {/* <Column icon={IconClockPause}>
          {reps.map((_, index) => (
            <div
              key={`rep${index}`}
              className="h-8 w-full flex justify-center items-center"
            >
              <span key={`rest${index}`}>{index + 1}</span>
            </div>
          ))}
        </Column> */}
      </div>

      {setsDone !== reps.length ? (
        <ProgressBar percentage={(setsDone / reps.length) * 100} />
      ) : (
        <button
          onClick={handleReset}
          className="flex items-center gap-1 bg-green-600 rounded-lg py-1 px-2 ml-auto"
        >
          <span className="text-white font-medium text-sm">Resetar</span>{" "}
          <IconRestore color={colors.white} size={16} />
        </button>
      )}
    </div>
  );
}

function Input() {
  return (
    <input
      type="number"
      className="w-full h-8 text-center border-2 border-zinc-200 rounded-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-green-600 outline-none"
      min={0}
      onClick={(e) => e.stopPropagation()}
    />
  );
}

function Column({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon: React.FunctionComponent<IconProps>;
}) {
  return (
    <div className="flex flex-col flex-1 items-center gap-3">
      <Icon color={colors.zinc[400]} size={16} />

      <div className="flex flex-col w-full gap-2.5 font-semibold">
        {children}
      </div>
    </div>
  );
}

type ProgressBarProps = {
  percentage: number;
};

function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div className="absolute left-0 bottom-0 w-full">
      <div
        className="bg-green-600 h-1 rounded-full transition-all duration-300"
        style={{
          width: `${percentage}%`,
        }}
      />
    </div>
  );
}
