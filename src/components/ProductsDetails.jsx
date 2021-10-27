import React from "react";

class ProductDetails extends React.Component {
  handleSave = () => {
    this.props.history.push("/products");
  };
  render() {
    return (
      <div>
        <h1>Products Details - {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>save</button>
      </div>
    );
  }
}

export default ProductDetails;
