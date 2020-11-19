import './ItemDescription.scss';

function ItemDescription({ item }) {
    return (
        <div className="description-container-item">
            <div className="description-image-item">
                <figure>
                    <img alt={item.title} src={item.secure_thumbnail} />
                </figure>
            </div>
            <div className="description-data-item">
                <div className="description-title-item">
                    <h1>{item.title}</h1>
                </div>
                <div className="description-price-item">
                    <h1>$ {item.price}</h1>
                </div>
                <div className="description-button-item">
                    <button>
                        <span>Comprar</span>
                    </button>
                </div>
            </div>
            <div className="description-description-item">
                <h2>Descripción del producto</h2>
                <p>{item.description}</p>
            </div>
        </div>
    );
}

export default ItemDescription;
