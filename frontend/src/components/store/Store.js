import React from "react";
import "./Store.css";
import Details from "../details/Details";

function Store(Props) {
    if (Props.details) {
        return (
            <Details
                item={Props.detailitem}
                cartAddItems={Props.cartAddItems}
                cartItems={Props.cartItems}
                cartRemoveItems={Props.cartRemoveItems}
            ></Details>
        );
    } else {
        if (Props.filter.length) {
            return (
                <div className="storeContainer">
                    <div className="store">
                        {Props.Data.filter(
                            (data) => Props.filter === data.type
                        ).map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="clothesCard"
                                    onClick={() => {
                                        Props.detailcallback(true, item);
                                    }}
                                >
                                    <img src={item.images[0]} />
                                    <div className="detail">
                                        <p className="name">{item.name}</p>
                                        <p className="price">{item.price}Rs</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="storeContainer">
                    <div className="store">
                        {Props.Data.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="clothesCard"
                                    onClick={() => {
                                        Props.detailcallback(true, item);
                                    }}
                                >
                                    <img src={item.images[0]} />
                                    <div className="detail">
                                        <p className="name">{item.name}</p>
                                        <p className="price">{item.price}Rs</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        }
    }
}

export default Store;
