import React, { useContext } from "react";
import { CustomersContext } from "./CustomerProvider";
import Customer from "./Customer";

export default () => {
  const { customers } = useContext(CustomersContext);

  return (
    <>
      <div>
        <h3>Customers</h3>
      </div>
      <div className="customers">
        {customers.map((cus) => (
          <Customer key={cus.id} customers={cus} />
        ))}
      </div>
    </>
  );
};
