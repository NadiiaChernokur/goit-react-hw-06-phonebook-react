import { Formik, Field } from 'formik';
import { FormButton, FormContainer } from './Contactform.styles';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          const names = contacts.map(contact => contact.name.toLowerCase());
          const valueName = values.name;

          if (names.find(name => name === valueName.toLowerCase())) {
            alert(`${values.name} is already in contacts`);
            return;
          }

          if (values.name === '' || values.number === '') {
            alert(`There are empty fields`);
            return;
          }

          dispatch(addContact({ ...values, id: nanoid() }));
          actions.resetForm();
        }}
      >
        <FormContainer>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Jane" />

          <label htmlFor="number">Number</label>
          <Field id="number" name="number" placeholder="000-00-00" />

          <FormButton type="submit">Add contact</FormButton>
        </FormContainer>
      </Formik>
    </div>
  );
};
