import { Phonebook } from "./Phonebook/Phonebook";

export const App = () => {

  // console.log('App', localStorage)
  // localStorage.clear()
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
    <Phonebook/>
  </div>
}