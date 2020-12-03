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

  componentDidMount() {
    if (localStorage.getItem('Location')) {
      const location = JSON.parse(localStorage.getItem('Location'));
      console.log(location);
      const { films, withPage, queryUserInput } = location;
      this.setState({
        films,
        searchInput: queryUserInput,
        page: withPage + 1,
      });
      this.regObserv();
      localStorage.removeItem('Location');
    }
  }

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

  regObserv = () => {
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
  };

  handlerSearchButton = () => {
    if (this.state.searchInput) {
      this.regObserv();
    }
  };

  render() {
    const { films } = this.state;
    const withPage = this.state.page - 1;
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
        {films.length > 0 && (
          <MoviesList
            films={films}
            withUrl={this.props.match.url}
            withPage={withPage}
            queryUserInput={this.state.searchInput}
          />
        )}
        <div id="trackingObj"></div>
      </>
    );
  }
}
