import { DogCard } from "./DogCard";

export const Dogs = ({ dogs, setDogs, displayFavs }) => {
  return (
    <>
      {dogs.map((dog) => {
        if (dog.isFavorite && displayFavs === "favs") {
          return (
            <DogCard dog={dog} key={dog.id} setDogs={setDogs} dogs={dogs} />
          );
        }
        if (displayFavs === "notFavs" && dog.isFavorite === false) {
          return (
            <DogCard dog={dog} key={dog.id} setDogs={setDogs} dogs={dogs} />
          );
        }
        if (displayFavs === "") {
          return (
            <DogCard dog={dog} key={dog.id} setDogs={setDogs} dogs={dogs} />
          );
        }
      })}
    </>
  );
};
