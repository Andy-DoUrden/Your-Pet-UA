import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../redux/auth/operations';
import {
  RegisterForm,
  Input,
  Button,
  Text,
  Title,
  ConfirmPassword,
  Link,
  Validation,
  InputValidation,
  ConfirmValidation,
  ClearButton,
  Svg,
  SvgEye,
  SectionRegister,
} from './RegisterForm.styled';
import { useFormik } from 'formik';
// import { Container } from "../../Layout/Container/Container"
import sprite from '../../../ui/Icons/sprite.svg';
import { Container } from '../../Layout/Container/Container';
import { login } from '../../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { selectIsAuthenticated } from '../../../redux/auth/selectors';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const validationSchema = Yup.object({
    userName: Yup.string()
      .min(2, "Ім'я має містити мінімум 2 символи")
      .max(16, "Ім'я має містити максимум 16 символів")
      .matches(/^[а-яА-Я\s]+$/, "Ім'я може містити українські букви та пробіли")
      .required("Ім'я обов'язкове"),
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
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Паролі мають співпадати')
      .required("Підтведження паролю обов'язкове"),
  });

  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        if (values.password === values.confirmPassword) {
          await dispatch(
            register({
              name: values.userName,
              email: values.email.toLocaleLowerCase(),
              password: values.password,
            }),
          );
          await dispatch(
            login({
              email: values.email.toLocaleLowerCase(),
              password: values.password,
            }),
          );
          if (isAuthenticated) {
            navigate('/user');
          }
        } else {
          alert(
            'Passwords do not match. Please ensure that both password fields contain the same value.',
          );
        }
      } catch (error) {
        console.error('Registration error:', error);
      }
    },
  });
  {
    return (
      <SectionRegister>
        <Container>
          <RegisterForm onSubmit={formik.handleSubmit}>
            <Title>Реєстрація</Title>
            <InputValidation>
              <Input
                id="userName"
                name="userName"
                type="text"
                placeholder="Ім'я"
                onChange={formik.handleChange}
                value={formik.values.userName}
                className={`${
                  formik.touched.userName && formik.errors.userName
                    ? 'is-invalid'
                    : ''
                }`}
              />
              {formik.touched.userName && formik.errors.userName ? (
                <>
                  {formik.values.userName && (
                    <ClearButton
                      type="button"
                      onClick={() => {
                        formik.setFieldValue('userName', '');
                        formik.setFieldTouched('userName', false);
                      }}
                    >
                      <Svg>
                        <use href={sprite + '#iconCross'}></use>
                      </Svg>
                    </ClearButton>
                  )}
                  <Validation>{formik.errors.userName}</Validation>
                </>
              ) : null}
            </InputValidation>
            <InputValidation>
              <Input
                id="email"
                name="email"
                type="text"
                placeholder="Імейл"
                onChange={formik.handleChange}
                value={formik.values.email}
                className={`${
                  formik.touched.email && formik.errors.email
                    ? 'is-invalid'
                    : ''
                }`}
                // isValidating={!formik.touched.email || !formik.errors.email}
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
            </InputValidation>
            <InputValidation>
              <Input
                id="password"
                name="password"
                type={formik.values.showPassword ? 'text' : 'password'}
                placeholder="Пароль"
                onChange={formik.handleChange}
                value={formik.values.password}
                className={`${
                  formik.touched.password && formik.errors.password
                    ? 'is-invalid'
                    : ''
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
            </InputValidation>

            {/* ПЕРЕВІРКА ПАРОЛЯ */}
            <ConfirmValidation>
              <ConfirmPassword
                id="confirmPassword"
                name="confirmPassword"
                type={formik.values.showConfirmPassword ? 'text' : 'password'}
                placeholder="Підтвердіть пароль"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                className={`${
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? 'is-invalid'
                    : ''
                }`}
              />
              <ClearButton
                type="button"
                onClick={() => {
                  formik.setFieldTouched('confirmPassword', false);
                  formik.setFieldValue(
                    'showConfirmPassword',
                    !formik.values.showConfirmPassword,
                  );
                }}
              >
                {formik.values.showConfirmPassword ? (
                  <SvgEye>
                    <use href={sprite + '#iconEyeOpen'}></use>
                  </SvgEye>
                ) : (
                  <SvgEye>
                    <use href={sprite + '#iconEyeClosed'}></use>
                  </SvgEye>
                )}
              </ClearButton>
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <Validation>{formik.errors.confirmPassword}</Validation>
              ) : null}
            </ConfirmValidation>
            <Button type="submit">Зареєструватись</Button>
            <Text>
              {' '}
              Маєте акаунт? <Link to="/login">Увійти</Link>
            </Text>
          </RegisterForm>
        </Container>
      </SectionRegister>
    );
  }
}
