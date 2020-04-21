import React from "react";

export default ({ customers }) => (
  <section className="customer">
    <h3 className="customer__name">{customers.name}</h3>
    <div className="customer_address">{customers.address}</div>
  </section>
);
