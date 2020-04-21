import React, { useState, useEffect } from "react";

export const CustomersContext = React.createContext();

/*
 This component establishes what data can be used.
 */
export const CustomerProvider = (props) => {
  const [customers, setCustomers] = useState([]);

  const getCustomers = () => {
    return fetch("http://localhost:8088/customers")
      .then((res) => res.json())
      .then(setCustomers);
  };

  const addCustomers = (customer) => {
    return fetch("http://localhost:8088/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    }).then(getCustomers);
  };

  useEffect(() => {
    getCustomers();
  }, []);

  useEffect(() => {
    console.log("****  CUSTOMERS APPLICATION STATE CHANGED  ****");
  }, [customers]);

  return (
    <CustomersContext.Provider
      value={{
        customers,
        addCustomers,
      }}
    >
      {props.children}
    </CustomersContext.Provider>
  );
};
