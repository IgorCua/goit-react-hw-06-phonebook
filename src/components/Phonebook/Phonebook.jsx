import PropTypes from "prop-types";
import { nanoid } from 'nanoid';
import React, { useRef, useEffect, useState } from "react";
import style from "./Phonebook.module.css";
import { PhonebookForm } from "./PhonebookForm/PhonebookForm";
import { ContactsList } from "./ContactsList/ContactsList";

export const Phonebook = (props) => {
 
    let {contacts, setContacts} = props;
    const [filter, setFilter] = useState('');
    const prevContacts = usePrevContacts(contacts)

    function usePrevContacts (arr) {
        const ref = useRef();
        useEffect(() => {
            ref.current = arr;
        }, [arr]);
        return ref.current === undefined ? arr : ref.current;
    }

    useEffect(()=>{
        if(prevContacts.length !== contacts.length) {
            localStorage.setItem('contacts', JSON.stringify([...contacts]))
        } 
        if (localStorage.contacts?.length === 2) {
            localStorage.removeItem('contacts');
        }
    }, [contacts, prevContacts])
    
    // console.log('prevState: ', prevContacts,'currState: ', contacts)

    const addContact = (nameVal, numVal) => {
        setContacts((elem) =>{
            return [...elem, {id: nanoid(10), name: nameVal, number: numVal}]
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const nameVal = evt.target.name.value;
        const numVal = evt.target.number.value;
        const regex = new RegExp(`\\b${nameVal}\\b`, 'i');
        
        for (let element of contacts) {
            if (regex.test(element.name)) {
                alert(`${element.name} is already in contacts.`)
                return;
            }
        }
        
        addContact(nameVal, numVal);
        evt.target.name.value = '';
        evt.target.number.value = '';
    }

    const handleFilterChange = (evt) => {
        const name = evt.target.value.toLowerCase();
        setFilter(name)
    }

    const searchByName = (evt) => {
        if(contacts.length === 0) return;
        return contacts.filter((elem) => {
            return elem.name.toLowerCase().includes(filter)
        })
       
    }

    const deleteFromContacts = (evt) => {
        const elemId = evt.target.parentElement.id;
        
        setContacts(contacts.filter(elem => {
            return elem.id !== elemId
        }))
    }

    return <section>
        <h1 className={style.title}>Phonebook</h1>
        <PhonebookForm contacts={contacts} handleSubmit={handleSubmit}/>   
        <ContactsList 
            searchByName={searchByName}
            handleFilterChange={handleFilterChange}
            deleteFromContacts={deleteFromContacts}
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