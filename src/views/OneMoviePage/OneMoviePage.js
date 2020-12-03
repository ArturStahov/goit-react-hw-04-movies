import React, { Component } from 'react';
import fetchOneMovies from '../../service/fetchOneMovies';
import Section from '../../components/Section/Section';
import OneMovieDetails from '../../components/OneMovieDetails/OneMovieDetails';
import CastBlock from '../../components/CastBlock/CastBlock';
import ReviewsBlocks from '../../components/ReviewsBlock/ReviewsBlock';
import { Route } from 'react-router-dom';

export default class OneMoviesPage extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    const movieID = Number(this.props.match.params.movieID);
    console.log(this.props);
    fetchOneMovies(movieID).then(data =>
      this.setState({
        movie: data,
      }),
    );
  }

  render() {
    const { movie } = this.state;
    return (
      <>
        <Section>
          {movie && <OneMovieDetails {...this.props} movie={movie} />}
        </Section>
        <Section>
          {movie && (
            <Route
              exact
              path={`${this.props.match.path}/cast`}
              render={props => {
                return <CastBlock {...props} />;
              }}
            />
          )}
          {movie && (
            <Route
              exact
              path={`${this.props.match.path}/reviews`}
              render={props => {
                return <ReviewsBlocks {...props} />;
              }}
            />
          )}
        </Section>
      </>
    );
  }
}
