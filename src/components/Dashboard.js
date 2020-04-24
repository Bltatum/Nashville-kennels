import React, { useState } from "react";
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

export default () => {
  const [searchTerms, setTerms] = useState(null);

  return (
    <div className="mainContainer">
      <AnimalProvider>
        <CustomerProvider>
          <EmployeesProvider>
            <LocationProvider>
              <div className="searchContainer">
                <SearchBar setTerms={setTerms} />
                <SearchResults searchTerms={searchTerms} />
              </div>
              <div className="dataContainer">
                <h2>Nashville Kennels</h2>
                <small>Loving care when you're not there.</small>
                <LocationList />
                <AnimalList />
                <CustomerList />
                <EmployeeList />
              </div>
            </LocationProvider>
          </EmployeesProvider>
        </CustomerProvider>
      </AnimalProvider>
    </div>
  );
};
