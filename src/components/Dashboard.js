import React, { useState, useEffect } from "react";
import CustomerList from "./customer/CustomerList";
import { CustomerProvider } from "./customer/CustomerProvider";
import { EmployeesProvider } from "./employee/EmployeeProvider";
import EmployeeList from "./employee/EmployeeList";
import LocationList from "./location/LocationList";
import { LocationProvider } from "./location/LocationProvider";
import { AnimalProvider } from "./animal/AnimalProvider";
import AnimalList from "./animal/AnimalList";
import { SearchBar } from "./search/SearchBar";
import { SearchResults } from "./search/SearchResults";
import "./Layout.css";
import "./customer/Customer.css";
import "./employee/Employee.css";
import "./location/Location.css";
import "./animal/Animals.css";
import "./employee/EmployeeForm";
import "./animal/AnimalForm";
import "./Kennel.css";
import "../index.css";

export const Dashboard = () => {
  const [searchTerms, setTerms] = useState(null);
  const [activeList, setActiveList] = useState("locations");
  const [components, setComponents] = useState();

  // Components needed to display locations
  const showLocations = () => (
    <LocationProvider>
      <LocationList />
    </LocationProvider>
  );

  // Components needed to display customers
  const showCustomers = () => (
    <CustomerProvider>
      <CustomerList />
    </CustomerProvider>
  );

  // Components needed to display employee
  const showEmployees = () => (
    <EmployeesProvider>
      <LocationProvider>
        <EmployeeList />
      </LocationProvider>
    </EmployeesProvider>
  );

  /*
      This effect hook determines which list is shown
      based on the state of the `activeList` variable.
  */
  useEffect(() => {
    if (activeList === "customers") {
      setComponents(showCustomers);
    } else if (activeList === "locations") {
      setComponents(showLocations);
    } else if (activeList === "employees") {
      setComponents(showEmployees);
    }
  }, [activeList]);

  return (
    <div className="mainContainer">
      <div className="searchContainer">
        <AnimalProvider>
          <CustomerProvider>
            <LocationProvider>
              <AnimalList />
              <SearchBar setTerms={setTerms} />
              <SearchResults searchTerms={searchTerms} />
            </LocationProvider>
          </CustomerProvider>
        </AnimalProvider>
      </div>
      <div className="dataContainer">
        <h1>Nashville Kennels</h1>
        <small>Loving care when you're not there.</small>
        <div className="listContainer">
          <div className="links">
            <div
              className="fakeLink href"
              onClick={() => setActiveList("locations")}
            >
              Locations
            </div>
            <div
              className="fakeLink href"
              onClick={() => setActiveList("customers")}
            >
              Customers
            </div>
            <div
              className="fakeLink href"
              onClick={() => setActiveList("employees")}
            >
              Employees
            </div>
          </div>
          <div className="listDisplay">{components}</div>
        </div>
      </div>
    </div>
  );
};
