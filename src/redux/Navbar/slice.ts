import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: "home"
}

const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        setPage(state, action) {
            state.page = action.payload;
        }
    }
});

export const { setPage } = navbarSlice.actions;
export default navbarSlice.reducer;