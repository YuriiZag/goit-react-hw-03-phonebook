import { Filter } from "./filter";
import { v4 as uuidv4 } from 'uuid';
import { PropTypes } from 'prop-types';
import { Header, DeleteButton, Container, ContactList, ContactName, ContactNumber } from "./contacts.styled";

export const Contacts = (({ contactsData, onFilterChange, filterValue, onDelete }) => {
    return (
      <Container>
        <Header>Contacts</Header>
        <Filter onFilterChange={onFilterChange} filterValue={filterValue}></Filter>
            <ContactList>
                {contactsData.map(({name, number}) => {
                  return (
                    <li key={uuidv4()}>
                      <ContactName>{name}</ContactName>:<ContactNumber>{number}</ContactNumber>
                      <DeleteButton type="button" value={name} onClick={onDelete}>
                        delete
                      </DeleteButton>
                    </li>
                  );
                })}
        </ContactList>
      </Container>
    );
})

Contacts.propType = {
  contactsData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onFilterChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}