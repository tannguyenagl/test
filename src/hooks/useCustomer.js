import React, { useState } from "react";
import { createCustomer, getCustomer, getAll } from "../api/customerApi";

const useCustomer = () => {
  const [customer, setCustomer] = useState(null);
  const [listCustomer, setListCustomer] = useState(null);

  const handleCreateCustomer = (data) => {
    try {
      createCustomer(data);
      alert("done");
    } catch (error) {
      alert("fail");

      console.log(error);
    }
  };

  const handeGetCustomer = async (id) => {
    try {
      const customer = await getCustomer(id);
      setCustomer(customer.customer);
    } catch (error) {
      console.log(error);
    }
  };
  const handeGetCustomers = async () => {
    try {
      const customers = await getAll();
      setListCustomer(customers.customers);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleCreateCustomer,
    handeGetCustomer,
    customer,
    handeGetCustomers,
    listCustomer,
  };
};
export default useCustomer;
