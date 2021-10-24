import React from "react";
import Noticias from "./Noticias";

const ListadoNoticias = ({ noticias }) => (
  <div>
    {noticias.map((noticia) => (
      <Noticias key={noticias.url}
      noticia={noticia} />
    ))}
  </div>
);

export default ListadoNoticias;
