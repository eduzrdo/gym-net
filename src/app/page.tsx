"use client";

import { useState } from "react";

import { Button } from "@/src/components/ui/button";
import { WelcomeHeader, WorkoutCard, InstallPWA } from "@/src/components";

import { useWorkoutPlan } from "@/src/hooks/useWorkoutPlan";
import { IconBarbell } from "@tabler/icons-react";

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
      <div className="h-[100dvh] flex flex-1 flex-col justify-center items-center p-5">
        <IconBarbell size={48} className="animate-bounce text-primary" />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <WelcomeHeader />

      <div className="flex flex-col gap-4 p-5 flex-1 hide-scrollbar">
        {workoutPlan.map((workout, index) => (
          <WorkoutCard key={workout.id} workout={workout} number={index} />
        ))}
      </div>

      <div className="flex flex-col py-3 px-5 gap-5">
        <InstallPWA />

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
