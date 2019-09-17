import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

class ReviewItem extends Component {

  getDate(date) {
    return new Date(date).toDateString()
  }

  getStars(rating) {
    return (
      <StarRatings
        rating={rating}
        starDimension="20px"
        starSpacing="5px"
      />
    )
  }


  render() {
    const { id, rating, publish_date, body, author } = this.props
    return (
      <div className='tile row'>
        <div className='author-div'>
          <div>{this.getDate(publish_date)}</div>
          <div className='bold'>{author}</div>
        </div>
        <div className='review-body'>
          <div>{this.getStars(rating)}</div>
          <div>{body}</div>
        </div>
      </div>
    )
  }
}

export default ReviewItem