import react from "react";
import "./navbar.css";

function Navbar(props) {
    return (
        <nav>
            <div className="logo">
                clothe<span className="z">z</span>
            </div>
            <div className="">
                <div className="content">
                    <div className="search">
                        <input
                            type="text"
                            className="search__input"
                            aria-label="search"
                            placeholder="enter your search"
                        />
                        <button
                            className="search__btn"
                            aria-label="submit search"
                        >
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="links-div">
                <ul className="links">
                    <li className="link">
                        <a
                            href="#"
                            onClick={() => {
                                props.storeCallback(false);
                            }}
                        >
                            Home
                        </a>
                    </li>
                    <li className="link">
                        <a href="#">Login</a>
                    </li>
                    <li className="link">
                        <a href="#">Sign up</a>
                    </li>
                    <li className="link">
                        <a
                            href="#"
                            onClick={() => {
                                props.cartCallback(true);
                            }}
                        >
                            <i class="fas fa-shopping-cart"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
