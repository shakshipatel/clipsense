import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "@/lib/store"
import { TranscriberFlowState } from "@/contants/transcriberFlowState";

export interface CurrentDialogState {
  currentPage: TranscriberFlowState;
  youtubeLink: string;
}

const initialState: CurrentDialogState = {
  currentPage: "LINK_SELECTION",
  youtubeLink: ""
}

export const currentDialogSlice = createSlice({
  name: "current_dialog_slice",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<TranscriberFlowState>) => {
      state.currentPage = action.payload
    },
    setYoutubeLink: (state, action: PayloadAction<string>) => {
      state.youtubeLink = action.payload
    },
    resetAll: (state) => {
      state.currentPage = initialState.currentPage
      state.youtubeLink = initialState.youtubeLink
    }
  }
})

export const { setCurrentPage, setYoutubeLink, resetAll } = currentDialogSlice.actions

export const selectCurrentDialogPage = (state: RootState) => state.current_dialog_slice.currentPage
export const selectYoutubeLink = (state: RootState) => state.current_dialog_slice.youtubeLink

export default currentDialogSlice.reducer
