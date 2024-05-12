import { useSelector } from 'react-redux';
import { Container } from '../../Container/Container';
import { ModalUserNav } from './ModalUserNav/ModalUserNav';
import {
  BurgerWrapper,
  ButtonContainer,
  IconLogOut,
  LogoutButton,
  NavContainer,
  NavList,
  StyledNavLink,
} from './ModalBurger.styled';
import sprite from '../../../../ui/Icons/sprite.svg';
import { ModalAuthNav } from './ModalAuthNav/ModalAuthNav';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { selectToken } from '../../../../redux/auth/selectors';
import { useLogOutMutation } from '../../../../redux/API/RTKQueryApi';

export const ModalBurger = ({ onClose, isModalOpen }) => {
  const Token = useSelector(selectToken);
  const [LogOut] = useLogOutMutation();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    onClose(false);
    await LogOut(Token).unwrap();
    navigate('/login');
    localStorage.removeItem('persist:auth');
    window.location.reload();
  };

  const handleKeydown = useMemo(
    () => (e) => {
      if (e.code === 'Escape') {
        onClose(false);
      }
    },

    [onClose],
  );

  useEffect(() => {
    if (!isModalOpen) return;

    window.addEventListener('keydown', handleKeydown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'visible';
    };
  }, [handleKeydown, isModalOpen]);

  function checkScreenWidth() {
    if (window.innerWidth > 1280) {
      onClose(false);
    }
  }

  window.addEventListener('resize', checkScreenWidth);

  return (
    <BurgerWrapper className={isModalOpen ? 'isOpen' : ''}>
      <Container>
        <NavContainer>
          {token ? (
            <ModalUserNav onClose={onClose} />
          ) : (
            <ModalAuthNav onClose={onClose} />
          )}
          <NavList>
            <li>
              <StyledNavLink to="/news" onClick={() => onClose(false)}>
                Новини
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/notices/sell" onClick={() => onClose(false)}>
                Пошук
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/friends" onClick={() => onClose(false)}>
                Наші друзі
              </StyledNavLink>
            </li>
          </NavList>
          {token ? (
            <ButtonContainer>
              <LogoutButton onClick={() => handleLogout()}>
                Вийти
                <IconLogOut>
                  <use href={sprite + '#iconLogout'}></use>
                </IconLogOut>
              </LogoutButton>
            </ButtonContainer>
          ) : (
            <></>
          )}
        </NavContainer>
      </Container>
    </BurgerWrapper>
  );
};
