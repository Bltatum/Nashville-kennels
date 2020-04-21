import React from "react";

export default ({ location }) => (
  <section className="location">
    <h3 className="location_name">{location.name}</h3>
    <div className="location_address">{location.address}</div>
  </section>
);
