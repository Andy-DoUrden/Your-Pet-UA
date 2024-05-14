import { Field, ErrorMessage, Form, Formik } from 'formik';
import { object, string, number } from 'yup';
import {
  AvatarContainer,
  ErMsFile,
  IconFemale,
  IconMale,
  IconPlus,
  InputFile,
  InputList,
  LabelInputFile,
  PhotoContainer,
  SexList,
  ErrorMoreInfoText,
  SexContainer,
  ErrorSex,
  LeftContainer,
  DesktopContainer,
  InputContainer,
  IconBigPlus,
  ErrorMoreInfoComments,
} from './AddPetMoreInfo.styled';
import { useEffect, useState } from 'react';
import {
  ButtonContainer,
  ButtonNextBack,
  IconArrow,
  IconPaw,
} from '../AddPetForm.styled';
import sprite from '../../../ui/Icons/sprite.svg';

const schema = object({
  sex: string().required('Вкажіть стать'),
  location: string()
    .matches(
      /^([А-ЩЬЮЯҐЄIЇІІа-щьюяґєіїьі]+\s?){1,}$/iu,
      'Використовуйте тільки українські літери',
    )
    .min(2, 'Назва міста має містити від 2 символів')
    .required('Вкажіть місто'),
  price: number()
    .typeError('Вкажіть валідне число')
    .required('Вкажіть ціну')
    .min(0.01, 'Ціна має бути більше 0'),
  comments: string()
    .min(2, 'Коментар повинен містити від 2 символів')
    .max(120, 'Коментар повинен містити до 120 символів')
    .required('Введіть коментар'),
});

const AddPetMoreInfoSell = (props) => {
  const [selectedFile, setSelectedFile] = useState(props.selectedFile || null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [erMessage, setErMessage] = useState('');

  useEffect(() => {
    props.setIsTitleCentered(true);
    return () => {
      props.setIsTitleCentered(false);
    };
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const maxSize = 3 * 1024 * 1024;
    if (
      file.size <= maxSize &&
      (file.type === 'image/jpeg' || file.type === 'image/png')
    ) {
      setSelectedFile(file);
      setErMessage('');
    } else {
      setSelectedFile(null);
      setErMessage('Please select a JPEG or PNG file within 3MB size limit');
    }
  };

  const handleSubmit = (values) => {
    if (!selectedFile) {
      setFormSubmitted(true);
      return;
    }
    props.next(values, true, selectedFile);
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
            <DesktopContainer>
              <LeftContainer>
                <SexContainer className="moreInfoNotices">
                  <p>Стать</p>
                  <SexList>
                    <Field
                      type="radio"
                      name="sex"
                      id="female"
                      value="Ж"
                      className={`${
                        touched.sex && errors.sex ? 'is-invalid' : ''
                      }`}
                    />
                    <label htmlFor="female">
                      <IconFemale className="iconFemale">
                        <use href={sprite + '#iconFemale'} />
                      </IconFemale>
                      Ж
                    </label>

                    <Field
                      type="radio"
                      name="sex"
                      id="male"
                      value="Ч"
                      className={`${
                        touched.sex && errors.sex ? 'is-invalid' : ''
                      }`}
                    />
                    <label htmlFor="male">
                      <IconMale className="iconMale">
                        <use href={sprite + '#iconMale'} />
                      </IconMale>
                      Ч
                    </label>
                    <ErrorMessage name="sex" component={ErrorSex} />
                  </SexList>
                </SexContainer>

                <AvatarContainer className="moreInfoNotices">
                  <p>Виберіть фото улюбленця:</p>

                  <LabelInputFile
                    className={
                      erMessage !== '' || (formSubmitted && !selectedFile)
                        ? 'no-image-selected'
                        : ''
                    }
                  >
                    {selectedFile ? (
                      <div>
                        <PhotoContainer
                          src={URL.createObjectURL(selectedFile)}
                          alt="User's file"
                          style={{ maxWidth: '300px' }}
                        />
                      </div>
                    ) : (
                      <>
                        <IconPlus>
                          <use href={sprite + '#iconPlusAvatar'} />
                        </IconPlus>
                        <IconBigPlus>
                          <use href={sprite + '#iconPlus'} />
                        </IconBigPlus>
                      </>
                    )}
                    <InputFile
                      type="file"
                      name="image"
                      accept="image/jpeg, image/png"
                      onChange={handleFileChange}
                    />
                  </LabelInputFile>
                </AvatarContainer>
              </LeftContainer>

              {erMessage && <ErMsFile>{erMessage}</ErMsFile>}
              <InputContainer>
                <label>
                  Місто
                  <Field
                    className={`${
                      touched.location && errors.location ? 'is-invalid' : ''
                    }`}
                    type="text"
                    name="location"
                    placeholder="Вкажіть місто"
                  />
                  <ErrorMessage name="location" component={ErrorMoreInfoText} />
                </label>

                <label>
                  Ціна(грн)
                  <Field
                    type="text"
                    name="price"
                    placeholder="Вкажіть ціну"
                    className={`${
                      touched.price && errors.price ? 'is-invalid' : ''
                    }`}
                  />
                  <ErrorMessage name="price" component={ErrorMoreInfoText} />
                </label>

                <label>
                  Коментар
                  <Field
                    className={
                      'moreInfoSell' +
                      `${
                        touched.comments && errors.comments ? ' is-invalid' : ''
                      }`
                    }
                    as="textarea"
                    type="text"
                    name="comments"
                    placeholder="Введіть коментар"
                  />
                  <ErrorMessage
                    name="comments"
                    component={ErrorMoreInfoComments}
                  />
                </label>
              </InputContainer>
            </DesktopContainer>

            <ButtonContainer>
              <ButtonNextBack className="buttonNext" type="submit">
                Готово
                <IconPaw>
                  <use href={sprite + '#iconPaw'}></use>
                </IconPaw>
              </ButtonNextBack>

              <ButtonNextBack
                className="buttonBack"
                type="button"
                onClick={() => props.prev(values, selectedFile)}
              >
                <IconArrow>
                  <use href={sprite + '#iconArrowLeft'}></use>
                </IconArrow>
                Назад
              </ButtonNextBack>
            </ButtonContainer>
          </InputList>
        </Form>
      )}
    </Formik>
  );
};

export default AddPetMoreInfoSell;
