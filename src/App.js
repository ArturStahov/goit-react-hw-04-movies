import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './views/HomePage/HomePage';
import PageHeader from './components/PageHeader/PageHeader';
import PageMain from './components/PageMain/PageMain';
import PageNav from './components/PageNav/PageNav';
import MoviesSearch from './components/MovieSearch/MovieSearch';
import OneMoviePage from './views/OneMoviePage/OneMoviePage';
import NotFound from './views/NotFound/NotFound';

export default class App extends Component {
  render() {
    return (
      <Router>
        <PageHeader>
          <PageNav />
        </PageHeader>
        <PageMain>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies/:movieID" component={OneMoviePage} />
            <Route path="/movies" component={MoviesSearch} />
            <Route component={NotFound} />
          </Switch>
        </PageMain>
      </Router>
    );
  }
}
