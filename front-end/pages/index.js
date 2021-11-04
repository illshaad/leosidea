import HomePage from "../component/home/homepage";
import Profil from "../component/profil/profil";
import { Card } from "../component/home/index.style";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);

  const nextStep = (_step) => {
    setStep(_step);
  };

  const stepComponent = [<HomePage nextStep={nextStep} />, <Profil />];

  return <Card>{stepComponent[step]}</Card>;
}
