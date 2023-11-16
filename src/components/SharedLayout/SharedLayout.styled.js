import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #4caf50;
  padding: 15px;
`;

export const StyledLink = styled(NavLink)`
  color: #fff;
  padding: 12px;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  padding: 8px;

  &.active {
    border: 2px solid #8dc6ff;
    border-radius: 4px;
    color: #8dc6ff;
  }

  &:hover {
    color: #8dc6ff;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;
`;
