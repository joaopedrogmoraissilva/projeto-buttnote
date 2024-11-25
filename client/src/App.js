import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupForm from './SignupForm';
// ... outros componentes

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<SignupForm />} />
            {/* Outras rotas */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;