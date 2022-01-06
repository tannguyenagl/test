import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormCustomer from "./components/from/CreateCustomer";
import "./App.css";
import Customer from "./components/Customer";
import ListCustomer from "./components/from/ListCustomer";

const App = () => {
  return (
    <Router>
      <div id="App">
        <Routes>
          <Route exact path="/customer" element={<FormCustomer />} />
        </Routes>
        <Routes>
          <Route exact path="/customer/:customerId" element={<Customer />} />
        </Routes>
        <Routes>
          <Route exact path="/customer-list" element={<ListCustomer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
