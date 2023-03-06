import { DogCard } from "./DogCard";
import { useEffect, useState } from "react";

export const Dogs = ({ dogs }) => {
  return (
    <>
      {dogs.map((dog) => (
        <DogCard dog={dog} key={dog.id} />
      ))}
    </>
  );
};
