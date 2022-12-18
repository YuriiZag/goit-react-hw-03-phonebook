import React from 'react';
import { Phonebook } from './phonebook/phonebook';
import { Contacts } from './contacts/contacts';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };
  
  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts')
    this.setState({
      contacts: JSON.parse(storedContacts),
    });

  }

  componentDidUpdate(prevProps, prevState ) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  deleteContact = e => {
    const filteredArray = this.state.contacts.filter(
      contact => contact.name !== e.currentTarget.value
    );
    this.setState({ contacts: filteredArray });
  };

  addContact = data => {
    if (this.state.contacts.length !== 0) {
      const nameList = this.state.contacts.map(contact => contact.name.toLowerCase())

        if (nameList.includes(data.name.toLowerCase())) {
          return window.alert(`${data.name} is already in list.`);
        } else {
          return this.setState(prevState => ({
            contacts: [data, ...prevState.contacts],
          }));
        }
    } else {
      return this.setState(prevState => ({
        contacts: [...prevState.contacts, data],
      }));
    }

   
  };

  contactsFilter = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onFilterChange = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
    console.log(this.state);
  };

  render() {
    const filtredContacts = this.contactsFilter();
    return (
      <>
        <Phonebook formSubmit={this.addContact}></Phonebook>
        <Contacts
          contactsData={filtredContacts}
          onFilterChange={this.onFilterChange}
          filterValue={this.state.filter}
          onDelete={this.deleteContact}
        ></Contacts>
      </>
    );
  }
}
