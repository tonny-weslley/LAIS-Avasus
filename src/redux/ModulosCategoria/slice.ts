import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selected: "Especialização"
}

const modulosCategoriaSlice = createSlice({
    name: "modulosCategoria",
    initialState,
    reducers: {
        setModuloCategoria(state, action) {
            state.selected = action.payload;
        }
    }
});

export const { setModuloCategoria } = modulosCategoriaSlice.actions;
export default modulosCategoriaSlice.reducer;