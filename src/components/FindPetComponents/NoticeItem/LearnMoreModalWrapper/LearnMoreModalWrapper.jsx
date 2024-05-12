import {
  LearnMoreWrapper,
  LearnMoreImgWrapper,
  LearnMoreImg,
  ItemCategory,
  LearnMoreDataWrapper,
  LearnMoreTitle,
  LearnMoreDataItem,
  LearnMoreDataLeft,
  LearnMoreDataRight,
  LearnMoreDataLink,
  LearnMoreComment,
  LearnMoreBtsWrapper,
  LearnMoreContactBtn,
  LearnMoreContactBtnText,
  LearnMoreAddFvrtBtn,
  LearnMoreAddFvrtBtnText,
  LearnMoreAddFvrtBtnIcon,
  DeleteIcon,
} from './LearnMoreModalWrapper.styled';
import { useGetOneNoticeQuery } from '../../../../redux/API/RTKQueryApi';

const LearnMoreModalWrapper = ({
  _id,
  sprite,
  isFavorite,
  handleFavoriteClick,
  category,
  setShowModal,
}) => {
  const { data, isLoading, error } = useGetOneNoticeQuery(_id);

  return (
    <LearnMoreWrapper>
      {isLoading && <div>Loading...</div>}
      {data?.notice && data?.owner && (
        <>
          <DeleteIcon
            onClick={() => {
              setShowModal(false);
            }}
          >
            <use href={sprite + '#iconCross'} />
          </DeleteIcon>
          <LearnMoreImgWrapper>
            <LearnMoreImg src={data.notice.avatarURL} />
            <ItemCategory>{category}</ItemCategory>
          </LearnMoreImgWrapper>

          <LearnMoreDataWrapper>
            <LearnMoreTitle>{data.notice.title}</LearnMoreTitle>

            <LearnMoreDataItem>
              <LearnMoreDataLeft>{"Ім'я"}:</LearnMoreDataLeft>
              <LearnMoreDataRight>{data.notice.name}</LearnMoreDataRight>
            </LearnMoreDataItem>
            <LearnMoreDataItem>
              <LearnMoreDataLeft>День народження:</LearnMoreDataLeft>
              <LearnMoreDataRight>{data.notice.date}</LearnMoreDataRight>
            </LearnMoreDataItem>
            <LearnMoreDataItem>
              <LearnMoreDataLeft>Порода:</LearnMoreDataLeft>
              <LearnMoreDataRight>{data.notice.type}</LearnMoreDataRight>
            </LearnMoreDataItem>
            <LearnMoreDataItem>
              <LearnMoreDataLeft>Локація:</LearnMoreDataLeft>
              <LearnMoreDataRight>{data.notice.location}</LearnMoreDataRight>
            </LearnMoreDataItem>
            <LearnMoreDataItem>
              <LearnMoreDataLeft>Стать:</LearnMoreDataLeft>
              <LearnMoreDataRight>{data.notice.sex}</LearnMoreDataRight>
            </LearnMoreDataItem>
            <LearnMoreDataItem>
              <LearnMoreDataLeft>Імейл:</LearnMoreDataLeft>
              <LearnMoreDataLink
                href={`mailto:${data.owner && data.owner.email}`}
              >
                {data.owner && data.owner.email}
              </LearnMoreDataLink>
            </LearnMoreDataItem>
            <LearnMoreDataItem>
              <LearnMoreDataLeft>Телефон:</LearnMoreDataLeft>
              <LearnMoreDataLink href={`tel:${data.owner && data.owner.phone}`}>
                {data.owner && data.owner.phone}
              </LearnMoreDataLink>
            </LearnMoreDataItem>
          </LearnMoreDataWrapper>
          <LearnMoreComment>Коментар: {data.notice.comments}</LearnMoreComment>
          <LearnMoreBtsWrapper>
            <LearnMoreContactBtn href={`tel:${data.owner && data.owner.phone}`}>
              <LearnMoreContactBtnText>Звязатись</LearnMoreContactBtnText>
            </LearnMoreContactBtn>
            <LearnMoreAddFvrtBtn onClick={handleFavoriteClick}>
              <LearnMoreAddFvrtBtnText>
                Додати:
                <LearnMoreAddFvrtBtnIcon isFavorite={isFavorite}>
                  <use href={sprite + '#iconHeart'} />
                </LearnMoreAddFvrtBtnIcon>
              </LearnMoreAddFvrtBtnText>
            </LearnMoreAddFvrtBtn>
          </LearnMoreBtsWrapper>
        </>
      )}
      {error && <div>{error.message}</div>}
    </LearnMoreWrapper>
  );
};

export default LearnMoreModalWrapper;
