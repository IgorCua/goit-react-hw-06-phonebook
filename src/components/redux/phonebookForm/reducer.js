import { createReducer } from "@reduxjs/toolkit";
import { addContact } from "./actions";
import { deleteContact } from "../contactsList/actions";

const contactsInitialState = [
    {id: '1', name: 'Name1', number: '+123456'},
    {id: '2', name: 'Name2', number: '+987656'},
    {id: '3', name: 'Name3', number: '+765422'}
]

export const contactsReducer = createReducer(contactsInitialState, {
    [addContact]: (state, action) => {
        state.push(action.payload);
    },
    [deleteContact]: (state, action) => {
        const index = state.findIndex(contact => contact.id === action.payload)
        state.splice(index, 1);
    }
});