import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selected: "Especialização",
    page: 1,
    limit: 6,
}

const modulosCategoriaSlice = createSlice({
    name: "modulosCategoria",
    initialState,
    reducers: {
        setModuloCategoria(state, action) {
            state.selected = action.payload;
        },
        setPage(state, action) {
            state.page = action.payload;
        },
    }
});

export const { setModuloCategoria, setPage } = modulosCategoriaSlice.actions;
export default modulosCategoriaSlice.reducer;