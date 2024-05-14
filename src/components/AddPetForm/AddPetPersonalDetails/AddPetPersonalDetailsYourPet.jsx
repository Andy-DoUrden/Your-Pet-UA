import { Field, Form, Formik, ErrorMessage } from 'formik';
import { object, string, date } from 'yup';
import {
  ButtonContainer,
  ButtonNextBack,
  IconArrow,
  IconPaw,
} from '../AddPetForm.styled';
import sprite from '../../../ui/Icons/sprite.svg';
import {
  ErrorPersonalInfoText,
  InputList,
} from './AddPetPersonalDetails.styled';

const schema = object({
  name: string()
    .matches(
      /^([А-ЩЬЮЯҐЄIЇІІа-щьюяґєіїьі]+\s?){1,}$/iu,
      'Допустимі тільки Українські символи',
    )
    .min(2, "Ім'я повинне містити від 2 символів")
    .max(16, "Ім'я повинне містити до 16 символів")
    .required("Введіть ім'я"),
  date: date()
    .required('Введіть дату народження')
    .max(new Date(), 'Дата народження не може бути у майбутньому'),
  type: string()
    .matches(
      /^([А-ЩЬЮЯҐЄIЇІІа-щьюяґєіїьі]+\s?){1,}$/iu,
      'Допустимі тільки Українські символи',
    )
    .min(2, 'Порода повинна містити від 2 символів')
    .max(16, 'Порода повинна містити до 16 символів')
    .required('Введіть породу'),
});

const AddPetPersonalDetailsYourPet = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Formik
      initialValues={props.data}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ values, touched, errors }) => (
        <Form>
          <InputList>
            <label>
              {"Ім'я улюбленця"}
              <Field
                type="text"
                name="name"
                placeholder="Введіть ім'я"
                className={`${touched.name && errors.name ? 'is-invalid' : ''}`}
              />
              <ErrorMessage name="name" component={ErrorPersonalInfoText} />
            </label>
            <label>
              Дата народження
              <Field
                type="date"
                name="date"
                placeholder="Кажіть дату народження"
                className={`${touched.date && errors.date ? 'is-invalid' : ''}`}
              />
              <ErrorMessage name="date" component={ErrorPersonalInfoText} />
            </label>
            <label>
              Порода
              <Field
                type="text"
                name="type"
                placeholder="Вкажіть породу"
                className={`${touched.type && errors.type ? 'is-invalid' : ''}`}
              />
              <ErrorMessage name="type" component={ErrorPersonalInfoText} />
            </label>
          </InputList>

          <ButtonContainer>
            <ButtonNextBack className="buttonNext" type="submit">
              Далі
              <IconPaw>
                <use href={sprite + '#iconPaw'}></use>
              </IconPaw>
            </ButtonNextBack>
            <ButtonNextBack
              className="buttonBack"
              type="button"
              onClick={() => props.prev(values)}
            >
              <IconArrow>
                <use href={sprite + '#iconArrowLeft'}></use>
              </IconArrow>
              Назад
            </ButtonNextBack>
          </ButtonContainer>
        </Form>
      )}
    </Formik>
  );
};

export default AddPetPersonalDetailsYourPet;
