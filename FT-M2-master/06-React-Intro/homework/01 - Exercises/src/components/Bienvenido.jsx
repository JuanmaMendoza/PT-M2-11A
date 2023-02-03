import React, { createElement } from "react";
import { render } from "react-dom";
import { Botones } from "./Botones.jsx";

const studentName = "Mendoneta";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  let i = 0;
  return(
    <div>
      <h1>
        Buenardium.
      </h1>
      <h3>
        {studentName}
      </h3>
      <ul>
        {techSkills.map(x => <li key={i++}>{x}</li>)}
      </ul>
        <Botones alerts={alerts}/>
    </div>
    
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
