import react from "react";
import "./cart.css";

function Cart(Props) {
    return (
        <div className="cartdiv">
            <div className="cart">
                {Props.items.map((item, index) => {
                    return (
                        <div key={index} className="cartitem">
                            <img src={item.images[0]} className="cartimg" />
                            <div className="cartdetail">
                                <p className="cartnameandprice">
                                    {item.name} - {item.price}Rs
                                </p>
                                <p className="cartprice">{item.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Cart;
