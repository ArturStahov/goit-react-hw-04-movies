import styled from 'styled-components';

const ButtonBack = styled.div`
  margin-bottom: 25px;
  display: block;

  & > .link {
    padding: 5px 10px;
    color: #200772;
    font-weight: 700;
    border: 4px double grey;
    border-radius: 2rem;
  }
`;
const Container = styled.div`
  padding-bottom: 50px;
  display: flex;
  justify-content: space-between;
`;
const PosterImg = styled.img`
  max-width: 400px;
  margin-right: 20px;
`;
const ContentBox = styled.div`
  padding-top: 30px;
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

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 300px;
`;
const NavItem = styled.li`
  & > .link {
    padding: 5px 10px;
    color: #200772;
    font-weight: 700;
    border: 4px double grey;
    border-radius: 2rem;
  }
  & > .selected {
    color: #ff7400;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const NavContainer = styled.div`
  padding-top: 50px;
  margin: 0 auto;
`;
const TitleNav = styled.h3`
  font-size: 1.3 rem;
  font-weight: 600;
  color: #6a48d7;
  margin-bottom: 25px;
`;

export {
  ButtonBack,
  TitleNav,
  NavContainer,
  NavItem,
  NavList,
  MovieDescription,
  MovieGenresItem,
  MovieGenresList,
  DateRelease,
  Title,
  ContentBox,
  PosterImg,
  Container,
};
