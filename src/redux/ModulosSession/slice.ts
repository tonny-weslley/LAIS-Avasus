import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selected: "populares"
}
 
const modulosSessionslice = createSlice({
    name: "modulosSession",
    initialState,
    reducers: {
        setModuloSession(state, action) {
            state.selected = action.payload;
        }
    }
});

export const { setModuloSession } = modulosSessionslice.actions;
export default modulosSessionslice.reducer;