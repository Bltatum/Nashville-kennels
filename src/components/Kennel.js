import React from "react";
import CustomerList from "./customer/CustomerList";
import { CustomerProvider } from "./customer/CustomerProvider";
import { EmployeesProvider } from "./employee/EmployeeProvider";
import EmployeeList from "./employee/EmployeeList";
import LocationList from "./location/LocationList";
import { LocationProvider } from "./location/LocationProvider";
import { AnimalProvider } from "./animal/AnimalProvider";
import AnimalList from "./animal/AnimalList";
import "./customer/Customer.css";
import "./employee/Employee.css";
import "./location/Location.css";
import "./animal/Animals.css";

export default () => (
  <>
    <h2>Nashville Kennels</h2>
    <small>Loving care when you're not there.</small>
    <address>
      <div>Visit Us at the Nashville North Location</div>
      <div>500 Puppy Way</div>
    </address>
    <h2>Animals</h2>
    <AnimalProvider>
      <LocationProvider>
        <CustomerProvider>
          <AnimalList />
        </CustomerProvider>
      </LocationProvider>
    </AnimalProvider>
    <h2>Employees</h2>
    <EmployeesProvider>
      <LocationProvider>
        <EmployeeList />
      </LocationProvider>
    </EmployeesProvider>
    <h2>Locations</h2>
    <LocationProvider>
      <LocationList />
    </LocationProvider>
    <h2>Customers</h2>
    <CustomerProvider>
      <CustomerList />
    </CustomerProvider>
  </>
);
