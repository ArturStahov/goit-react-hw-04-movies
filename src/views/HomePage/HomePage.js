import React, { Component } from 'react';
import fetchApiPopular from '../../service/fetchApiPopular';
import MoviesList from '../../components/MoviesList/MoviesList';

export default class HomePage extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    fetchApiPopular().then(data =>
      this.setState({
        films: data.results,
      }),
    );
  }

  render() {
    const { films } = this.state;
    return <>{films.length > 0 && <MoviesList films={films} />}</>;
  }
}
