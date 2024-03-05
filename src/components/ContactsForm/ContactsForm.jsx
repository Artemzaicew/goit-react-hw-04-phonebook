import { useState } from "react";
import css from "./ContactsForm.module.css"
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";

export default function ContactsForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e =>{
    const {name, value} = e.target;

    switch(name){
      case 'name':
        setName(value);
        break;

        case 'number' :
          setNumber(value);
          break;
    }
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      number,
      id: nanoid()
    });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };
    

  return(
    <form className={css.contactsForm} onSubmit={handleSubmitForm}>
          <label> Name
          <input
type="text"
name="name"
pattern="^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
required
onChange={handleChange}
value={name}
/>
          </label>
          <label> Number
          <input
type="tel"
name="number"
pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
required
onChange={handleChange}
value={number}
/>
          </label>
          <button type="submit">Add contact</button>
      </form>
  )

}
