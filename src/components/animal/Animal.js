import React from "react";

export default ({ animal, location, customer }) => (
  <section className="animal">
    <h3 className="animal_name">Name: {animal.name}</h3>
    <div className="animal_breed">Breed: {animal.breed}</div>
    <div className="animal_locationId">Checked in at: {location.name}</div>
    <div className="animal_customerId">Owner: {customer.name}</div>
  </section>
);
