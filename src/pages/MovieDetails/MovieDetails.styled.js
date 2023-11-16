import styled from 'styled-components';

import { NavLink, Link } from 'react-router-dom';

export const MovieCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-bottom: 10px;
`;

export const MovieCardBox = styled.div`
  padding: 15px;
`;

export const MoviePoster = styled.img`
  border-radius: 4px;
`;

export const MovieInfo = styled.span`
  margin-right: 20px;
  color: darkblue;
  font-weight: 600;
`;

export const MovieBox = styled.div`
  margin-bottom: 10px;
`;

export const MovieOverview = styled.h3`
  margin: 40px 0 10px;
`;

export const MovieOverviewText = styled.p`
  width: 33%;
`;

export const MovieNav = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const MovieNavItem = styled.li`
  padding: 10px;
`;

export const MovieNavLink = styled(NavLink)`
  color: darkblue;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  padding: 8px;

  &.active {
    border: 1px solid darkblue;
    border-radius: 6px;
  }
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  color: darkblue;
  margin-bottom: 25px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
`;
