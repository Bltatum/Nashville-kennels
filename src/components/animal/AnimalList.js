import React, { useState, useContext } from "react";
import { AnimalsContext } from "./AnimalProvider";
import { LocationContext } from "../location/LocationProvider";
import { CustomersContext } from "../customer/CustomerProvider";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Animal from "./Animal";
import AnimalForm from "./AnimalForm";

export default () => {
  const { animals } = useContext(AnimalsContext);
  const { locations } = useContext(LocationContext);
  const { customers } = useContext(CustomersContext);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <div className="fakeLink href" onClick={toggle}>
        Make Appointment
      </div>
      <div className="animals">
        {animals.map((animal) => {
          const owner = customers.find((c) => c.id === animal.customerId);
          const clinic = locations.find((l) => l.id === animal.locationId);

          return (
            <Animal
              key={animal.id}
              location={clinic}
              customer={owner}
              animal={animal}
            />
          );
        })}
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>New Animal</ModalHeader>
        <ModalBody>
          <AnimalForm toggler={toggle} />
        </ModalBody>
      </Modal>
    </>
  );
};

// return (
//   <div className="animals">
//     {animals.map((anim) => (
//       <Animal key={anim.id} animals={anim} />
//     ))}
//   </div>
// );
// };
