import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  ReleaseData,
  Overlay,
  Title,
  Image,
  ListItem,
  List,
} from './styledComponent';
import DefaultImg from '../../img/default-image.jpg';
import createImgUrl from '../../service/createImgUrl';

export default function MovieList({
  films,
  withUrl,
  withPage,
  queryUserInput = '',
}) {
  return (
    <List>
      {films.map(({ id, original_title, poster_path, release_date }) => (
        <NavLink
          key={id}
          to={{
            pathname: `movies/${id}`,
            state: {
              withUrl,
              withPage,
              queryUserInput,
              films,
              elemDomId: poster_path && poster_path.slice(1, 6),
            },
          }}
        >
          <ListItem data-type={`${poster_path && poster_path.slice(1, 6)}`}>
            <Overlay>
              <Title>{original_title}</Title>
              <ReleaseData>
                {release_date ? release_date.slice(0, 4) : 'no date'}
              </ReleaseData>
            </Overlay>
            <Image
              src={poster_path ? createImgUrl(poster_path) : DefaultImg}
              alt={original_title}
            />
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
}
