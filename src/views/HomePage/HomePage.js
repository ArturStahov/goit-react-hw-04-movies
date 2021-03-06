import React, { Component } from 'react';
import fetchApiPopular from '../../service/fetchApiPopular';
import MoviesList from '../../components/MoviesList/MoviesList';
import InfinityScroll from '../../service/InfinityScroll';

export default class HomePage extends Component {
  state = {
    films: [],
    page: 1,
  };

  componentDidMount() {
    InfinityScroll('#trackingObj', this.fetchApi);
    localStorage.removeItem('Location');
  }

  fetchApi = () => {
    fetchApiPopular(this.state.page).then(data => {
      if (this.state.films.length < data.total_results) {
        this.setState(prevState => {
          return {
            films: [...prevState.films, ...data.results],
            page: prevState.page + 1,
          };
        });
      }
    });
  };

  render() {
    const { films, page } = this.state;
    const withPage = page - 1;
    return (
      <>
        {films.length > 0 && (
          <MoviesList
            films={films}
            withUrl={this.props.match.url}
            withPage={withPage}
          />
        )}
        <div id="trackingObj"></div>
      </>
    );
  }
}
