import React from "react";
import { connect } from "react-redux";
import { fetchReviews } from "../actions";
import "./css/reviewlist.css";
import ReviewNav from "./reviewnav";
import ReviewItem from "./reviewitem";

class ReviewList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchReviews());
  }
  createList() {
    const temp = this.props.reviews.map((review, index) => (
      <section key={index}>
        <hr className='orange-hr'></hr>
        <ReviewItem
          key={index}
          reviews={this.props.reviews}
          review={review}
          searchTerm={this.props.searchTerm}
        />
        <hr className='orange-hr'></hr>
      </section>
    ));
    return temp;
  }
  render() {
    return (
      <section className="overgrid">
        <ReviewNav />
        <div className="grid">{this.createList()}</div>
      </section>
    );
  }
}

const getVisibleReviews = state => {
  const searchTerm = state.search.searchTerm;
  const reviews = state.reviews.reviews;
  if (!searchTerm) {
    return reviews;
  } else {
    return reviews.filter(x => x.genre === searchTerm);
  }
};

const mapStateToProps = state => ({
  reviews: getVisibleReviews(state),
  searchTerm: state.search.searchTerm
});

export default connect(mapStateToProps)(ReviewList);
