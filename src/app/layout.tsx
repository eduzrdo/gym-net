import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'

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
          <div className="max-w-lg mx-auto h-[100dvh]">{children}</div>
        </WorkoutPlanContextProvider>

        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
      </body>
    </html>
  );
}
