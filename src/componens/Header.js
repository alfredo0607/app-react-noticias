import React from "react";
import "../css/style.css";

export default function Header({ titulo }) {
  return (
    <div className="contenedor-titulo">
      <h1 className="titulo">{titulo}</h1>
    </div>
  );
}
