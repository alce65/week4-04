type PropsType = {
  label: string;
  user: string;
};

export function Header({ label, user }: PropsType) {
  const title = "Hola mundo";

  return (
    <>
      <header className="header">
        <h1>{label}</h1>
      </header>
      <p>{user}</p>
      <p>{title.toLocaleUpperCase()}</p>
    </>
  );
}
