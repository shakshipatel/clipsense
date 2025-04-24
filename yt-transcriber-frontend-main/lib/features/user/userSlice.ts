import { RootState } from "@/lib/store";

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface UserState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any,
  access_token: string
}

const initialState: UserState = {
  user: null,
  access_token: ""
};

const getInitialState = (): UserState => {
  if (typeof window !== "undefined") {
    const storedState = window.localStorage.getItem("user_slice");
    if (storedState) {
      try {
        return JSON.parse(storedState);
      } catch (error) {
        console.error("Error parsing stored user state:", error);
      }
    }
  }
  return initialState;
};


export const userSlice = createSlice({
  name: "user_slice",
  initialState: getInitialState(),
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      localStorage.setItem("user_slice", JSON.stringify(action.payload));
      console.log(action.payload)
      // state = {user: action.payload.user, access_token: action.payload.access_token};
      state.user = action.payload.user;
      state.access_token = action.payload.access_token;
    },
    removeUser: (state) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state = initialState
    },
    updateUserOnly: (state, action) => {
      state.user = action.payload
    }
  }
})

export const { setUser, removeUser, updateUserOnly } = userSlice.actions

export const selectUser = (state: RootState) => state.user_slice

export default userSlice.reducer