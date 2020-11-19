import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    useLocation,
    useHistory,
} from 'react-router-dom';
import { axios } from '../../axios';

import ListItem from '../../components/list-item/ListItem';
import SearchBox from '../../components/search-box/SearchBox';

import './ListItemsPage.scss';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function ListItemsPage() {
    const [search, setSearch] = useState('');
    const [items, setItems] = useState([]);
    let history = useHistory();
    let query = useQuery();

    async function fetchData(_value) {
        try {
            const value = _value || query.get('search');
            const { data } = await axios.get(
                '/sites/MLA/search?q=' + value + '&limit=4'
            );
            if (data) {
                setItems(data.results);
                setSearch(value);
            }
        } catch (err) {
            console.error('Se ha producido un error', err);
        }
    }

    const onHandleSubmit = (value) => {
        setSearch(value);
        fetchData(value);
        history.push(`/items?search=${value}`);
    };

    const getQueryParams = () => setSearch(query.get('search'));

    useEffect(() => {
        getQueryParams();
        fetchData();
    }, []);

    return (
        <div>
            <SearchBox searchValue={search} onHandleSubmit={onHandleSubmit} />

            <section className="search-results">
                <ol>
                    {items.map((item) => (
                        <ListItem item={item} key={item.id} />
                    ))}
                </ol>
            </section>
        </div>
    );
}

export default ListItemsPage;
