import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const oldStudents = ["Jonny", "Douglas", "Christian", "Dan", "Danny", "Kien"];


root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);