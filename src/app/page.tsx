"use client";

import { useState } from "react";

import { Button } from "@/src/components/ui/button";
import { WelcomeHeader, WorkoutCard } from "@/src/components";

import { useWorkoutPlan } from "@/src/hooks/useWorkoutPlan";

export default function Home() {
  const [
    showConfirmUpdateWorkoutPlanButton,
    setShowConfirmUpdateWorkoutPlanButton,
  ] = useState(false);

  const { workoutPlan, reloadWorkoutPlan } = useWorkoutPlan();

  const handleUpdateWorkoutPlan = () => {
    if (showConfirmUpdateWorkoutPlanButton) {
      reloadWorkoutPlan();
      setShowConfirmUpdateWorkoutPlanButton(false);
      return;
    }

    setShowConfirmUpdateWorkoutPlanButton(true);
  };

  if (!workoutPlan) {
    return (
      <div className="h-[100dvh] flex justify-center items-center p-5">
        <p className="text-lg font-semibold">Carregando plano de treino...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1">
      <WelcomeHeader />

      <div className="flex flex-col gap-4 p-5 flex-1">
        {workoutPlan.map((workout, index) => (
          <WorkoutCard key={workout.id} workout={workout} number={index} />
        ))}
      </div>

      <div className="p-5">
        {showConfirmUpdateWorkoutPlanButton ? (
          <Button
            onClick={handleUpdateWorkoutPlan}
            variant="destructive"
            className="w-full"
          >
            Sim, recarregar agora
          </Button>
        ) : (
          <Button
            onClick={() => setShowConfirmUpdateWorkoutPlanButton(true)}
            className="w-full"
          >
            Recarregar plano de treino
          </Button>
        )}
      </div>
    </div>
  );
}
