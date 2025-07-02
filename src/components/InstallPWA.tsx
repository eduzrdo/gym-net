import { useEffect, useState } from "react";
import { IconDeviceTabletDown } from "@tabler/icons-react";

import { Button } from "./ui/button";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export function InstallPWA() {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
      setIsSupported(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallPrompt = () => {
    if (!installPrompt) {
      return;
    }

    installPrompt.prompt();
  };

  if (!isSupported) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2 items-center white-card p-4 rounded-md">
      <p className="text-sm font-medium">
        Acesse o seu treino de
        <br />
        forma mais rápida e fácil
      </p>

      <Button className="w-full" onClick={handleInstallPrompt}>
        Instalar GymWeb
        <IconDeviceTabletDown />
      </Button>
    </div>
  );
}
