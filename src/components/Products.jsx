import React from "react";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        { id: 1, name: "Product 1" },
        { id: 1, name: "Product 1" },
        { id: 1, name: "Product 1" },
      ],
    };
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.products.map(product => (
            <li>{product.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;
