import style from "./PhonebookForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "components/redux/contactsList/selectors";
// import { addContact } from "components/redux/phonebookForm/actions";
import { addContact } from "components/redux/phonebookForm/phonebookSlice";

export const PhonebookForm = (props) => {
    // const {handleSubmit} = props;
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const nameVal = evt.target.name.value;
        const numVal = evt.target.number.value;
        const regex = new RegExp(`\\b${nameVal}\\b`, 'i');
        // console.log("handleSubmit ", nameVal, numVal);
        for (let element of contacts) {
            console.log('handlesubmir for ', element)
            if (regex.test(element.name)) {
                alert(`${element.name} is already in contacts.`)
                return;
            }
        }
        
        // addContact(nameVal, numVal);
        dispatch(addContact(nameVal, numVal));
        evt.target.name.value = '';
        evt.target.number.value = '';
    }
    return <form action="" onSubmit={handleSubmit} className={style.form}>
        <label htmlFor="name" className={style.nameLabel}>Name</label>
        <input
            id="name"
            className={style.nameInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
        />

        <label className={style.numberLabel} htmlFor="number">Number</label>
        <input
            className={style.numberInput}
            id="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />

        <button type="submit" className={style.submit}>Add contact</button>
    </form>
}