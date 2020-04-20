import React from "react";
import Animal from "./animal/Animal";
import "./animal/Animals.css";
import Employee from "./employee/Employee";
import Location from "./location/Location";
import Customer from "./customer/Customer";
import "./customer/Customer.css";
import "./employee/Employee.css";
import "./location/Location.css";

export default () => (
  <>
    <h2>Nashville Kennels</h2>
    <small>Loving care when you're not there.</small>

    <address>
      <div>Visit Us at the Nashville North Location</div>
      <div>500 Puppy Way</div>
    </address>

    <h2>Animals</h2>
    <article className="animals">
      <Animal />
      <Animal />
      <Animal />
    </article>
    <h2>Employees</h2>
    <article className="employees">
      <Employee />
      <Employee />
      <Employee />
    </article>
    <h2>Locations</h2>
    <article className="locations">
      <Location />
      <Location />
      <Location />
    </article>
    <h2>Customers</h2>
    <article className="customers">
      <Customer />
      <Customer />
      <Customer />
    </article>
  </>
);
