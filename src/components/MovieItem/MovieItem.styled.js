import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviePoster = styled.img`
  border-radius: 4px;
  width: 300px;
  height: 400px;
  object-fit: cover;
`;

export const MovieTitle = styled.p`
  color: darkblue;
  margin: 10;
  font-size: large;
  font-weight: 700;
  max-width: 300px;
`;

export const MovieCard = styled.li`
  display: flex;
  margin: 10px 20px;
`;

export const LinkToMovie = styled(Link)`
  text-decoration: none;
`;
