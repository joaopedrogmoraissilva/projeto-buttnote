import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
// ... outros componentes

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<SignupForm />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;