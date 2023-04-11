import { useState } from "react";
import { Phonebook } from "./Phonebook/Phonebook";

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return localStorage.contacts !== undefined ? JSON.parse(localStorage.contacts) : []
  }) 

  return <div
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101'
    }}
  >
    <Phonebook contacts={contacts} setContacts={setContacts}/>
  </div>
}