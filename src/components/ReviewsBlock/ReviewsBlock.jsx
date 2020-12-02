import React, { Component } from 'react';
import fetchReview from '../../service/fetchReview';
import { ReviewItem, ListReview } from './styledComponent';

export default class ReviewBlocks extends Component {
  state = {
    review: [],
  };

  componentDidMount() {
    const movieID = Number(this.props.match.params.movieID);
    fetchReview(movieID).then(data =>
      this.setState({
        review: data.results,
      }),
    );
  }
  render() {
    return (
      <>
        {this.state.review.length > 0 ? (
          <ListReview>
            {this.state.review.map(({ author, content, id }) => (
              <ReviewItem key={id}>
                <h3>author: {author}</h3>
                <p>{content}</p>
              </ReviewItem>
            ))}
          </ListReview>
        ) : (
          <p>No Reviews</p>
        )}
      </>
    );
  }
}
