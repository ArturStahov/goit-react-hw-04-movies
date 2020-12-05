import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageHeader from './components/PageHeader/PageHeader';
import PageMain from './components/PageMain/PageMain';
import PageNav from './components/PageNav/PageNav';
import NotFound from './views/NotFound/NotFound';
import Spinner from './components/Spiner/Spiner';
import AnimationBackground from './components/AnimationBackground/AnimationBackground';

const HomeView = lazy(() =>
  import('./views/HomePage/HomePage.js' /* webpackChunkName: "home-page" */),
);
const OneMoviePageView = lazy(() =>
  import(
    './views/OneMoviePage/OneMoviePage.js' /* webpackChunkName: "OneMoviePage" */
  ),
);
const MoviesSearchView = lazy(() =>
  import(
    './components/MovieSearch/MovieSearch.jsx' /* webpackChunkName: "MoviesSearch" */
  ),
);

export default class App extends Component {
  render() {
    return (
      <Router>
        <PageHeader>
          <AnimationBackground />
          <PageNav />
        </PageHeader>
        <PageMain>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route path="/movies/:movieID" component={OneMoviePageView} />
              <Route path="/movies" component={MoviesSearchView} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </PageMain>
      </Router>
    );
  }
}
