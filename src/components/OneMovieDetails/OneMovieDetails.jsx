import React from 'react';
import {
  ButtonBack,
  MovieDescription,
  MovieGenresItem,
  MovieGenresList,
  DateRelease,
  Title,
  ContentBox,
  PosterImg,
  Container,
  NavList,
  NavItem,
  NavContainer,
  TitleNav,
} from './styledComponent';
import createImgUrl from '../../service/createImgUrl';
import { NavLink } from 'react-router-dom';
import DefaultImage from '../../img/default-image.jpg';

export default function OneMovieDetail({
  movie: { original_title, poster_path, release_date, overview, genres },
  match,
  location,
}) {
  return (
    <>
      <Container>
        <PosterImg
          src={poster_path ? createImgUrl(poster_path) : DefaultImage}
          alt={original_title}
        />
        <ContentBox>
          <ButtonBack
            onClick={() => {
              localStorage.setItem('Location', JSON.stringify(location.state));
            }}
          >
            <NavLink
              className="link"
              to={location.state ? location.state.withUrl : '/'}
            >
              Back
            </NavLink>
          </ButtonBack>
          <Title>{original_title}</Title>
          <DateRelease>Release: {release_date}</DateRelease>
          <MovieGenresList>
            {genres.map(({ id, name }) => (
              <MovieGenresItem key={id}>{name}</MovieGenresItem>
            ))}
          </MovieGenresList>
          <MovieDescription>{overview}</MovieDescription>
          <NavContainer>
            <TitleNav>Additional Information</TitleNav>
            <NavList>
              <NavItem>
                <NavLink
                  className="link"
                  activeClassName="selected"
                  to={{
                    pathname: `${match.url}/cast`,
                    state: location.state,
                  }}
                >
                  Cast
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="link"
                  activeClassName="selected"
                  to={{
                    pathname: `${match.url}/reviews`,
                    state: location.state,
                  }}
                >
                  Reviews
                </NavLink>
              </NavItem>
            </NavList>
          </NavContainer>
        </ContentBox>
      </Container>
    </>
  );
}
