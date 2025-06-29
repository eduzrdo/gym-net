import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

import { WorkoutPlanContextProvider } from "@/src/hooks/useWorkoutPlan";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GymWeb",
  description: "GymWeb - Aplicativo para gerenciar seu treino",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.className} antialiased`}>
        <WorkoutPlanContextProvider>
          <div className="lg:max-w-sm mx-auto flex h-[100dvh]">{children}</div>
        </WorkoutPlanContextProvider>
      </body>
    </html>
  );
}
