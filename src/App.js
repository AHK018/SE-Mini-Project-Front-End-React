import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Login';
import SignUpPage from './Signup';
import Dashboard from './DashBoard';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/login' element={<LoginPage />}></Route>
          <Route exact path='/signup' element={<SignUpPage />}></Route>
          <Route exact path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
