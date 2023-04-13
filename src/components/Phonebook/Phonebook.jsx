import PropTypes from "prop-types";
// import { nanoid } from 'nanoid';
import React from "react";
import style from "./Phonebook.module.css";
import { PhonebookForm } from "./PhonebookForm/PhonebookForm";
import { ContactsList } from "./ContactsList/ContactsList";
// import { useSelector } from "react-redux";

export const Phonebook = () => {

    return <section>
        <h1 className={style.title}>Phonebook</h1>
        <PhonebookForm/>   
        <ContactsList 
            // searchByName={searchByName}
           
        >
        </ContactsList >
    </section>
}

Phonebook.propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string
}