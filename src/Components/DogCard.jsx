import { FavoriteButton } from "./FavoriteButton";
import { TrashButton } from "./TrashButton";
import { UnfavoriteButton } from "./UnfavoriteButton";

export const DogCard = ({
  dog: { name, image, description, id, isFavorite },
}) => {
  const favorite = (swap) => {
    fetch(`http://localhost:3000/dogs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isFavorite: swap }),
    })
      .then((res) => res.json())
      .then((result) => console.log("record updated", result));
  };

  const deleteDog = () => {
    fetch(`http://localhost:3000/dogs/${id}`, { method: "DELETE" })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="dog-card">
      {isFavorite ? (
        <UnfavoriteButton
          onClick={() => {
            favorite(false);
          }}
        />
      ) : (
        <FavoriteButton
          onClick={() => {
            favorite(true);
          }}
        />
      )}

      <TrashButton
        disabled={false}
        onClick={() => {
          deleteDog();
        }}
      />

      <div className="favorite-overlay ">{"<3"}</div>

      <div className="unfavorite-overlay">{"</3"}</div>

      <p className="dog-name">{name}</p>

      <img src={image} alt={name} />

      <p className="dog-description">{description}</p>
    </div>
  );
};
