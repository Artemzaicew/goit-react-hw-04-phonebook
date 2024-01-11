import PropTypes from 'prop-types';
import css from './ContactList.module.css'

export const ContactList = ({ contacts, deleteContact }) => {
    return (
      <>
      <ul className={css.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li className={css.listItem} key={id} id={id}>
            <p className={css.listText}>{name}: {number}</p>
            <button type='submit' onClick={()=>deleteContact(id)}>Delete</button>
          </li>
        ))}
      </ul></>
    );
  };
  
  ContactList.propTypes={
    contacts:PropTypes.arrayOf(
      PropTypes.exact({
        id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        number:PropTypes.string.isRequired,
      })
    ).isRequired,
  }