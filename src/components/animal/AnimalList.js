import React, { useContext } from "react";
import { AnimalsContext } from "./AnimalProvider";
import { LocationContext } from "../location/LocationProvider";
import { CustomersContext } from "../customer/CustomerProvider";
import Animal from "./Animal";

export default () => {
  const { animals } = useContext(AnimalsContext);
  const { locations } = useContext(LocationContext);
  const { customers } = useContext(CustomersContext);

  return (
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
