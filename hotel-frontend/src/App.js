import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import AdminPage from './Pages/AdminPage';
import ReceptionistPage from './Pages/ReceptionistPage';
import CustomerPage from './Pages/CustomerPage';
import CashierPage from './Pages/CashierPage';





const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/receptionist" element={<ReceptionistPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/cashier" element={<CashierPage/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
};

export default App;
