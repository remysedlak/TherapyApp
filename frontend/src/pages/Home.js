// src/pages/Home.js
import React from 'react';

const Home = ({ details }) => (
  <div>
    <h1>Home Page</h1>
    <ul>
      {details.map((item, id) => (
        <li key={id}>{item.date} - {item.journal_entry}</li>
      ))}
    </ul>
  </div>
);

export default Home;
