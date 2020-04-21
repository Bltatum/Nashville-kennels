import React, { useState, useEffect } from "react";

export const EmployeeContext = React.createContext();

/*
 This component establishes what data can be used.
 */
export const EmployeesProvider = (props) => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return fetch("http://localhost:8088/employees")
      .then((res) => res.json())
      .then(setEmployees);
  };

  const addEmployee = (employee) => {
    return fetch("http://localhost:8088/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    }).then(getEmployees);
  };

  /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
  useEffect(() => {
    getEmployees();
  }, []);

  useEffect(() => {
    console.log("****  EMPLOYEES APPLICATION STATE CHANGED  ****");
  }, [employees]);

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};
