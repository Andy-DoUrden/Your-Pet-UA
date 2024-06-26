import { Form, Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import {
  ErrorCategoryText,
  Input,
  OptionList,
} from './AddPetChooseOption.styled';

import sprite from '../../../ui/Icons/sprite.svg';
import {
  ButtonContainer,
  ButtonNextBack,
  IconArrow,
  IconPaw,
} from '../AddPetForm.styled';
import { useLocation, useNavigate } from 'react-router-dom';

const schema = object({
  category: string().required('Select a category'),
});

const AddPetChooseOption = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCancel = () => {
    location.state ? navigate(location.state.from) : navigate('/user');
  };

  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Formik
      initialValues={props.data}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <OptionList>
          <Input type="radio" name="category" id="your-pet" value="your-pet" />
          <label htmlFor="your-pet">ваш улюбленець</label>

          <Input type="radio" name="category" id="sell" value="sell" />
          <label htmlFor="sell">продаж</label>

          <Input
            type="radio"
            name="category"
            id="lost-found"
            value="lost-found"
          />
          <label htmlFor="lost-found">{'загубив(ла)/знайшов(ла)'}</label>

          <Input
            type="radio"
            name="category"
            id="in-good-hands"
            value="in-good-hands"
          />
          <label htmlFor="in-good-hands">в хороші руки</label>

          <ErrorMessage name="category" component={ErrorCategoryText} />
        </OptionList>

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
            onClick={handleCancel}
            to={location.state.from}
          >
            <IconArrow>
              <use href={sprite + '#iconArrowLeft'}></use>
            </IconArrow>
            Відміна
          </ButtonNextBack>
        </ButtonContainer>
      </Form>
    </Formik>
  );
};

export default AddPetChooseOption;
