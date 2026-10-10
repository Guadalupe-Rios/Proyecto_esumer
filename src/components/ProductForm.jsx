import { useState } from "react";


function ProductForm(props) {

    const [name, setName] =
        useState("");


    const [category, setCategory] =
        useState("");


    const [price, setPrice] =
        useState("");


    const [
        description,
        setDescription
    ] = useState("");


    function handleSubmit(event) {

        event.preventDefault();


        const newProduct = {

            id: Date.now(),

            name: name,

            category: category,

            price: price,

            description:
                description,

            image:
                "/products/default.jpg",

            rating: 5

        };


        props.onAddProduct(
            newProduct
        );


        setName("");
        setCategory("");
        setPrice("");
        setDescription("");

    }


    return (
        <section className="product-form-section">

            <div className="product-form-heading">

                <span>
                    ADMINISTRAR CATÁLOGO
                </span>

                <h2>
                    Agregar nuevo producto
                </h2>

                <p>
                    Completa la información para
                    agregar un nuevo producto
                    al catálogo.
                </p>

            </div>


            <form
                className="product-form"
                onSubmit={
                    handleSubmit
                }
            >

                <div className="form-field">

                    <label htmlFor="product-name">
                        Nombre
                    </label>

                    <input
                        id="product-name"

                        type="text"

                        value={name}

                        required

                        onChange={
                            function (event) {

                                setName(
                                    event.target.value
                                );

                            }
                        }
                    />

                </div>


                <div className="form-field">

                    <label htmlFor="product-category">
                        Categoría
                    </label>

                    <input
                        id="product-category"

                        type="text"

                        value={category}

                        required

                        onChange={
                            function (event) {

                                setCategory(
                                    event.target.value
                                );

                            }
                        }
                    />

                </div>


                <div className="form-field">

                    <label htmlFor="product-price">
                        Precio
                    </label>

                    <input
                        id="product-price"

                        type="text"

                        value={price}

                        required

                        onChange={
                            function (event) {

                                setPrice(
                                    event.target.value
                                );

                            }
                        }
                    />

                </div>


                <div className="form-field form-field-full">

                    <label htmlFor="product-description">
                        Descripción
                    </label>

                    <textarea
                        id="product-description"

                        value={
                            description
                        }

                        required

                        onChange={
                            function (event) {

                                setDescription(
                                    event.target.value
                                );

                            }
                        }
                    />

                </div>


                <div className="form-field-full">

                    <button
                        className="form-button"
                        type="submit"
                    >
                        Agregar producto
                    </button>

                </div>

            </form>

        </section>
    );

}


export default ProductForm;