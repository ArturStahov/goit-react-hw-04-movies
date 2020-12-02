import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import HomePage from './views/HomePage/HomePage';
import PageHeader from './components/PageHeader/PageHeader';
import PageMain from './components/PageMain/PageMain';
import PageNav from './components/PageNav/PageNav';
import MoviesSearch from './components/MovieSearch/MovieSearch';
import OneMoviePage from './views/OneMoviePage/OneMoviePage';

export default class App extends Component {
  render() {
    return (
      <Router>
        <PageHeader>
          <PageNav>
            <ul>
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies">SearchMovies</NavLink>
              </li>
            </ul>
          </PageNav>
        </PageHeader>
        <PageMain>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies/:movieID" component={OneMoviePage} />
            <Route path="/movies" component={MoviesSearch} />
            {/* <Route path='/:movieID' component={OneMoviePage} /> */}
          </Switch>
        </PageMain>
      </Router>
    );
  }
}
// render={(props) => { return <OneMoviePage {...props} /> }}
