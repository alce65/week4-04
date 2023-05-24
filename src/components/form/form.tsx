import { useState } from "react";
import { Confirmation } from "./confirmation";
import { Login } from "./login";
import { Step1 } from "./step1";
import { Step2 } from "./step2";

export type User = {
  [key: string]: any;
};

export function Form() {
  const [step, setStep] = useState<number>(1);
  const [user, setUser] = useState({});

  const changeStep = (step: 1 | 2 | 3 | 4) => {
    setStep(step);
  };

  const updateUser = (user: User) => {
    //
    setUser(user);
  };

  return (
    <>
      <h2>Form</h2>

      {step === 1 && (
        <Step1 changeStep={changeStep} updateUser={updateUser}></Step1>
      )}

      {step === 2 && <Step2></Step2>}

      {step === 3 && <Confirmation></Confirmation>}

      {step === 4 && <Login></Login>}
    </>
  );
}
