import { useState } from "react";
import { dogPictures } from "../assets/dog-pictures";
import React from "react";
const newDog = {
  name: "",
  image: dogPictures.BlueHeeler,
  description: "",
  isFavorite: false,
};

export const CreateDogForm = () => {
  const [createDog, setCreateDog] = useState(newDog);

  const trackDogForm = ({ target: { name, value } }) => {
    setCreateDog((prev) => ({ ...prev, [name]: value }));
  };

  const submitDog = () => {
    fetch("http://localhost:3000/dogs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createDog),
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <form
      action=""
      id="create-dog-form"
      onSubmit={(e) => {
        e.preventDefault();
        submitDog();
      }}
    >
      <h4>Create a New Dog</h4>
      <label htmlFor="name">Dog Name</label>
      <input type="text" onChange={trackDogForm} name={"name"} />
      <label htmlFor="description">Dog Description</label>
      <textarea
        name="description"
        id=""
        cols="80"
        rows="10"
        onChange={trackDogForm}
      ></textarea>
      <label htmlFor="picture">Select an Image</label>
      <select id="" onChange={trackDogForm} name={"image"}>
        {Object.entries(dogPictures).map(([label, pictureValue]) => {
          return (
            <React.Fragment key={label}>
              <option value={pictureValue}>{label}</option>;
            </React.Fragment>
          );
        })}
      </select>
      <input type="submit" value="submit" />
    </form>
  );
};
