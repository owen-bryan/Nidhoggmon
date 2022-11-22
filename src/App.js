import NewCard from "./Components/newCard";
import DisplayCards from "./Components/displayCards";
import CollectionService from "./Services/CollectionServices"
import { useState, useEffect } from "react";

function App() {

  const [cards, setCards] = useState([])

  useEffect (() =>
  {
    CollectionService.getCards ().then (data =>
      {
        setCards (data)
      })
  }, [])

  return (

    <div className="App">
      {/* {console.log('cards', cards)} */}
      <NewCard cards={cards} setCards={setCards}/>
      {cards.length > 0 ? <DisplayCards cards={cards} /> : null}
    </div>
  );
}

export default App;
