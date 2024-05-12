import {
  AttentionWrapper,
  AttentionTitle,
  AttentionText,
  AttentionIcon,
} from './AttentionModalWrapper.styled.js';

import AttentionBtns from '../../AttentionBtns/AttentionBtns.jsx';

const AttentionModalWrapper = ({ setShowModal, sprite }) => {
  return (
    <AttentionWrapper>
      <AttentionIcon
        onClick={() => {
          setShowModal(false);
        }}
      >
        <use href={sprite + '#iconCross'} />
      </AttentionIcon>
      <AttentionTitle>Увага</AttentionTitle>
      <AttentionText>
        Нагадуємо, що певні функції доступні лише авторизованим користувачам.
        Якщо у вас є обліковий запис, увійдіть, використовуючи свої облікові
        дані. Якщо у вас ще немає облікового запису, ви повинні зареєструватися,
        щоб отримати доступ до цих функцій.
      </AttentionText>
      <AttentionBtns />
    </AttentionWrapper>
  );
};

export default AttentionModalWrapper;
