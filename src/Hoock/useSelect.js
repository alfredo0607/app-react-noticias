import React, { useState } from "react";
import "../css/style.css";

export default function useSelect(stateInnicial, opciones) {
  
  const [state, ActualizarState] = useState(stateInnicial);

  const selectNoticia = () => (
    <div className="contenedor-select">
      <select className="select"
      value={state}
      onChange={e => ActualizarState(e.target.value)}>
        {opciones.map((opcion) => (
          <option key={opcion.value} value={opcion.value}>
            {" "}
            {opcion.label}
          </option>
        ))}
      </select>
    </div>
  );

  return [state, selectNoticia];
}
