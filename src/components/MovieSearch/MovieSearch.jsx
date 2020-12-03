import React, { Component } from 'react';
import fetchApiSearch from '../../service/fetchApiSearch';
import MoviesList from '../MoviesList/MoviesList';
import { Button, Input, SearchBlock } from './styledComponent';

export default class MoviesSearch extends Component {
  state = {
    films: [],
    searchInput: '',
    page: 1,
  };

  handlerInput = e => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  fetchApi = () => {
    fetchApiSearch(this.state.searchInput, this.state.page).then(data => {
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

  handlerSearchButton = () => {
    if (this.state.searchInput) {
      const onEntries = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.fetchApi();
          }
        });
      };
      const options = {
        rootMargin: '200px',
        threshold: 0.5,
      };
      const observerApi = new IntersectionObserver(onEntries, options);
      const trackingObj = document.querySelector('#trackingObj');
      observerApi.observe(trackingObj);
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
        <div id="trackingObj"></div>
      </>
    );
  }
}
