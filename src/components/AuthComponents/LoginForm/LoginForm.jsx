import { useFormik } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import * as Yup from 'yup';
import sprite from '../../../ui/Icons/sprite.svg';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/auth/operations';
import { Container } from '../../Layout/Container/Container';
import {
  Form,
  Svg,
  Email,
  Password,
  Button,
  SvgEye,
  Text,
  Title,
  Link,
  ClearButton,
  Validation,
  EmailValidation,
  PasswordValidation,
  SectionLogin,
} from './LoginForm.styled';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Не правильний формат імейлу')
      .matches(
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        'Не правильний формат імейлу',
      )
      .required("Імейл обов'язковий"),
    password: Yup.string()
      .min(6, 'Пароль має містити мінімум 6 символів')
      .max(16, 'Пароль має містити максимум 16 символів')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
        'Пароль має містити лише англійські літери, принаймні одну цифру, одну малу та одну велику літеру',
      )
      .required("Пароль обов'язковий"),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        login({
          email: values.email.toLowerCase(),
          password: values.password,
        }),
      ).then((action) => {
        if (login.fulfilled.match(action)) {
          navigate('/user');
          Notify.success('Логін успішний');
        } else {
          const error = action.payload;
          if (error && error.response && error.response.status === 401) {
            Notify.failure(error.message || 'Неавторизований користувач');
          } else {
            Notify.failure('Виникла помилка під час логіну');
          }
        }
      });
    },
  });

  return (
    <SectionLogin>
      <Container>
        <Form onSubmit={formik.handleSubmit}>
          <Title>Увійти</Title>
          <EmailValidation>
            <Email
              id="email"
              name="email"
              type="text"
              placeholder="Імейл"
              onChange={formik.handleChange}
              value={formik.values.email}
              className={`${
                !formik.touched.email || !formik.errors.email ? '' : 'invalid'
              }`}
            />

            {formik.touched.email && formik.errors.email ? (
              <>
                {formik.values.email && (
                  <ClearButton
                    type="button"
                    onClick={() => {
                      formik.setFieldValue('email', '');
                      formik.setFieldTouched('email', false);
                    }}
                  >
                    <Svg>
                      <use href={sprite + '#iconCross'}></use>
                    </Svg>
                  </ClearButton>
                )}
                <Validation>{formik.errors.email}</Validation>
              </>
            ) : null}
          </EmailValidation>
          <PasswordValidation>
            <Password
              id="password"
              name="password"
              type={formik.values.showPassword ? 'text' : 'password'}
              placeholder="Пароль"
              onChange={formik.handleChange}
              value={formik.values.password}
              className={`${
                !formik.touched.password || !formik.errors.password
                  ? ''
                  : 'invalid'
              }`}
            />
            <ClearButton
              type="button"
              onClick={() => {
                formik.setFieldTouched('password', false);
                formik.setFieldValue(
                  'showPassword',
                  !formik.values.showPassword,
                );
              }}
            >
              {formik.values.showPassword ? (
                <SvgEye>
                  <use href={sprite + '#iconEyeOpen'}></use>
                </SvgEye>
              ) : (
                <SvgEye>
                  <use href={sprite + '#iconEyeClosed'}></use>
                </SvgEye>
              )}
            </ClearButton>
            {formik.touched.password && formik.errors.password ? (
              <Validation>{formik.errors.password}</Validation>
            ) : null}
          </PasswordValidation>
          <Button type="submit">Увійти</Button>
          <Text>
            Немає акаунту? <Link to="/register">Зареєструватись</Link>
          </Text>
        </Form>
      </Container>
    </SectionLogin>
  );
};
export default Login;
