import React from "react";

export const Animal = ({ animal, location, customer }) => (
  <section className="animal">
    <div className="animal__breed">{animal.breed}</div>
    <div className="animal__owner">Customer Name: {customer.name}</div>
    <div className="animal__location">Checked-in at: {location.name}</div>
  </section>
);
