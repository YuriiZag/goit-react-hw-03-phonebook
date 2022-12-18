import React from 'react';
import PropTypes from 'prop-types';
import { Header, PhonebookForm, TypingField, Label, SubmitButton, Container } from './phonebook.styled';


export class Phonebook extends React.Component {
  state = {
    name: '',
    number: ''
  }
    


onChangeHandler = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  onSubmitHandler = evt => {
    evt.preventDefault();
    this.props.formSubmit(this.state)
  };

  render() {
    return (
      <Container>
        <Header>Phonebook</Header>
        <PhonebookForm autoComplete="off" onSubmit={this.onSubmitHandler}>
          <Label htmlFor="Name">
            Name
            <TypingField
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={this.onChangeHandler}
              value={this.state.name}
              required
            />
          </Label>
          <Label htmlFor="phoneNumber">
            Number
            <TypingField
              name="number"
              type="tel"
              onChange={this.onChangeHandler}
              value={this.state.number}
              required
            ></TypingField>
          </Label>
          <SubmitButton type="submit">Add contact</SubmitButton>
        </PhonebookForm>
      </Container>
    );
  }
}

Phonebook.propType = {
  formSubmit: PropTypes.func.isRequired,
};