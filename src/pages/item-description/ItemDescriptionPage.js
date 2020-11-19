import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { axios } from '../../axios';
import SearchBox from '../../components/search-box/SearchBox';
import ItemDescription from '../../components/item-description/ItemDescription';

export default function ItemDescriptionPage() {
    const [item, setItem] = useState('');
    const [loadingOn, setLoadingOn] = useState(true);
    let history = useHistory();

    const { id } = useParams();

    async function fetchItemFromAPI() {
        try {
            const res1 = await axios.get('/items/' + id);
            const res2 = await axios.get('/items/' + id + '/description');
            if (res1.data && res2.data) {
                const item = {
                    ...res1.data,
                    description: res2.data.plain_text,
                };
                setItem(item);
                setLoadingOn(false);
            }
        } catch (err) {
            console.error('Se ha producido un error.');
        }
    }

    const onHandleSubmit = (value) => history.push(`/items?search=${value}`);

    useEffect(() => {
        fetchItemFromAPI();
    }, []);

    return (
        <div>
            <SearchBox onHandleSubmit={onHandleSubmit} />

            {loadingOn && <h1> Buscando el articulo </h1>}
            {!loadingOn && item && <ItemDescription item={item} />}
            {!loadingOn && !item && (
                <h1>No se encontraron resultados para la búsqueda</h1>
            )}
        </div>
    );
}
