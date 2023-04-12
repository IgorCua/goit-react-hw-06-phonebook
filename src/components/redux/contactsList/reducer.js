import { createReducer } from "@reduxjs/toolkit";
import { filterAction } from "./actions";
import { deleteContact } from "./actions";

const filterInitialState = "";

export const filterReducer = createReducer(filterInitialState, {
    [filterAction]: (state, action) => {
        console.log('filterReducer state ', state)
        console.log('filterReducer action ', action)
        return state = action.payload;
    }
})