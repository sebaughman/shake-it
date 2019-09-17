import React, { Component } from 'react';

class ReviewItem extends Component {


  render() {
    const { id } = this.props
    return (
      <div>{id}</div>
    )
  }
}

export default ReviewItem