import React, { Component } from 'react';
import ReviewItem from '../Components/ReviewItem'
import { isArray } from 'util';

class ReviewList extends Component {

  get reviewItems() {
    const { reviews } = this.props
    if (isArray(reviews)) {
      return reviews.map(review => <ReviewItem {...review} />)
    }
    return '...loading'
  }

  render() {
    return (
      <div>{this.reviewItems}</div>
    )
  }
}

export default ReviewList