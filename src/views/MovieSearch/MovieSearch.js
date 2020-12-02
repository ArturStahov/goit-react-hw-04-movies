import React, { Component } from 'react';
import fetchApiSearch from '../../service/fetchApiSearch';
import MoviesList from '../../components/MoviesList/MoviesList';
import styled from 'styled-components';

const SearchBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 40px;
`;
const Input = styled.input`
  width: 300px;
  height: 30px;
  border: 2px solid grey;
  border-radius: 1rem;
  padding-left: 10px;
  outline: none;
  margin-right: 10px;
  &:focus {
    box-shadow: inset 4px 4px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;
const Button = styled.button`
  width: 40px;
  height: 40px;
  border: 4px double #000000;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #ff4040;
  }
`;

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
