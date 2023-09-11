import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] }

export const RandomPinSlice = createSlice({
    name: 'randompin', // name of data state
    initialState, // default data
    reducers: {
        addPin: (state, res) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = [...state.value, res.payload]
        },
        removePin: (state, res) => {
            const arr = state.value;
            arr.splice(res.payload, 1);
            state.value = [...arr];
        }
    }
})

// Reducer Function 
export const { addPin, removePin } = RandomPinSlice.actions;

// Export Reducer 
export default RandomPinReducer = RandomPinSlice.reducer;
