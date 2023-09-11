import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ItemState = { isBookmarked: boolean };
export type ItemsState = { [key: number]: ItemState };

const initialState = {} as ItemsState;

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    bookmark: (state, action: PayloadAction<[number, boolean]>) => {
      const [id, isBookmarked] = action.payload;
      const item: ItemState | undefined = state[id];
      if (!item) state[id] = { isBookmarked };
      else state[id].isBookmarked = isBookmarked;
    },
  },
});

export const { bookmark } = itemsSlice.actions;
export default itemsSlice.reducer;
