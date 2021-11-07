import { useEffect } from "react";
import HomePage from "../components/home/Homepage";
import Profil from "../components/profil/Profil";
import { Card } from "../styles/style";
import { useState } from "react";
import { getUser } from "../service/api";

export default function Home() {
  const [step, setStep] = useState(0);
  const [users, setUser] = useState([]);

  useEffect(() => {
    if (step === 1) {
      getUser().then((response) => setUser(response.dataAllUser));
    }
  }, [step]);

  const nextStep = (_step) => {
    setStep(_step);
  };
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const stepComponent = [
    <HomePage nextStep={nextStep} key={key} />,
    <Profil users={users} prevStep={prevStep} key={key} />,
  ];

  return <Card>{stepComponent[step]}</Card>;
}
