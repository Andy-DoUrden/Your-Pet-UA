import { NoNoticesFound, NoNoticesFoundIcon } from './AllNotices.styled.js';
import sprite from '../Icons/sprite.svg';
function NoMatchesFound() {
  return (
    <NoNoticesFound>
      <NoNoticesFoundIcon>
        <use href={sprite + '#iconPaw'} />
      </NoNoticesFoundIcon>{' '}
      Нічого не знайдено{' '}
      <NoNoticesFoundIcon>
        <use href={sprite + '#iconPaw'} />
      </NoNoticesFoundIcon>
    </NoNoticesFound>
  );
}

export default NoMatchesFound;
