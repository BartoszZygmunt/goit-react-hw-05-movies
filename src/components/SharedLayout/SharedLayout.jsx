import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../Loader';
import { Container } from '../Container';

import { StyledLink, StyledNav, Header } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <StyledNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </StyledNav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};
