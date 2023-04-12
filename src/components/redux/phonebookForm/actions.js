import { createAction, nanoid } from "@reduxjs/toolkit";

export const addContact = createAction("action/addContact", (name, number) => {
    return {
        payload: {
            id: nanoid(5),
            name: name,
            number: number
        }
    }
})