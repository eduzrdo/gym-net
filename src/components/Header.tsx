type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <div className="p-5 pt-10 bg-green-600 rounded-br-xl rounded-bl-xl sticky top-0">
      <p className="text-white text-xl font-bold">{title}</p>
    </div>
  );
}
