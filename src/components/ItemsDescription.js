import {useRouteMatch} from "react-router-dom";
import React, { useState, useEffect} from "react";
import {axios} from '../axios';

function ItemsDescription() {
  const [data, setData] = useState([{}]);
  const [description, setDescription] = useState([{}]);

  let match = useRouteMatch('/items/:id');
  const id = match.params['id'];

  async function fetchData() {
    const result = await axios
    .get("/items/" + id)
    .catch((err) => alert("Se a producido un error " + err));

    if (result && result.data) setData(result.data);
  }

  async function fetchDataDescription() {
    const result = await axios
    .get("/items/" + id + "/description")
    .catch((err) => alert("Se a producido un error " + err));

    if (result && result.data) setDescription(result.data);
  }


  useEffect(() => {
    fetchData();
    fetchDataDescription();
  }, []);

  console.log(description)
  console.log(data)
  return(
    data ?
    <div className="description-container-item">
    <div className="description-image-item">
    <figure>
    <img alt={data.title} src={data.secure_thumbnail}/>
    </figure>
    </div>
    <div className="description-data-item">
    <div className="description-title-item">
    <h1>{data.title}</h1>
    </div>
    <div className="description-price-item">
    <h1>$ {data.price}</h1>
    </div>
    <div className="description-button-item">
    <button>
    <span>Comprar</span>
    </button>
    </div>
    </div>
    <div className="description-description-item">
    <h2>Descripción del producto</h2>
    <p>{description.plain_text}</p>
    </div>
    </div>
    :
    <h1>No se encontraron resultados para la busqueda</h1>

  )

}

export default ItemsDescription;
