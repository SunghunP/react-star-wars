import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import StarshipDisplay from "./components/StarshipDisplay";

function App() {
  const [starships, setStarships] = useState(null);
  const [allStarships, setAllStarships] = useState([]);

  // function that can be called to fetch all of the data
  const getStarships = async (url) => {
    // make api call
    const response = await fetch(url);
    // convert response to js object
    const starshipsResponse = await response.json();
    //update the state to the object of starships
    setStarships(starshipsResponse);
    setAllStarships([...allStarships, ...starshipsResponse.results]);
  };

  // will run once or if value in array is changed
  useEffect(() => {
    getStarships(`https://swapi.dev/api/starships/`);
  }, []);

  return (
    <div className="App">
      <Header />
      <Button
        starships={starships}
        setStarships={setStarships}
        getStarships={getStarships}
      />
      <StarshipDisplay starships={starships} allStarships={allStarships} />
    </div>
  );
}

export default App;
