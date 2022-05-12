const StarshipsDisplay = ({ starships }) => {
  // mpa the starships object into an array of divs

  return (
    !!starships && (
      <div className="StarshipsDisplay">
        {starships.results.map((starship) => (
          <div className="Starship">{starship.name}</div>
        ))}
      </div>
    )
  );
};

export default StarshipsDisplay;
