import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddJob from './components/AddJob';
import ViewAllJobs from './components/ViewAllJobs';
import Success from './components/Success';
import './App.css';
import ViewJob from "./components/ViewJob";
import EditJob from "./components/EditJob";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addjob" element={<AddJob />} />
          <Route path="/viewjob" element={<ViewJob />} />
          <Route path="/editjob" element={<EditJob />} />
          <Route path="/viewalljobs" element={<ViewAllJobs />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
