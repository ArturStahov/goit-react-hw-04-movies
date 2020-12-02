import React from 'react';
import styled from 'styled-components';
import createImgUrl from '../../service/createImgUrl';
import { NavLink } from 'react-router-dom';
import DefaultImage from '../../img/default-image.jpg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PosterImg = styled.img`
  max-width: 400px;
  margin-right: 20px;
`;
const ContentBox = styled.div`
  max-width: 500px;
`;
const Title = styled.h2`
  font-size: 1.4rem;
  color: #6a48d7;
  margin-bottom: 10px;
  text-shadow: 0 0 6px rgba(202, 228, 225, 0.92),
    0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(30, 132, 242, 0.52),
    0 0 21px rgba(30, 132, 242, 0.92), 0 0 34px rgba(30, 132, 242, 0.78),
    0 0 54px rgba(30, 132, 242, 0.92);
`;

const DateRelease = styled.p`
  font-size: 1rem;
  color: #ffaa00;
  margin-bottom: 10px;
`;

const MovieGenresList = styled.ul`
  margin-bottom: 40px;
`;
const MovieGenresItem = styled.li`
  font-size: 1rem;
  color: #ffaa00;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const MovieDescription = styled.p`
  font-size: 1rem;
  color: #06266f;
  margin-bottom: 40px;
`;

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
