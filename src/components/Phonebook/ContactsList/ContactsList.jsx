import style from "./ContactsList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter } from "components/redux/contactsList/selectors";
// import { filterAction, deleteContact } from "components/redux/contactsList/actions";
// import { deleteContact } from "components/redux/contactsList/actions";
import { deleteContact } from "components/redux/phonebookForm/phonebookSlice";
import { filterAction } from "components/redux/contactsList/contactsListSlice";
import localStorage from "redux-persist/es/storage";

export const ContactsList = (props) => {
    // const {searchByName, handleFilterChange, deleteFromContacts} = props;
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    // const filtered = searchByName();
    // console.log("Contactlist");
    // console.log(contacts);
    // console.log(filter);
    console.log(localStorage)

    const filteredContacts = () => {
        if(contacts.length === 0) return;
        return contacts.filter((elem) => {
            return elem.name.toLowerCase().includes(filter)
        })
       
    }

    function filterContacts (evt) {
        // console.log(evt.target.value);
        dispatch(filterAction(evt.target.value.toLowerCase()));
    }

    const deleteFromContacts = (evt) => {
        const elemId = evt.target.parentElement.id;
        
        dispatch(deleteContact(elemId));

        // setContacts(contacts.filter(elem => {
        //     return elem.id !== elemId
        // }))
    }

    return (
        <div className={style.contactsDiv}>
            <h2 className={style.title}>Contacts</h2>
            <label className={style.filterLabel} htmlFor="filter">Find contacts by name</label>
            <input className={style.filterInput} type="text" id="filter" onChange={filterContacts}/>
            
            <ul className={style.list}>
                {filteredContacts()?.map(({id, name, number}) => {
                    return <li className={style.item} key={id} id={id}>
                        <p className={style.text}>{name}: {number}</p> 
                        <button className={style.button} type="button" onClick={deleteFromContacts}>Delete</button>       
                    </li>
                })}
                {/* {filtered?.map(({id, name, number}) => {
                    return <li className={style.item} key={id} id={id}>
                        <p className={style.text}>{name}: {number}</p> 
                        <button className={style.button} type="button" onClick={deleteFromContacts}>Delete</button>       
                    </li>
                })} */}
            </ul>
        </div>
    )
}