export const Section = ({
  label,
  children,
  favorited,
  notfavorited,
  setDisplayForm,
}) => {
  return (
    <section>
      <div className="container-header">
        <div className="container-label">{label}</div>
        <div className="selectors">
          {/* Add the class 'active' to any selector in order to make it's color change */}
          {/* This should display the favorited count */}
          <div className={`selector active`}>favorited ( {favorited} )</div>

          {/* This should display the unfavorited count */}
          <div className={`selector`}>unfavorited ( {notfavorited} )</div>
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
