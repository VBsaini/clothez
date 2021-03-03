import { react } from "react";
import "./Categories.css";

function categories(Props) {
    return (
        <div className="categories-section">
            <div className="categories">
                <div className="card">
                    <a
                        href="#"
                        onClick={() => Props.Storecallback(true, "men")}
                    >
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1516290260555-781710098c93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                                alt=""
                            />
                        </div>
                        <p>Men</p>
                    </a>
                </div>
                <div className="card">
                    <a
                        href="#"
                        onClick={() => Props.Storecallback(true, "women")}
                    >
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1516290260555-781710098c93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                                alt=""
                            />
                        </div>
                        <p>Women</p>
                    </a>
                </div>
                <div className="card">
                    <a
                        href="#"
                        onClick={() => Props.Storecallback(true, "kids")}
                    >
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1516290260555-781710098c93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                                alt=""
                            />
                        </div>
                        <p>Kids</p>
                    </a>
                </div>
            </div>
            {/* <div>
                <div>
                    <h2>Brands</h2>
                </div>
                <div>
                    <div>
                        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fhyperpix.net%2Ffonts%2Fpuma-font%2F&psig=AOvVaw3KhQ0xPu_J8FuEBXVJDfa9&ust=1608642770942000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDT2LuT3-0CFQAAAAAdAAAAABAD" />
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default categories;
