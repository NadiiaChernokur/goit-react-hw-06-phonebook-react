import { ContactList } from './Contactlist/Contactlist';
import { Filter } from './Filter/Filter';
import { ContactForm } from './Contactform/Contactform';
import { Container, Head, Head2 } from './Appstyles/App.styles';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <Container>
      <Head>Phonebook</Head>
      <ContactForm />

      <Head2>Contacts</Head2>
      <Filter />
      {contacts && <ContactList />}
    </Container>
  );
};
