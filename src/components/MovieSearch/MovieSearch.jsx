import React, { Component } from 'react';
import fetchApiSearch from '../../service/fetchApiSearch';
import MoviesList from '../MoviesList/MoviesList';
import { Button, Input, SearchBlock } from './styledComponent';

export default class MoviesSearch extends Component {
  state = {
    films: [],
    searchInput: '',
  };

  handlerInput = e => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  handlerSearchButton = () => {
    if (this.state.searchInput) {
      fetchApiSearch(this.state.searchInput).then(data =>
        this.setState({
          films: data.results,
          searchInput: '',
        }),
      );
    }
  };

  render() {
    const { films } = this.state;
    return (
      <>
        <SearchBlock>
          <Input
            value={this.state.searchInput}
            type="text"
            placeholder="input query"
            onChange={this.handlerInput}
          />
          <Button type="button" onClick={this.handlerSearchButton}>
            S
          </Button>
        </SearchBlock>
        {films.length > 0 && <MoviesList films={films} />}
      </>
    );
  }
}
