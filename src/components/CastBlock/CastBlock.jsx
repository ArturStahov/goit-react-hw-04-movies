import React, { Component } from 'react';
import fetchCast from '../../service/fetchCast';
import createImgUrl from '../../service/createImgUrl';
import DefaultImage from '../../img/default-image.jpg';
import { ListCast, CastItem, CastImage } from './styledComponent';

export default class CastBlocks extends Component {
  state = {
    cast: null,
  };

  componentDidMount() {
    const movieID = Number(this.props.match.params.movieID);
    console.log(this.props);

    fetchCast(movieID).then(data =>
      this.setState({
        cast: data.cast,
      }),
    );
  }
  render() {
    return (
      <>
        {this.state.cast && (
          <ListCast>
            {this.state.cast.map(({ name, profile_path, id }) => (
              <CastItem key={id}>
                <h3>{name}</h3>
                <CastImage
                  src={profile_path ? createImgUrl(profile_path) : DefaultImage}
                  alt={name}
                />
              </CastItem>
            ))}
          </ListCast>
        )}
      </>
    );
  }
}
