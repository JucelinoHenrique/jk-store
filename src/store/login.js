import { createSlice } from "@reduxjs/toolkit";
import Users from "../mock/Users.json";
const initialState = {
  user: "",
  password: "",
  isAuthenticated: false,
  errorMessage: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    setPassword: (state, action) => {
      state.password = action.payload;
    },

    login: (state, action) => {
      const User = Users.find(
        (user) => user.email === state.user && user.password === state.password
      );

      if (User) {
        state.isAuthenticated = true;
        state.errorMessage = "login realizado com sucesso";
      } else {
        state.isAuthenticated = false;
        state.errorMessage = "usuario ou senha invalidos";
      }
    },
  },
});

export const { setPassword, login, setUser } = loginSlice.actions;

export default loginSlice.reducer;
