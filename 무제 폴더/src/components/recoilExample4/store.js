import { atom, selector } from 'recoil';
import axios from 'axios';

export const currentUserIDState = atom({
  key: 'CurrentUserID',
  default: 2,
});

// const currentUserNameState = selector({
//   key: 'CurrentUserName',
//   get: ({ get }) => {
//     return tableOfUsers[get(currentUserIDState)].name;
//   },
// });

export const currentUserNameQuery = selector({
  key: 'CurrentUserName',
  get: async ({ get }) => {
    const response = await axios.get(
      `/api/user-name?id=${get(currentUserIDState)}`
    );
    return response.data.name;
  },
});
