"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import localStorageManager from "@/src/services/localStorage";
import { workoutPlan as staticWorkoutPlan } from "@/src/data/workoutPlan";

interface WorkoutPlanContextData {
  workoutPlan: WorkoutPlan | null;
  reloadWorkoutPlan: () => void;
  saveWeight: (
    workoutId: number,
    exerciseIndex: number,
    weightIndex: number,
    weight: number
  ) => void;
}

const WorkoutPlanContext = createContext({} as WorkoutPlanContextData);

interface WorkoutPlanContextProviderProps {
  children: ReactNode;
}

export type Exercise = {
  id: string;
  title: string;
  reps: number[][];
  weight: number[];
  execution?: "dropset" | "range" | "conjugate";
  notes?: string | null;
};

export type Workout = { id: string; title: string; exercises: Exercise[] };

export type WorkoutPlan = Workout[];

export const WorkoutPlanContextProvider = ({
  children,
}: WorkoutPlanContextProviderProps) => {
  const [workoutPlan, setWorkoutPlan] = useState<WorkoutPlan | null>(null);

  function reloadWorkoutPlan() {
    localStorageManager.update("workoutPlan", staticWorkoutPlan);
    setWorkoutPlan(staticWorkoutPlan);
  }

  const saveWeight = (
    workoutId: number,
    exerciseIndex: number,
    weightIndex: number,
    weight: number
  ) => {
    const payload = [...workoutPlan!];

    payload[Number(workoutId)].exercises[exerciseIndex].weight[weightIndex] =
      weight;

    localStorageManager.update("workoutPlan", payload);

    setWorkoutPlan(payload);
  };

  useEffect(() => {
    const workoutPlanData =
      localStorageManager.read<WorkoutPlan>("workoutPlan");

    if (workoutPlanData) {
      setWorkoutPlan(workoutPlanData);
    } else {
      localStorageManager.create("workoutPlan", staticWorkoutPlan);
      setWorkoutPlan(staticWorkoutPlan);
    }
  }, []);

  return (
    <WorkoutPlanContext.Provider
      value={{ workoutPlan, reloadWorkoutPlan, saveWeight }}
    >
      {children}
    </WorkoutPlanContext.Provider>
  );
};

export const useWorkoutPlan = () => {
  const value = useContext(WorkoutPlanContext);
  return value;
};
