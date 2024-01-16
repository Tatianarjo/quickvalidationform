import './App.css';
import FormInput from './components/FormInput';
import React from 'react';

function App() {
  return <div className="app">
    <form>
      <FormInput placeholder="Enter city, point of interest, or address"/>
      <FormInput placeholder="Select your dates"/>
      <FormInput placeholder="Rooms"/>
      <FormInput placeholder="Attendees" />
    </form>
  </div>
}

export default App;
