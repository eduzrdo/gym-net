type TagProps = {
  tag: string;
};

export function Tag({ tag }: TagProps) {
  return (
    <span className="text-sm font-medium text-white bg-green-600 py-0.5 px-1.5 rounded-full">
      {tag}
    </span>
  );
}
