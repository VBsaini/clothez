import react from "react";
import "./details.css";
class Details extends react.Component {
    constructor(Props) {
        super(Props);
        this.state = {
            item: this.props.item,
            num: 0,
            cartItems: this.props.cartItems,
            cartadditems: () => {
                this.props.cartAddItems(this.state.item);
            },
            cartremoveitems: () => {
                this.props.cartRemoveItems(this.state.item);
            },
        };
        this.imageSlider = this.imageSlider.bind(this);
    }
    imageSlider = (data) => {
        this.setState({
            num: data,
        });
    };
    render() {
        let cartButton = (
            <button
                onClick={() => {
                    this.state.cartadditems();
                }}
            >
                Add to cart
            </button>
        );
        for (let item of this.state.cartItems) {
            if (item == this.state.item) {
                cartButton = (
                    <button
                        onClick={() => {
                            this.state.cartremoveitems();
                        }}
                    >
                        Remove from cart
                    </button>
                );
            }
        }
        return (
            <div className="detailContainer">
                <div className="detailCard">
                    <div className="images">
                        <div className="littleImageswrapper">
                            {this.state.item.images.map((item, index) => {
                                return (
                                    <img
                                        src={item}
                                        onMouseEnter={() => {
                                            this.imageSlider(index);
                                        }}
                                        className="littleImages"
                                    />
                                );
                            })}
                        </div>
                        <img
                            className="bigImage"
                            src={this.state.item.images[this.state.num]}
                        />
                    </div>
                    <div className="detailWrapper">
                        <div className="details detailItem">
                            <p className="name">{this.state.item.name}s</p>
                            <p className="des">{this.state.item.description}</p>
                            <p className="price mb0">
                                {this.state.item.price}Rs
                            </p>
                        </div>
                        <div className="buy detailItem">
                            <button>Buy</button>
                            {cartButton}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;
