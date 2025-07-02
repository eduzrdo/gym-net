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
  saveNotes: (workoutId: number, exerciseIndex: number, notes: string) => void;
  deleteNotes: (workoutId: number, exerciseIndex: number) => void;
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

  const saveNotes = (
    workoutId: number,
    exerciseIndex: number,
    notes: string
  ) => {
    const payload = [...workoutPlan!];

    payload[Number(workoutId)].exercises[exerciseIndex].notes = notes;

    localStorageManager.update("workoutPlan", payload);

    setWorkoutPlan(payload);
  };

  const deleteNotes = (workoutId: number, exerciseIndex: number) => {
    const payload = [...workoutPlan!];

    payload[Number(workoutId)].exercises[exerciseIndex].notes = null;

    localStorageManager.update("workoutPlan", payload);

    console.log(payload[Number(workoutId)].exercises[exerciseIndex].notes);

    setWorkoutPlan(payload);
  };

  return (
    <WorkoutPlanContext.Provider
      value={{
        workoutPlan,
        reloadWorkoutPlan,
        saveWeight,
        saveNotes,
        deleteNotes,
      }}
    >
      {children}
    </WorkoutPlanContext.Provider>
  );
};

export const useWorkoutPlan = () => {
  const value = useContext(WorkoutPlanContext);
  return value;
};
