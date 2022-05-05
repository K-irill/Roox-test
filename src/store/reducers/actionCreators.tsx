import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUsers } from "../../types/types";

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUsers[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOneUser = createAsyncThunk(
  "users/fetchOneUser",
  async (id: string | undefined, thunkAPI) => {
    try {
      const response = await axios.get<IUsers>(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
