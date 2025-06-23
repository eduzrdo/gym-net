import { IconFileExport } from "@tabler/icons-react";

import { IconButton } from "@/src/components/IconButton";
import { WorkoutPlan } from "@/src/data/workoutPlan";

import localStorageManager from "@/src/services/localStorage";

export const WelcomeHeader = () => {
  function handleExportWorkoutPlan() {
    const workoutPlanData =
      localStorageManager.read<WorkoutPlan>("workoutPlan");

    if (workoutPlanData) {
      const blob = new Blob([JSON.stringify(workoutPlanData)], {
        type: "application/json",
      });

      const url = URL.createObjectURL(blob);

      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const fileName = `dados-${timestamp}.json`;

      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      a.click();

      URL.revokeObjectURL(url);

      alert("Plano de treino exportado com sucesso!");
      return;
    }

    alert("Não foi possível exportar o plano de treino!");
  }

  return (
    <div className="flex items-start gap-4 p-5 text-zinc-900 border-b-1 border-zinc-300">
      <div className="flex flex-col gap-4 flex-1">
        <h1 className="text-xl">
          Bem-vindo(a), <span className="font-bold">Eduardo!</span>
        </h1>
        <p className="font-medium text-zinc-500">Tenha um ótimo treino! 💪</p>
      </div>

      <IconButton icon={IconFileExport} onClick={handleExportWorkoutPlan} />
    </div>
  );
};
