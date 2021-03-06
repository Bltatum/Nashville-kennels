import React, { useState, useContext } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import Employee from "./Employee";
import { LocationContext } from "../location/LocationProvider";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import EmployeeForm from "./EmployeeForm";

export default () => {
  const { employees } = useContext(EmployeeContext);
  const { locations } = useContext(LocationContext);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Button
        onClick={() => {
          // check if the user is authenticated
          const userId = localStorage.getItem("kennel_customer");
          if (userId) {
            // If the user is authenticated, show the animal form
            toggle();
          }
        }}
      >
        New Employee
      </Button>

      <div className="employees">
        {employees.map((emp) => {
          const workLocation = locations.find((l) => l.id === emp.locationId);
          return (
            <Employee key={emp.id} employee={emp} location={workLocation} />
          );
        })}
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>New Employee</ModalHeader>
        <ModalBody>
          <EmployeeForm toggler={toggle} />
        </ModalBody>
      </Modal>
    </>
  );
};
