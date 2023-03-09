import "./App.css";
import { CreateDogForm } from "./Components/CreateDogForm";
import { useState, useEffect } from "react";
import { Dogs } from "./Components/Dogs";
import { Section } from "./Components/Section";
import { fetchData } from "./fetch";
import "./fonts/RubikBubbles-Regular.ttf";

function App() {
  const [displayForm, setDisplayForm] = useState("");
  const [displayFavs, setDisplayFavs] = useState("");
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetchData(`http://localhost:3000/dogs`)
      .then((res) => setDogs(res))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>pup-e-picker</h1>
      </header>
      <Section
        label={"Dogs: "}
        setDisplayFavs={setDisplayFavs}
        favLength={dogs.filter((dog) => dog.isFavorite === true).length}
        UnFavLength={dogs.filter((dog) => dog.isFavorite !== true).length}
        setDisplayForm={setDisplayForm}
        setDogs={setDogs}
      >
        {displayForm === "" ? (
          <Dogs
            label={"All Dogs"}
            dogs={dogs}
            setDogs={setDogs}
            displayFavs={displayFavs}
          />
        ) : (
          <CreateDogForm />
        )}
      </Section>
    </div>
  );
}

export default App;
