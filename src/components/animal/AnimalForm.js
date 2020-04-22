import React, { useContext, useRef } from "react";
import { AnimalsContext } from "./AnimalProvider";
import { LocationContext } from "../location/LocationProvider";
import { CustomersContext } from "../customer/CustomerProvider";

export default (props) => {
  const { addAnimals } = useContext(AnimalsContext);
  const { locations } = useContext(LocationContext);
  const { customers } = useContext(CustomersContext);

  const name = useRef();
  const location = useRef();
  const customer = useRef();
  const breed = useRef();

  const constructNewAnimal = () => {
    const locationId = parseInt(location.current.value);
    const userId = parseInt(localStorage.getItem("kennel_customer"));
    if (locationId === 0) {
      window.alert("Please select a location");
    } else {
      addAnimals({
        name: name.current.value,
        locationId: locationId,
        breed: breed.current.value,
        customerId: userId,
      }).then(props.toggler);
    }
  };

  return (
    <form className="animalForm">
      <h2 className="animalForm__title">New animal</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="animalName">animal name: </label>
          <input
            type="text"
            id="animalName"
            ref={name}
            required
            autoFocus
            className="form-control"
            placeholder="Animal Name"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="animalBreed">Breed </label>
          <input
            type="text"
            id="animalBreed"
            ref={breed}
            required
            autoFocus
            className="form-control"
            placeholder="Animal Breed"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Appointment location: </label>
          <select
            defaultValue=""
            name="location"
            ref={location}
            id="animalLocation"
            className="form-control"
          >
            <option value="0">Select a location</option>
            {locations.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault(); // Prevent browser from submitting the form
          constructNewAnimal();
        }}
        className="btn btn-primary"
      >
        Save Appointment
      </button>
    </form>
  );
};
