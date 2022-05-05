import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsers } from "../../types/types";
import { fetchOneUser, fetchUsers } from "./actionCreators";

interface IUserState {
  users: IUsers[];
  oneUser: IUsers;
  isLoading: boolean;
  error: string;
}

const initialState: IUserState = {
  users: [],
  oneUser: {} as IUsers,
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    sortUsersCity(state) {
      state.users.sort((a, b) => {
        if (a.address.city < b.address.city) {
          return -1;
        }
        if (a.address.city > b.address.city) {
          return 1;
        }
        return 0;
      });
    },

    sortUsersCompany(state) {
      state.users.sort((a, b) => {
        if (a.company.name < b.company.name) {
          return -1;
        }
        if (a.company.name > b.company.name) {
          return 1;
        }
        return 0;
      });
    },
  },

  extraReducers: {
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUsers[]>) => {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchOneUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchOneUser.fulfilled.type]: (state, action: PayloadAction<IUsers>) => {
      state.isLoading = false;
      state.error = "";
      state.oneUser = action.payload;
    },
    [fetchOneUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
