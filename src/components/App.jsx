import React from 'react';
import { useState, useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import ContactsForm from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmitApp = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      setContacts(prevContacts => [...prevContacts, newContact]);
    }
  };

  const handleFilterChange = e => {
    e.preventDefault();
    const { value } = e.target;
    setFilter(value);
  };

  const getFilteredContacts = () => {
        const normalizedFilter = filter.toLowerCase();
    
        return contacts.filter((contact) =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );
      };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm onSubmit={handleSubmitApp} />
      <Filter value={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}

// import React from "react";
// import { Component } from "react";
// import { ContactList } from "./ContactList/ContactList";
// import  ContactsForm  from "./ContactsForm/ContactsForm";
// import { Filter } from "./Filter/Filter";

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts')
//     const parseContacts = JSON.parse(contacts)

//     if(parseContacts){
//       this.setState({contacts: parseContacts})
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//     }
//   }

//   handleSubmitApp = (newContact) => {
//     const {contacts} = this.state;

//     if (contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
//       alert(`${newContact.name} is already in contacts`);
//     } else {
//       this.setState((prevState) => ({
//         contacts: [...prevState.contacts, newContact],
//       }));
//     }
//   };

//   handleFilterChange = (e) => {
//     e.preventDefault();
//     const { value } = e.target;
//     this.setState({ filter: value });
//   };

//   getFilteredContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   render() {
//     const { filter } = this.state;
//     const filteredContacts = this.getFilteredContacts();

//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactsForm onSubmit={this.handleSubmitApp} />
//         <Filter value={filter} onFilterChange={this.handleFilterChange} />
//         <ContactList contacts={filteredContacts} deleteContact={this.deleteContact}/>
//       </div>
//     );
//   }
// }
