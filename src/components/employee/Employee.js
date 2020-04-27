import React, { useState, useContext, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { EditEmployeeForm } from "./EditEmployeeForm";

export default ({ employee, location }) => {
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const toggleEdit = () => setEditModal(!editModal);
  const toggle = () => setModal(!modal);

  const [selectedEmployee, setEmployee] = useState({
    employee: {},
    location: null,
  });

  return (
    <>
      <section className="employee">
        <h3 className="employee_name">Name: {employee.name}</h3>
        <div className="employee_location">Location: {location.name}</div>
        <div className="employee_address">Address: {employee.address}</div>
        <Button
          color="info"
          onClick={() => {
            toggle();
            setEmployee({ employee, location });
            toggleEdit();
          }}
        >
          Edit
        </Button>
      </section>

      <Modal isOpen={editModal} toggle={toggleEdit}>
        <ModalHeader toggle={toggleEdit}>
          {selectedEmployee.employee.name}
        </ModalHeader>
        <ModalBody>
          <EditEmployeeForm
            key={selectedEmployee.employee.id}
            toggleEdit={toggleEdit}
            {...selectedEmployee}
          />
        </ModalBody>
      </Modal>
    </>
  );
};
