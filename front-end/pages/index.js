import { useEffect } from "react";
import HomePage from "../component/home/Homepage";
import Profil from "../component/profil/Profil";
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

  const stepComponent = [
    <HomePage nextStep={nextStep} />,
    <Profil users={users} />,
  ];

  return <Card>{stepComponent[step]}</Card>;
}
