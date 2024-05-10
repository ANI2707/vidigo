import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:'search',
    initialState:{
        searchVideos:null,
    },
    reducers:{
        addCacheResults:(state,action)=>{
            state=Object.assign(state,action.payload);
        },
        addSearchVideos:(state,action)=>{
            state.searchVideos=action.payload;
        }
    }
});

export const {addCacheResults,addSearchVideos} = searchSlice.actions;
export default searchSlice.reducer;