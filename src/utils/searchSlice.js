import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({

    name: "search",
    initialState:{

    },

    reducers:{

        CacheResults : (state,action) =>{

            state = Object.assign(state,action.payload);


        },
    },
});

export default SearchSlice.reducer;

export const {CacheResults} = SearchSlice.actions;


