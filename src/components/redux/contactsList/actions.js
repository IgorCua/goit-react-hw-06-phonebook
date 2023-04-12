import { createAction } from "@reduxjs/toolkit";

export const filterAction = createAction("filters/filterContact", text => {
    return {
        payload: text,
    }
});
export const deleteContact = createAction("action/deleteContact");