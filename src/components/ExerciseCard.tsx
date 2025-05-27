"use client";
import { useState } from "react";
import { clsx } from "clsx";

import { Exercise } from "@/src/data/workoutPlan";

export function ExerciseCard({ title, reps, weight }: Exercise) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (count === reps.length) {
      setCount(0);
      return;
    }

    setCount((count) => count + 1);
  };

  return (
    <div
      className={clsx(
        "flex flex-col gap-4 p-4 rounded-xl border-1",
        count === reps.length
          ? "bg-green-50 border-green-600"
          : "bg-white border-white"
      )}
      onClick={handleClick}
    >
      <div className="flex gap-4">
        <h3 className="flex-1">{title}</h3>

        <div className="flex gap-1 h-5 items-stretch">
          {Array.from({ length: reps.length }).map((_, index) => (
            <div
              key={index}
              className={`w-1 rounded-full ${
                index < count ? "bg-green-600" : "bg-zinc-300"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <div>
          <span className="font-medium text-sm text-zinc-400 mr-4">Séries</span>{" "}
          <span className="font-bold text-sm">{reps.length}</span>
        </div>
        <div>
          <span className="font-medium text-sm text-zinc-400 mr-4">
            Repetições
          </span>{" "}
          <span className="font-bold text-sm">
            {reps.map((r) => r.join(" ~ ")).join(" • ")}
          </span>
        </div>

        {weight && (
          <div>
            <span className="font-medium text-sm text-zinc-400 mr-4">
              Carga
            </span>{" "}
            <span className="font-bold text-sm">{weight}</span>
          </div>
        )}

        <div>
          <span className="font-medium text-sm text-zinc-400 mr-4">Carga</span>{" "}
          {/* <span className="font-bold text-sm">{weight}</span> */}
          <input
            className="text-sm border-1 border-zinc-300 rounded-md p-2"
            onClick={(e) => e.stopPropagation()}
            onBlur={() => setCount(count - 1)}
          />
        </div>
      </div>
    </div>
  );
}
