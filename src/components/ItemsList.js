
import React, { useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch, Link, useRouteMatch} from 'react-router-dom';
import {axios} from '../axios';

function Item (item) {
  const dataItem = item.item;
  const shipping  = dataItem.shipping['free_shipping'] ?
  <span className="shipping"></span>
  :
  <span></span>


  return (
    <Link title={dataItem.title} to={`items/${dataItem.id}`}>
    <li className="search-item">
    <div className="card-item">
    <div className="image-item">
    <img className="image" width="160" height="160" alt={dataItem.title} src={dataItem.thumbnail} />
    </div>
    <div className="price-item">
    $ {dataItem.price}
    {shipping}
    </div>
    <div className="title-item">
    <h2>{dataItem.title}</h2>
    </div>
    <div className="address-item">
    <p>{dataItem.address['state_name']}</p>
    </div>
    </div>
    </li>
    </Link>
  );
}

function ItemsList() {
  const [data, setData] = useState( [{}] );
  //const location = useLocation();

  let match = useRouteMatch('/items?:search');
  let search = match.params['search'].split('=')[1];
  //const id = match.params['id'];
  //

  console.log(search)

  async function fetchData() {
    const result = await axios
    .get("/sites/MLA/search?q=" + search + "&limit=4")
    .catch((err) => alert("Se a producido un error " + err));

    if (result && result.data) setData(result.data.results);
  }


  useEffect(() => {
    fetchData();
  }, []);

  console.log(data)
  const rows  = data.length > 1 ? data.map((item =>
    <Item
    item={item}
    key={item.id}
    />
  ))   :
  <>
  </>


  return (
    <div>
    <section className="search-results">
    <ol>
    {rows}
    </ol>
    </section>
    </div>
  );

}

export default ItemsList;
