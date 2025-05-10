import { ExerciseCard, Header } from "@/src/components";

export default function Home() {
  const exercises = [
    {
      id: 0,
      title: "Puxada alta com pegada aberta",
      sets: 3,
      reps: [[6, 10]],
    },
    {
      id: 1,
      title: "⁠Puxada alta com triângulo",
      sets: 3,
      reps: [[6, 10]],
    },
    {
      id: 2,
      title: "⁠Remada baixa com triângulo",
      sets: 3,
      reps: [[6, 10]],
    },
    {
      id: 3,
      title: "⁠Serrote com halter",
      sets: 3,
      reps: [[6, 10]],
    },
    {
      id: 4,
      title: "⁠Posterior de ombro na máquina",
      sets: 3,
      reps: [[6, 10]],
    },
    {
      id: 5,
      title: "⁠Encolhimento no smith",
      sets: 3,
      reps: [[6, 10]],
    },
    {
      id: 6,
      title: "⁠Rosca direta no banco inclinado",
      sets: 4,
      reps: [[6, 10]],
    },
    {
      id: 7,
      title: "⁠Rosca direta na corda",
      sets: 4,
      reps: [[6, 10]],
    },
    {
      id: 8,
      title: "⁠Rosca direta na barra com pegada pronada",
      sets: 4,
      reps: [[6, 10]],
    },
  ];

  return (
    <div className="flex flex-col h-[100dvh]">
      <Header title="(Push) Dorsal e Bíceps" />

      <div className="flex flex-col p-5 gap-5">
        {exercises.map(({ id, ...rest }) => (
          <ExerciseCard key={id} {...rest} />
        ))}
      </div>
    </div>
  );
}
