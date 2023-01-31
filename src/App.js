import NewCard from "./Components/NewCard";
import DisplayCards from "./Components/DisplayCards";
import CollectionService from "./Services/CollectionServices"
import { useState, useEffect } from "react";

function App() {

  const [cards, setCards] = useState([])
  // const [apiCards, setApiCards] = useState([])

  useEffect (() =>
  {
    CollectionService.getCards ().then (data =>
      {
        setCards (data)
      })
  }, [])

  // useEffect (() => 
  // {
  //   DigimonIOServices.getAll().then (data =>
  //     {
  //       setApiCards (data)
  //     })
  // })

  return (

    <div className="App">
      {/* {console.log('cards', cards)} */}
      <NewCard cards={cards} setCards={setCards}/>
      {cards.length > 0 ? <DisplayCards cards={cards} setCards={setCards}/> : null}
    </div>
  );
}

export default App;
