import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchReviews} from '../actions'
import './reviewlist.css';
import ReviewNav from './reviewnav';
import ReviewItem from './reviewitem';

class ReviewList extends React.Component {
    
    componentDidMount() {
        this.props.dispatch(fetchReviews())
    }
    createList(){ 
        const temp = this.props.reviews.map((review,index) => <ReviewItem key={index} reviews={this.props.reviews} review={review} searchTerm={this.props.searchTerm}/>)
        return temp;
}
    render(){
        return (
            <div className="overgrid">
                <ReviewNav></ReviewNav>
                <div className="grid">
                    {this.createList()}
                </div>
            </div> 
    );
    }
    
}

const getVisibleReviews = state => {
    const searchTerm = state.search.searchTerm;
    const reviews = state.reviews.reviews;
    if(!searchTerm){
        return reviews;
    }else{
        return reviews.filter(x => x.genre === searchTerm);
    }
    
}

const mapStateToProps = state => ({
     reviews: getVisibleReviews(state),
     searchTerm: state.search.searchTerm
    });

export default connect(mapStateToProps)(ReviewList);
