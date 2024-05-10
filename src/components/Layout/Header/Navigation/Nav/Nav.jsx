import { NavStyled, StyledNavLink } from './Nav.styled';

export const Nav = () => {
  return (
    <NavStyled>
      <li>
        <StyledNavLink to="/news">Новини</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/notices/sell">Пошук</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/friends">Наші друзі</StyledNavLink>
      </li>
    </NavStyled>
  );
};
