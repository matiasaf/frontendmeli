import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CajaBusqueda from './components/ItemsSearch';
import ItemsList from './components/ItemsList';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ItemsDescription  from './components/ItemsDescription';


ReactDOM.render(
   <React.StrictMode>
   <Router>
  <main>
  <Route path="/">
  <CajaBusqueda />
  </Route>
  <Route path="/items:search">
  <ItemsList />
  </Route>
  <Route path="/items/:id">
  <ItemsDescription />
  </Route>
  </main>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
