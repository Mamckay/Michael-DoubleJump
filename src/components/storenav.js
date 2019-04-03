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
    return tempArray.map((term, index) => (
      <li key={index} onClick={() => this.setSearch(term)}>{term}</li>
    ));
  };
  setSearch = term => {
    this.props.dispatch(setSearchTerm(term));
  };
  render() {
    return (
      <aside className="store-nav">
        <span onClick={() => this.setSearch("")}>Search Store</span>
        <ul>{this.createList()}</ul>
      </aside>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.search.searchTerm
});

export default connect(mapStateToProps)(StoreNav);
