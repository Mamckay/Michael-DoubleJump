import React from "react";
import { connect } from "react-redux";
import { fetchProducts, addItem } from "../actions";
import StoreNav from "./storenav";
import "./css/mainstore.css";
import ProductItem from "./productitem";

class MainStore extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }
  createList() {
    const onClick = item => {
      this.props.dispatch(addItem(item));
    };

    const temp = this.props.products.map((product, index) => (
      <ProductItem
        key={index}
        product={product}
        onClick={() => onClick(product)}
      />
    ));
    return temp;
  }
  render() {
    return (
      <div className="store-grid">
        <StoreNav />
        <div className="product-grid">{this.createList()}</div>
      </div>
    );
  }
}

const getVisibleProducts = state => {
  const searchTerm = state.search.searchTerm;
  const products = state.store.products;
  if (!searchTerm) {
    return products;
  } else {
    return products.filter(x => x.genre === searchTerm);
  }
};

const mapStateToProps = state => ({
  products: getVisibleProducts(state),
  searchTerm: state.search.searchTerm
});

export default connect(mapStateToProps)(MainStore);
