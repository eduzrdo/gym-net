"use client";

import { InputHTMLAttributes, useState } from "react";
import { usePathname } from "next/navigation";
import {
  IconNote,
  IconProps,
  IconRepeat,
  IconRestore,
  IconTallymarks,
  IconWeight,
  IconChevronUp,
  IconChevronDown,
  IconCheck,
  IconCircleCheck,
  IconCircleCheckFilled,
  IconTrash,
} from "@tabler/icons-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/src/components/ui/dialog";

import clsx from "clsx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import colors from "tailwindcss/colors";

import { Input as ShadcnInput } from "@/src/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/src/components/ui/form";
import { Button } from "@/src/components/ui/button";
// import { Tag } from "@/src/components/Tag";

import { Exercise, WorkoutPlan } from "@/src/data/workoutPlan";
import { connectors } from "src/utils/exercise";

import localStorageManager from "@/src/services/localStorage";

type ExerciseCard_2Props = Exercise & {
  exerciseIndex: number;
  handleSaveWeight: (
    exerciseIndex: number,
    weightIndex: number,
    weight: number
  ) => void;
};

const zodSchema = z.object({
  note: z.string().min(1, {
    message: "O campo de anotação não pode ser vazio.",
  }),
});

export function ExerciseCard_2({
  title,
  reps,
  weight,
  execution,
  exerciseIndex,
  handleSaveWeight,
}: ExerciseCard_2Props) {
  const [setsDone, setSetsDone] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [notes, setNotes] = useState("");

  const form = useForm<z.infer<typeof zodSchema>>({
    resolver: zodResolver(zodSchema),
    defaultValues: {
      note: "",
    },
  });

  const connector = !execution ? "" : connectors[execution];

  const workoutPlanIndex = Number(usePathname().slice(1));

  const handleCheck = (set: number) => {
    if (set <= setsDone) {
      setSetsDone((count) => count - 1);
      return;
    }

    if (reps.length - setsDone === 1) {
      setIsCollapsed(true);
    }

    setSetsDone((count) => count + 1);
  };

  const handleToggleCollapse = (
    e: React.MouseEvent<HTMLButtonElement | HTMLParagraphElement>
  ) => {
    e.stopPropagation();

    setIsCollapsed(!isCollapsed);
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    setSetsDone(0);
    setIsCollapsed(false);
  };

  const onSubmit = (data: z.infer<typeof zodSchema>) => {
    try {
      if (data.note.trim() === "") {
        form.setError("note", {
          type: "minLength",
          message: "O campo de anotação não pode ser vazio.",
        });

        form.setValue("note", "");
        form.setFocus("note");
        return;
      }

      const loadedWorkoutPlan =
        localStorageManager.read<WorkoutPlan>("workoutPlan");

      const payload = [...loadedWorkoutPlan!];

      payload[Number(workoutPlanIndex)].exercises[exerciseIndex].notes =
        data.note;

      localStorageManager.update("workoutPlan", payload);

      setFormIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const onOpenForm = () => {
    const loadedWorkoutPlan =
      localStorageManager.read<WorkoutPlan>("workoutPlan");

    const savedNotes =
      loadedWorkoutPlan![Number(workoutPlanIndex)].exercises[exerciseIndex]
        .notes;

    setNotes(savedNotes ?? "");

    form.setValue("note", savedNotes ?? "");

    setFormIsOpen(true);
  };

  const handleDeleteNotes = () => {
    setFormIsOpen(false);

    setTimeout(() => {
      const loadedWorkoutPlan =
        localStorageManager.read<WorkoutPlan>("workoutPlan");

      const payload = [...loadedWorkoutPlan!];

      payload[Number(workoutPlanIndex)].exercises[exerciseIndex].notes = null;

      localStorageManager.update("workoutPlan", payload);

      setNotes("");
      form.setValue("note", "");
    }, 300);
  };

  return (
    <div
      className={clsx(
        "relative flex flex-col p-4 border-2 rounded-xl gap-5 overflow-hidden min-h-fit select-none",
        setsDone === reps.length
          ? "bg-green-50 border-green-600"
          : "bg-white border-zinc-100"
      )}
    >
      <div className="flex items-start gap-4">
        <button onClick={handleToggleCollapse} className="flex flex-1 gap-4">
          <div
            className={clsx(
              "p-1 text-zinc-800 rounded-sm cursor-pointer",
              reps.length === setsDone
                ? "hover:bg-green-100"
                : "hover:bg-green-50"
            )}
          >
            {isCollapsed ? (
              <IconChevronDown size={16} />
            ) : (
              <IconChevronUp size={16} />
            )}
          </div>

          <p className="flex-1 text-sm font-medium leading-6 text-left">
            {title}
          </p>
        </button>

        {/* <Tag tag="Pirâmide" /> */}

        {reps.length === setsDone ? (
          <button
            className="p-1 text-zinc-800 rounded-sm hover:bg-green-100 cursor-pointer"
            onClick={handleReset}
          >
            <IconRestore color={colors.zinc[800]} size={16} />
          </button>
        ) : (
          <Dialog open={formIsOpen} onOpenChange={setFormIsOpen}>
            <button
              onClick={onOpenForm}
              className="p-1 text-zinc-800 rounded-sm hover:bg-green-50 cursor-pointer"
            >
              <IconNote size={16} />
            </button>

            <DialogContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <DialogHeader>
                    <DialogTitle>Editar anotação</DialogTitle>
                    <DialogDescription>
                      Adicione ou edite a anotação do exercício.
                    </DialogDescription>
                  </DialogHeader>

                  {notes && (
                    <div className="flex gap-4 p-4 rounded-lg bg-white">
                      <p className="font-semibold flex-1">{notes}</p>

                      <button
                        onClick={handleDeleteNotes}
                        className="p-1 rounded-sm text-red-600 hover:text-red-400 cursor-pointer bg-white hover:bg-red-50"
                      >
                        <IconTrash size={16} />
                      </button>
                    </div>
                  )}

                  <div className="grid gap-4">
                    <FormField
                      control={form.control}
                      name="note"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <ShadcnInput
                              placeholder="Digite sua anotação aqui"
                              className="w-full"
                              autoFocus
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancelar</Button>
                    </DialogClose>
                    <Button type="submit">Salvar</Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <div
        className={clsx(
          "flex flex-col gap-5",
          isCollapsed ? "hidden" : "block"
        )}
      >
        <div className="flex gap-3">
          {/* SETS */}
          <Column icon={IconTallymarks}>
            {reps.map((rep, index) => (
              <div
                key={`set${index}`}
                className={clsx(
                  "h-8 w-full flex justify-center items-center rounded-sm",
                  setsDone >= index + 1 ? "bg-green-50" : "bg-white"
                )}
              >
                <span
                  className={clsx(
                    setsDone >= index + 1 ? "text-green-600" : "text-gray-800"
                  )}
                >
                  {index + 1}
                </span>
              </div>
            ))}
          </Column>

          {/* REPS */}
          <Column icon={IconRepeat}>
            {reps.map((rep, index) => (
              <div
                key={`reps${index}`}
                className="h-8 w-full flex justify-center items-center"
              >
                <span>{rep.join(connector)}</span>
              </div>
            ))}
          </Column>

          {/* REPS DONE */}
          {/* <Column icon={IconCheck}>
          {reps.map((rep, index) => (
            <Input key={`reps-done${index}`} />
          ))}
        </Column> */}

          {/* WEIGHT */}
          <Column icon={IconWeight}>
            {reps.map((_, setIndex) => (
              <Input
                key={`weight${setIndex}`}
                type="number"
                defaultValue={weight[setIndex] ? weight[setIndex] : ""}
                onChange={(e) =>
                  handleSaveWeight(
                    exerciseIndex,
                    setIndex,
                    Number(e.target.value)
                  )
                }
              />
            ))}
          </Column>

          {/* CHECK */}
          <Column icon={IconCheck}>
            {reps.map((_, index) => (
              <div
                key={`check${index}`}
                className="h-8 w-full flex justify-center items-center"
              >
                <button
                  className="p-1 active:bg-zinc-100 rounded-md transition-colors duration-200"
                  onClick={() => handleCheck(index + 1)}
                >
                  {setsDone >= index + 1 ? (
                    <IconCircleCheckFilled
                      color={colors.green[600]}
                      size={20}
                    />
                  ) : (
                    <IconCircleCheck color={colors.zinc[400]} size={20} />
                  )}
                </button>
              </div>
            ))}
          </Column>

          {/* REST */}
          {/* <Column icon={IconClockPause}>
          {reps.map((_, index) => (
            <div
              key={`rep${index}`}
              className="h-8 w-full flex justify-center items-center"
            >
              <span key={`rest${index}`}>{index + 1}</span>
            </div>
          ))}
        </Column> */}
        </div>

        <ProgressBar percentage={(setsDone / reps.length) * 100} />

        {/* RESET */}
        {/* {setsDone !== reps.length ? (
          <ProgressBar percentage={(setsDone / reps.length) * 100} />
        ) : (
          <button
            onClick={handleReset}
            className="flex items-center gap-1 bg-green-600 rounded-lg py-1 px-2 ml-auto"
          >
            <span className="text-white font-medium text-sm">Resetar</span>{" "}
            <IconRestore color={colors.white} size={16} />
          </button>
        )} */}
      </div>
    </div>
  );
}

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="w-full h-8 text-center border-2 border-zinc-200 rounded-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-green-600 outline-none"
      min={0}
      onClick={(e) => e.stopPropagation()}
      {...props}
    />
  );
}

function Column({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon: React.FunctionComponent<IconProps>;
}) {
  return (
    <div className="flex flex-col flex-1 items-center gap-3">
      <Icon color={colors.zinc[400]} size={16} />

      <div className="flex flex-col w-full gap-2.5 font-semibold">
        {children}
      </div>
    </div>
  );
}

type ProgressBarProps = {
  percentage: number;
};

function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div className="absolute left-0 bottom-0 w-full">
      <div
        className="bg-green-600 h-1 rounded-full transition-all duration-300"
        style={{
          width: `${percentage}%`,
        }}
      />
    </div>
  );
}
