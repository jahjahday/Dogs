import React, { useState } from "react";

import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import { Dogs } from "../Components/Dogs";
import Scroll from "../Components/Scroll";

const App = () => {
  let [Dog, setDog] = useState(Dogs);

  // let [searchfield, setSearchfield] = useState("");

  let onSearchChange = (event) => {
    let dogs = Dogs;
    let dog = event.target.value;
    const filteredDogs = Dog.filter((Dog) => {
      return Dog.name.toLowerCase().includes(dog);
    });
    
    if (filteredDogs.length >= 1) {
      setDog(dogs);
    }

    console.log(filteredDogs);
    setDog(filteredDogs);
  };

  return (
    <div className="tc">
      <h1 className="f1">Robofriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList Dogs={Dog} />
      </Scroll>
    </div>
  );
};

export default App;
