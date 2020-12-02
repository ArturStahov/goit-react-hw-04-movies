import React from 'react';
import {
  MovieDescription,
  MovieGenresItem,
  MovieGenresList,
  DateRelease,
  Title,
  ContentBox,
  PosterImg,
  Container,
} from './styledComponent';
import createImgUrl from '../../service/createImgUrl';
import { NavLink } from 'react-router-dom';
import DefaultImage from '../../img/default-image.jpg';

export default function OneMovieDetail({
  movie: { original_title, poster_path, release_date, overview, genres },
  pathUrl,
}) {
  return (
    <>
      <Container>
        <PosterImg
          src={poster_path ? createImgUrl(poster_path) : DefaultImage}
          alt={original_title}
        />
        <ContentBox>
          <Title>{original_title}</Title>
          <DateRelease>Release: {release_date}</DateRelease>
          <MovieGenresList>
            {genres.map(({ id, name }) => (
              <MovieGenresItem key={id}>{name}</MovieGenresItem>
            ))}
          </MovieGenresList>
          <MovieDescription>{overview}</MovieDescription>
          <div>
            <h3>Additional Information</h3>
            <ul>
              <li>
                <NavLink to={`${pathUrl}/cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`${pathUrl}/reviews`}>Reviews</NavLink>
              </li>
            </ul>
          </div>
        </ContentBox>
      </Container>
    </>
  );
}
