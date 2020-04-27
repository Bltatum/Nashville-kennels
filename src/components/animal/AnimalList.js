import React, { useState, useContext, useEffect } from "react";
import { AnimalsContext } from "./AnimalProvider";
import { LocationContext } from "../location/LocationProvider";
import { CustomersContext } from "../customer/CustomerProvider";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Animal } from "./Animal";
import AnimalForm from "./AnimalForm";

const AnimalList = ({ searchTerms }) => {
  const { animals } = useContext(AnimalsContext);
  const { locations } = useContext(LocationContext);
  const { customers } = useContext(CustomersContext);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [matchingAnimals, setFiltered] = useState([]);

  useEffect(() => {
    if (searchTerms !== "") {
      const subset = animals.filter((animal) =>
        animal.name.toLowerCase().includes(searchTerms)
      );
      setFiltered(subset);
    } else {
      setFiltered([]);
    }
  }, [searchTerms, animals]);

  return (
    <>
      <h2>Animals</h2>
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
        Make Appointment
      </Button>
      <div className="animals">
        {matchingAnimals.map((ani) => {
          const matchingLocation = locations.find(
            (loc) => loc.id === ani.locationId
          );
          const matchingCustomer = customers.find(
            (customer) => customer.id === ani.customerId
          );

          return (
            <Animal
              key={ani.id}
              animal={ani}
              customer={matchingCustomer}
              location={matchingLocation}
            />
          );
        })}
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Admit an Animal</ModalHeader>
        <ModalBody>
          <AnimalForm toggler={toggle} />
        </ModalBody>
      </Modal>
    </>
  );
};
export default AnimalList;
