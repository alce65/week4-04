type PropsType = {
  children: JSX.Element;
  label: string;
  user: string;
};

export function Header({ children, label, user }: PropsType) {
  const title = "Hola mundo";

  return (
    <>
      <header className="header">
        <h1>{label}</h1>
      </header>
      {children ? (
        <>
          <p>{user}</p>
        </>
      ) : (
        <p>{title.toLocaleUpperCase()}</p>
      )}

      {children}
    </>
  );
}
