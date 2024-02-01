import { createSlice } from "@reduxjs/toolkit";



const cacheSuggestionSlice = createSlice({
    name: "cacheSuggestion",
    initialState: {},
    reducers:{
        addToCache(state, action){
            return {...action.payload,...state}
        }
    }
})
export const {addToCache}  = cacheSuggestionSlice.actions;
export default cacheSuggestionSlice.reducer;