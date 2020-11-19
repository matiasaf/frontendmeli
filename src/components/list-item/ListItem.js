import { Link } from 'react-router-dom';

import './ListItem.scss';

export default function ListItem({ item }) {
    const { title, thumbnail, price, address, shipping } = item;
    const { free_shipping } = shipping;

    return (
        <Link title={item.title} to={`items/${item.id}`}>
            <li className="search-item">
                <div className="card-item">
                    <div className="image-item">
                        <img
                            className="image"
                            width="160"
                            height="160"
                            alt={title}
                            src={thumbnail}
                        />
                    </div>
                    <div className="price-item">
                        $ {price}
                        {free_shipping && <span className="shipping"></span>}
                    </div>
                    <div className="title-item">
                        <h2>{item.title}</h2>
                    </div>
                    <div className="address-item">
                        <p>{address.state_name}</p>
                    </div>
                </div>
            </li>
        </Link>
    );
}
