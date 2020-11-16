import React, { useState} from "react";
import {Redirect} from 'react-router';



function CajaBusqueda() {
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    setSubmitted(true)
  }

/*Redirecciona a la */
  if(submitted) {
    return <Redirect push to={{
      pathname: "/items?search=" + query,
      from: "/",
      state: {data: query}
    }}
    />
  }

  return (
    <header className="nav-header">
    <span href="#" className="nav-logo"></span>
    <div>
    <form className="nav-search-form" onSubmit={handleSubmitForm}>
    <input className="nav-input-search" placeholder="Nunca dejes de buscar" value={query} onChange={handleInputChange} />
    <button className="nav-submit-button" type="submit">
    <div role="img" aria-label="Buscar" className="nav-icon-search"></div>
    </button>
    </form>
    </div>
    </header>
  );
}

export default CajaBusqueda;
