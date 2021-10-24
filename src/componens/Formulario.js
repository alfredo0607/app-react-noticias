import React from "react";
import "../css/style.css";
import useSelect from "../Hoock/useSelect";

export default function Formulario({ setcategoria }) {
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tegnologia" },
  ];

  const [categoria, SelectNoticias] = useSelect("general", OPCIONES);

  const buscarCategoria = (e) => {
    e.preventDefault();

    setcategoria(categoria);
  };

  return (
    <div>
      <div className="contenedor">
        <form onSubmit={buscarCategoria}>
          <h2>Encuentra Noticias Por Categoria </h2>
          <SelectNoticias />
          <button className="button-primary">Buscar</button>
        </form>
      </div>
    </div>
  );
}
