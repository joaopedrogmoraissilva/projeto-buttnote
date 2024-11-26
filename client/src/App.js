import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import NewPage from './NewPage';
// ... outros componentes

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<SignupForm />} />
            <Route path="/" element={<NewPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;