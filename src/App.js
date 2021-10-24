import "./App.css";
import Formulario from "./componens/Formulario";
import Header from "./componens/Header";
import React, { Fragment, useEffect, useState } from "react";
import ListadoNoticias from "./componens/ListadoNoticias";

function App() {
  const [categoria, setcategoria] = useState("");
  const [noticias, setnoticias] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=4670c24d432649969513d61e911fa640`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      setnoticias(noticias.articles);
    };
    consultarApi();
  }, [categoria]);
  return (
    <Fragment>
      <Header titulo="Buscador de Noticias" />

      <div>
        <Formulario setcategoria={setcategoria} />
      </div>

      <div>
        <ListadoNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
