// import { createStore } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { contactsReducer } from "./phonebookForm/reducer";
import { filterReducer } from "./contactsList/reducer";
// import {}

// const initialState = {
//     contacts: [
//         {id: 1, name: 'Name1', number: '+123456'},
//         {id: 2, name: 'Name2', number: '+987656'},
//         {id: 3, name: 'Name3', number: '+765422'}
//     ], 
//     filter: ''
// };

// const rootReducer = ( state = initialState, action) => state;

const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer
    },
})