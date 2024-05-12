import { nanoid } from 'nanoid';

const publicCategories = [
  {
    id: nanoid(),
    to: '/notices/sell',
    text: 'продаж',
  },
  {
    id: nanoid(),
    to: '/notices/lost-found',
    text: 'загубив(ла)/знайшов(ла)',
  },
  {
    id: nanoid(),
    to: '/notices/in-good-hands',
    text: 'в холоші руки',
  },
];

const userCategories = [
  {
    id: nanoid(),
    to: '/notices/favorite',
    text: 'улюблені',
  },
  {
    id: nanoid(),
    to: '/notices/my-ads',
    text: 'мої',
  },
];
const categories = { publicCategories, userCategories };

export default categories;
