// Importér useState
import { useState } from "react";

export default function NameChanger() {
    
  // Vis name i JSX
  const [name, setName] = useState("Anna");

  return (
    <div>
      <p>{name}</p>
      <button onClick={() => setName("Peter")}>Change name</button>
    </div>
  );
}
