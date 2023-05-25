import { useState } from "react";
import "./styles.css";
import Label from "./Label";
import Button from "./Button";

const App = () => {
  const [name, setName] = useState("Hello");

  const obj = {
    firstName: "René",
    lastName: "Krewinkel",
  };

  const showAlert = () => {
    setName("Pietje");
  };

  const naam = `${obj.firstName} ${obj.lastName}`;

  return (
    <div>
      <div style={{ color: "#F00" }}>{name.toLowerCase()}</div>
      <div>{`${naam} is bezig met React`}</div>
      <div>Hi mom!</div>
      <Label text={name} kleur={`blauw`} fontSize={20} />

      <Button text={`klik mij!`} action={showAlert} />
    </div>
  );
};

export default App;
