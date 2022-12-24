import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: "Watch",
          qty: 1,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2_Xbq3RZJwXG_Qam4Gse8Goih519E_1HwgW86uAR61EK_twmf3YqrqxU84m7RfZNOlr8&usqp=CAU",
          id: 1,
        },
        {
          price: 999,
          title: "Mobile Phone",
          qty: 10,
          img: "data:image/jpeg;base64,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",
          id: 2,
        },
        {
          price: 999,
          title: "Laptop",
          qty: 4,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_hUmjkGt557t2prjboqSajmAEq8xXbLe0EtJ2lRUqBi3D5nCxJoLAcwMKUKS7D4O22Vw&usqp=CAU",
          id: 3,
        },
      ],
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }

  handleIncreaseQuantity = (product) => {
    console.log("Heyy please inc the qty of ", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products: products,
    });
  };

  handleDecreaseQuantity = (product) => {
    console.log("Heyy please dec the qty of ", product);
    const { products } = this.state;

    const index = products.indexOf(product);
    if (products[index].qty === 0) return;

    products[index].qty -= 1;

    this.setState({
      products,
      // shorthand
    });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // [{}]

    this.setState({
      products: items,
    });
  };

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    });

    return cartTotal;
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{ padding: 10, fontSize: 20 }}>
          TOTAL: {this.getCartTotal()}{" "}
        </div>
      </div>
    );
  }
 }
export default App;
