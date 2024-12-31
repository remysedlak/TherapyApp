import React from 'react';
import '../styles/Home.css';  // Import a CSS file for styling (make sure to create this file)

const Home = ({ details }) => (
  <div>
    {/* I removed the header here btw*/}
    <div className="grid-container">
      {details.map((item, id) => (
        <div key={id} className="grid-item">
          <div><strong>Date:</strong> {item.date}</div>
          <div><strong>Journal Entry:</strong> {item.content}</div>
          <div><strong>Mood Color:</strong> <span style={{ backgroundColor: item.mood_color, padding: '5px' }}></span></div>
          <div><strong>Proper Nutrition:</strong> {item.proper_nutrition ? 'Yes' : 'No'}</div>
          <div><strong>Proper Hydration:</strong> {item.proper_hydration ? 'Yes' : 'No'}</div>
          <div><strong>Hydration Amount:</strong> {item.hydration_amount ? `${item.hydration_amount}L` : 'N/A'}</div>
          <div><strong>Proper Exercise:</strong> {item.proper_exercise ? 'Yes' : 'No'}</div>
          <div><strong>Exercise Duration:</strong> {item.exercise_duration ? `${item.exercise_duration} hours` : 'N/A'}</div>
          <div><strong>Exercise Description:</strong> {item.exercise_description || 'N/A'}</div>
          <div><strong>Hours of Sleep:</strong> {item.hours_of_sleep ? `${item.hours_of_sleep} hours` : 'N/A'}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Home;
