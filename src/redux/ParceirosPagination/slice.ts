import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: 1,
    limit: 6,
}

const parceirosPaginationSlice = createSlice({
    name: "parceirosPagination",
    initialState,
    reducers: {
        setPage(state, action) {
            state.page = action.payload;
        }
    }
});

export const { setPage } = parceirosPaginationSlice.actions;
export default parceirosPaginationSlice.reducer;