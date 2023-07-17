import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactsList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import styles from "./App.module.css";

export const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Książka telefoniczna</h1>
      <ContactForm />
      <h2 className={styles.title}>Kontakty</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
