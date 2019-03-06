import React from "react";
import "./css/storenav.css";
import { setSearchTerm } from "../actions";
import { connect } from "react-redux";

class StoreNav extends React.Component {
  componentDidMount() {
    this.props.dispatch(setSearchTerm(""));
  }
  createList = () => {
    const tempArray = [
      "Shooter",
      "Fantasy",
      "Sci-Fi",
      "Action Adventure",
      "Racing",
      "Sports"
    ];
    return tempArray.map(term => (
      <li onClick={() => this.setSearch(term)}>{term}</li>
    ));
  };
  setSearch = term => {
    this.props.dispatch(setSearchTerm(term));
  };
  render() {
    return (
      <div className="store-nav">
        <span onClick={() => this.setSearch("")}>Search Store</span>
        <ul>{this.createList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.search.searchTerm
});

export default connect(mapStateToProps)(StoreNav);
