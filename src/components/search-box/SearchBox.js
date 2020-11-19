import React, { useState, useEffect } from 'react';

import './SearchBox.scss';

function SearchBox({ searchValue, onHandleSubmit }) {
    const [query, setQuery] = useState(searchValue);

    function handleSubmitForm(e) {
        e.preventDefault();
        onHandleSubmit(query);
    }
    useEffect(() => {
        setQuery(searchValue);
    }, [searchValue]);

    return (
        <header className="nav-header">
            <span href="#" className="nav-logo"></span>
            <div>
                <form className="nav-search-form" onSubmit={handleSubmitForm}>
                    <input
                        className="nav-input-search"
                        placeholder="Nunca dejes de buscar"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="nav-submit-button" type="submit">
                        <div
                            role="img"
                            aria-label="Buscar"
                            className="nav-icon-search"
                        ></div>
                    </button>
                </form>
            </div>
        </header>
    );
}

export default SearchBox;
