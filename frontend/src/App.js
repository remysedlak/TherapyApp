import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Calendar from './pages/Calendar.js';
import Home from './pages/Home';
import About from './pages/About.js';

class App extends React.Component {
  state = { details: [] };

  componentDidMount() {
    // Fetch data from the backend API
    axios
      .get('http://127.0.0.1:8000/') // Ensure this is the correct API URL
      .then((res) => {
        const data = res.data;
        this.setState({ details: data });
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }

  render() {
    const { details } = this.state; // Accessing the state to pass as props

    return (
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Routes>
          {/* Passing `details` as props to each component */}
          <Route path="/" element={<Home details={details} />} />
          <Route path="/calendar" element={<Calendar entries={details} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
