import React, { useState } from "react";
import desserts from "../data.json";
import "../assets/card.css";
import AddToCartIcon from "../assets/images/icon-add-to-cart.svg";
import DecrementIcon from "../assets/images/icon-decrement-quantity.svg";
import IncrementIcon from "../assets/images/icon-increment-quantity.svg";

const dessert = desserts[1];

const Card = () => {
    const [inCart, setInCart] = useState(false);
    const [cartValue, setCartValue] = useState(0);

    const handleCartAction = () => {
        if (cartValue >= 1) return;
        setInCart(true);
        setCartValue((c) => c + 1);
    };

    return (
        <div className={`card ${inCart && "active"}`}>
            <div className="card__img-wrap">
                <img
                    className="card__img"
                    src={
                        new URL(`${dessert.image.desktop}`, import.meta.url)
                            .href
                    }
                    alt={dessert.name}
                />
                <button className="add-to-cart" onClick={handleCartAction}>
                    {!inCart ? (
                        <>
                            <img src={AddToCartIcon} /> Add to Cart
                        </>
                    ) : (
                        <>
                            <span
                                className="cart-btn"
                                onClick={() => setCartValue((c) => c - 1)}
                            >
                                <img src={DecrementIcon} />
                            </span>
                            <span>{cartValue}</span>
                            <span
                                className="cart-btn"
                                onClick={() => setCartValue((c) => c + 1)}
                            >
                                <img src={IncrementIcon} />
                            </span>
                        </>
                    )}
                </button>
            </div>

            <div className="card__details">
                <span className="card__category">{dessert.category}</span>
                <span className="card__name">{dessert.name}</span>
                <span className="card__price price">{dessert.price}</span>
            </div>
        </div>
    );
};

export default Card;
