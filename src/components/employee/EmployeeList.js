import React, { useContext } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import Employee from "./Employee";
import { LocationContext } from "../location/LocationProvider";
// import "./Locations.css";

export default () => {
  const { employees } = useContext(EmployeeContext);
  const { locations } = useContext(LocationContext);

  return (
    <div className="employees">
      {employees.map((emp) => {
        const workLocation = locations.find((l) => l.id === emp.locationId);
        return <Employee key={emp.id} employee={emp} location={workLocation} />;
      })}
    </div>
  );
};
