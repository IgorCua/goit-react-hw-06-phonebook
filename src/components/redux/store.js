// import { createStore } from "react";
import { configureStore } from "@reduxjs/toolkit";
// import { devToolsEnhancer } from "@redux-devtools/extension";
import { contactsReducer } from "./phonebookForm/phonebookSlice"; 
import { filterReducer } from "./contactsList/contactsListSlice";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer
    },
})