import { fetchData } from "../fetch";

export const Section = ({
  label,
  children,
  setDisplayForm,
  favLength,
  UnFavLength,
  setDisplayFavs,
  setDogs,
}) => {
  return (
    <section>
      <div className="container-header">
        <div
          className="container-label"
          onClick={() => {
            setDisplayForm("");
            setDisplayFavs("");
            fetchData(`http://localhost:3000/dogs`)
              .then((res) => res.json())
              .then((result) => setDogs(result));
          }}
        >
          {label}
        </div>
        <div className="selectors">
          {/* Add the class 'active' to any selector in order to make it's color change */}
          {/* This should display the favorited count */}
          <div
            className={`selector active`}
            onClick={() => {
              setDisplayFavs("favs");
            }}
          >
            favorited ( {favLength} )
          </div>

          {/* This should display the unfavorited count */}
          <div
            className={`selector`}
            onClick={() => {
              setDisplayFavs("notFavs");
            }}
          >
            unfavorited ( {UnFavLength} )
          </div>
          <div
            className={`selector`}
            onClick={() => {
              setDisplayForm("create");
            }}
          >
            create dog
          </div>
        </div>
      </div>
      {children}
    </section>
  );
};
