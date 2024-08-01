import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import FileUpload from './components/FileUpload'; // Import the FileUpload component
import './global.css';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Header>
          <h1>Welcome to StitchHera</h1>
        </Header>
        <Routes>
          <Route path="/" element={<FileUpload />} />
          {/* Other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
