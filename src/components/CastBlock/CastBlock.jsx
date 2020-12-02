import React, { Component } from 'react';
import fetchCast from '../../service/fetchCast';
import createImgUrl from '../../service/createImgUrl';
import DefaultImage from '../../img/default-image.jpg';
import styled from 'styled-components';

const ListCast = styled.ul`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const CastItem = styled.li`
  max-width: 270px;
`;

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
                <img
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
