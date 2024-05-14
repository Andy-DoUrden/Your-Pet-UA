import { EmptyPetsText } from './EmptyPetsList.styled';

export const EmptyPetsList = () => {
  return (
    <>
      <EmptyPetsText>
        Ви не додали своїх домашніх тварин, якщо ви хочете їх додати, натисніть
        на кнопку &#34;Додати +&#34;
      </EmptyPetsText>
    </>
  );
};
