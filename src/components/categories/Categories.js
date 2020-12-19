import { react } from "react";
import "./Categories.css";
function categories() {
    return (
        <div className="categories-section">
            <h1>Categories</h1>
            <div className="categories">
                <div className="card">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1516290260555-781710098c93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                            alt=""
                        />
                    </div>
                    <p>Men</p>
                </div>
                <div className="card">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1516290260555-781710098c93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                            alt=""
                        />
                    </div>
                    <p>Women</p>
                </div>
                <div className="card">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1516290260555-781710098c93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                            alt=""
                        />
                    </div>
                    <p>Kids</p>
                </div>
                <div className="card">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1516290260555-781710098c93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                            alt=""
                        />
                    </div>
                    <p>Unisex</p>
                </div>
            </div>
        </div>
    );
}

export default categories;
