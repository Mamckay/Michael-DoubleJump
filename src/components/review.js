import React from "react";
import "./css/review.css";
import { connect } from "react-redux";
import { fetchReview } from "../actions";

class Review extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchReview(this.props.match.params.id));
  }

  render() {
    let review = this.props.review;
    console.log(review);
    if (review !== null) {
      return (
        <section className="reviewContainer" >
          <div className="customHr" />
          <span className="rating-span">{review.rating.toString()}/10</span>
          <img alt="doublejump" className="reviewImg-left" src={review.imgUrl} />
          <div className="reviewTitle">{review.name}</div>
          <div className="tagline white-text">{review.description}</div>
          <p className="reviewBody">{review.reviewbody}</p>
          <img alt="doublejump" className="reviewImg-right" src={review.imgTag} />
          <p className="reviewBody">{review.reviewbody}</p>
          <div className="customHr" />
        </section>
      );
    } else {
      return <div>loading</div>
    }
  }
}

const mapStateToProps = state => ({
  review: state.review.review
});

export default connect(mapStateToProps)(Review);
