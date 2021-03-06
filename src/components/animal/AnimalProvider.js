import React, { useState, useEffect } from "react";

export const AnimalsContext = React.createContext();

export const AnimalProvider = (props) => {
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    return fetch("http://localhost:8088/animals")
      .then((res) => res.json())
      .then(setAnimals);
  };

  const addAnimals = (animal) => {
    return fetch("http://localhost:8088/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animal),
    }).then(getAnimals);
  };
  const releaseAnimal = (animalId) => {
    return fetch(`http://localhost:8088/animals/${animalId}`, {
      method: "DELETE",
    }).then(getAnimals);
  };
  const updateAnimal = (animal) => {
    return fetch(`http://localhost:8088/animals/${animal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animal),
    }).then(getAnimals);
  };
  /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
  useEffect(() => {
    getAnimals();
  }, []);

  useEffect(() => {
    console.log("****  ANIMALS APPLICATION STATE CHANGED  ****");
  }, [animals]);

  return (
    <AnimalsContext.Provider
      value={{
        animals,
        addAnimals,
        releaseAnimal,
        updateAnimal,
      }}
    >
      {props.children}
    </AnimalsContext.Provider>
  );
};
