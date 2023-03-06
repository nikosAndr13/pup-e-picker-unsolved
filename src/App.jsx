import "./App.css";
import { CreateDogForm } from "./Components/CreateDogForm";
import { useState, useEffect } from "react";
import { Dogs } from "./Components/Dogs";
import { Section } from "./Components/Section";
import "./fonts/RubikBubbles-Regular.ttf";

function App() {
  const [favorited, setFavorited] = useState(0);
  const [displayForm, setDisplayForm] = useState("");
  const [notfavorited, setNotFavorited] = useState(0);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const favsLength = dogs.filter((dog) => dog.isFavorite === true).length;
    fetch(`http://localhost:3000/dogs`)
      .then((res) => res.json())
      .then((result) => {
        setDogs(result);
        setFavorited(favsLength);
        setNotFavorited(dogs.length - favsLength);
      });
  }, [dogs]);

  return (
    <div className="App">
      <header>
        <h1>pup-e-picker</h1>
      </header>
      <Section
        label={"Dogs: "}
        favorited={favorited}
        notfavorited={notfavorited}
        setDisplayForm={setDisplayForm}
      >
        {displayForm === "" ? (
          <Dogs label={"All Dogs"} dogs={dogs} />
        ) : (
          <CreateDogForm />
        )}
      </Section>
    </div>
  );
}

export default App;
