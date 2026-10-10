function SearchBar(props) {

    return (
        <section className="search-section">

            <div className="search-content">

                <label htmlFor="search"> Buscar productos </label>

                <input
                    id="search"
                    type="text"
                    placeholder="Ej. mouse, teclado, audífonos..."
                     value={
                        props.search
                    }

                    onChange={
                        function (event) {
                            props.onSearchChange(
                                event.target.value
                            );

                        }
                    }
                />

            </div>

        </section>
    );

}


export default SearchBar;