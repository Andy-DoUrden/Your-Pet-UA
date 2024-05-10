import sprite from '../../../../../ui/Icons/sprite.svg';
import {
  AuthNavStyled,
  AuthNavDesk,
  LoginStyled,
  RegisterStyled,
  IconLogin,
} from './AuthNav.styled';

export const AuthNav = ({ isModalOpen, onClose }) => {
  return (
    <>
      {isModalOpen ? (
        <AuthNavStyled>
          <li>
            <LoginStyled
              to="/login"
              onClick={() => {
                onClose(false);
              }}
            >
              Зайти
              <IconLogin>
                <use href={sprite + '#iconPaw'}></use>
              </IconLogin>
            </LoginStyled>
          </li>

          <li>
            <RegisterStyled
              to="/register"
              onClick={() => {
                onClose(false);
              }}
            >
              Зареєструватись
            </RegisterStyled>
          </li>
        </AuthNavStyled>
      ) : (
        <AuthNavDesk>
          <li>
            <LoginStyled
              to="/login"
              onClick={() => {
                onClose(false);
              }}
            >
              Зайти
              <IconLogin>
                <use href={sprite + '#iconPaw'}></use>
              </IconLogin>
            </LoginStyled>
          </li>

          <li>
            <RegisterStyled
              to="/register"
              onClick={() => {
                onClose(false);
              }}
            >
              Зареєструватись
            </RegisterStyled>
          </li>
        </AuthNavDesk>
      )}
    </>
  );
};
