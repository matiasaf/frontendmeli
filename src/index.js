import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ListItemsPage from './pages/list-items/ListItemsPage';
import ItemDescriptionPage from './pages/item-description/ItemDescriptionPage';
import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <main>
                <Switch>
                    <Route exact path="/items/:id">
                        <ItemDescriptionPage />
                    </Route>
                    <Route path="/">
                        <ListItemsPage />
                    </Route>
                </Switch>
            </main>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
