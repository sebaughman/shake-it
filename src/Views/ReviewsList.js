import React, { Component } from 'react';
import ReviewItem from '../Components/ReviewItem'
import { isArray } from 'util';

class ReviewList extends Component {

  get reviewItems() {
    const { reviews } = this.props
    if (isArray(reviews)) {
      return reviews.map((review, i) => <ReviewItem key={i} {...review} />)
    }
    return '...loading'
  }

  render() {
    return (
      <div>
        <div className='section-title'>Reviews</div>
        {this.reviewItems}
      </div>
    )
  }
}

export default ReviewList