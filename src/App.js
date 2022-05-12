import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";

function App() {
  const [starships, setStarships] = useState(null);

  // function that can be called to fetch all of the data
  const getStarships = async () => {
    // make api call
    const response = await fetch(`https://swapi.dev/api/starships`);
    // convert response to js object
    const starshipsResponse = await response.json();
    //update the state to the object of starships
    setStarships(starshipsResponse);
  };

  // will run once or if value in array is changed
  useEffect(() => {
    getStarships();
  }, []);

  console.log(starships);

  return (
    <div className="App">
      <Header />
      <button>Display More</button>
    </div>
  );
}

export default App;
