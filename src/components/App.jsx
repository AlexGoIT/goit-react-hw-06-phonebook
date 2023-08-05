import Container from '@mui/material/Container';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Title, ListTitle } from './App.styled';

const App = () => {
  return (
    <Container className="container" maxWidth="sm" sx={{ mt: 2 }}>
      <Title>Phonebook</Title>
      <ContactForm />
      <ListTitle>Contacts</ListTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
