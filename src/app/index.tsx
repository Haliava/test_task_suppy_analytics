import React from 'react';
import styles from './styles.module.scss';
import SearchField from "../features/searchField";
import EntryList from "../features/entryList";

function App() {
  return (
    <div className={styles.root}>
        <SearchField />
        <EntryList />
    </div>
  );
}

export default App;
