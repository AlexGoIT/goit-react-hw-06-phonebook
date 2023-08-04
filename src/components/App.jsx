import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import Container from '@mui/material/Container';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Title, ListTitle } from './App.styled';

const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  console.log('App contacts', contacts);
  // console.log('App filter', filter);

  // Filter
  const contactFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  return (
    <Container className="container" maxWidth="sm" sx={{ mt: 2 }}>
      <Title>Phonebook</Title>
      <ContactForm />
      <ListTitle>Contacts</ListTitle>
      <Filter filter={filter} />
      <ContactList contacts={contactFilter(contacts)} />
    </Container>
  );
};

export default App;
