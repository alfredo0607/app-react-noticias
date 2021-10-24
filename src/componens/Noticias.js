/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function Noticias({ noticia }) {
  const { urlToImage, url, title, description, source } = noticia;

  return (
    <div className="contenedor">
      <div className="cart">
        <div className="i">
          <img src={urlToImage} className="image"/>
        </div>
        <span>{source.name}</span>
        <div className="texto">
          <h3>{title}</h3>
          <h4>{description}</h4>
        </div>
        <div className="c">
          <a className="ver-max" href={url}>
            Ver la noticia completa
          </a>
        </div>
      </div>
    </div>
  );
}
