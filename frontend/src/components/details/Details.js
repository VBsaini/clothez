import react from "react";
import "./details.css";
class Details extends react.Component {
    constructor(Props) {
        super(Props);
        this.state = {
            item: this.props.item,
            num: 0,
            cartadditems: () => {
                this.props.cartAddItems(this.state.item);
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
        console.log(this.state.item);

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
                            <button
                                onClick={() => {
                                    this.state.cartadditems();
                                }}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;
