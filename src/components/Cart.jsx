import React from "react";
import "../assets/cart.css"
import carbonNeutral from '../assets/images/icon-carbon-neutral.svg';

const Cart = () => {
    return <div>
        <div className="cart-container">
            <h2 className="cart-heading">Your Cart (7)</h2>
            <div className="cart-items">
                <div className="item">
                    <div className="item-grid">
                        <div>
                            <p className="item-name">Classic Tiramisu</p>
                            <div className="item-values">
                                <p className="item-quantity">1x</p>
                                <p className="item-amount">@$5.50</p>
                                <p className="item-total">$5.50</p>
                            </div>
                        </div>
                        <div><button className="remove-button">X</button></div>
                    </div>
                    <hr className="item-hr" />
                </div>
                <div className="item">
                    <div className="item-grid">
                        <div>
                            <p className="item-name">Vanilla Bean Crème Brūlée</p>
                            <div className="item-values">
                                <p className="item-quantity">4x</p>
                                <p className="item-amount">@$7.00</p>
                                <p className="item-total">$28.00</p>
                            </div>
                        </div>
                        <div><button className="remove-button">X</button></div>
                    </div>
                    <hr className="item-hr" />
                </div>
                <div className="item">
                    <div className="item-grid">
                        <div>
                            <p className="item-name">Vanilla Panna Cotta</p>
                            <div className="item-values">
                                <p className="item-quantity">2x</p>
                                <p className="item-amount">@$6.50</p>
                                <p className="item-total">$13.00</p>
                            </div>
                        </div>
                        <div><button className="remove-button">X</button></div>
                    </div>
                    <hr className="item-hr" />
                </div>
            </div>
            <div className="final-statement">
                <p className="order-total">Order Total</p>
                <p className="full-total">$46.50</p>
            </div>
            <p className="carbon-neutral">
                <img src={carbonNeutral} alt="" /> <span>This is a <b>carbon-neutral</b> delivery</span>
            </p>
            <button className="confirm">Confirm Order</button>
        </div>
    </div>;
};

export default Cart;
