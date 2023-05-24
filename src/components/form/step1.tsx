import { SyntheticEvent } from "react";
import { User } from "./form";

type PropsType = {
  changeStep: (step: 1 | 2 | 3 | 4) => void;
  updateUser: (user: User) => void;
};

export function Step1({ changeStep, updateUser }: PropsType) {
  const handleClick = (even: SyntheticEvent) => {
    const user = {};
    updateUser(user);
    changeStep(2);
  };
  return (
    <>
      <h2>Step 1</h2>

      <button onClick={handleClick}>Siguiente</button>
    </>
  );
}
