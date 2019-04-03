import React from "react";
import "./css/reviewnav.css";
import { setSearchTerm } from "../actions";
import { connect } from "react-redux";

class ReviewNav extends React.Component {
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
      <aside className="review-nav">
        <span onClick={() => this.setSearch("")}>Search Reviews</span>
        <ul>{this.createList()}</ul>
      </aside>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.search.searchTerm
});

export default connect(mapStateToProps)(ReviewNav);
