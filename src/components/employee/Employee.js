import React from "react";

export default ({ employee, location }) => (
  <section className="employee">
    <h3 className="employee_name">Name: {employee.name}</h3>
    <div className="employee_location">Location: {location.name}</div>
  </section>
);
