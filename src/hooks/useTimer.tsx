"use client";

import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

interface TimerContextData {
  totalSeconds: number;
  currentSeconds: number;
  isRunning: boolean;
  handleStart: () => void;
  handleStop: () => void;
  resetCurrentSeconds: () => void;
}

const TimerContext = createContext({} as TimerContextData);

interface TimerContextProviderProps {
  children: ReactNode;
}

export const TimerContextProvider = ({
  children,
}: TimerContextProviderProps) => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    setTotalSeconds(0);
    setCurrentSeconds(0);
  };

  const resetCurrentSeconds = () => setCurrentSeconds(0);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setCurrentSeconds((prevSeconds) => prevSeconds + 1);
        setTotalSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning]);

  console.log("\n\n totalSeconds\n\n", JSON.stringify(totalSeconds, null, 2));

  return (
    <TimerContext.Provider
      value={{
        totalSeconds,
        currentSeconds,
        isRunning,
        handleStart,
        handleStop,
        resetCurrentSeconds,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const value = useContext(TimerContext);
  return value;
};
