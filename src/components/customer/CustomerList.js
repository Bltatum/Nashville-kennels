import React, { useContext } from "react";
import { CustomersContext } from "./CustomerProvider";
import Customer from "./Customer";

export default () => {
  const { customers } = useContext(CustomersContext);

  return (
    <div className="customers">
      {customers.map((cus) => (
        <Customer key={cus.id} customers={cus} />
      ))}
    </div>
  );
};
