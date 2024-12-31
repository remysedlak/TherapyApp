// src/pages/CalendarPage.js
import React from 'react';
import JournalForm from '../components/JournalForm'; // Adjust the import if needed

const Entry = ({ entries }) => (
  <div>
    <h1>New Journal Entry</h1>
    <JournalForm entries={entries} />
  </div>
);

export default Entry;