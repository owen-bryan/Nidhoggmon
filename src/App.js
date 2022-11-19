import NewCard from "./Components/newCard";
import DisplayCards from "./Components/displayCards";
import { useState } from "react";

function App() {

  const [cards, setCards] = useState({})

  return (
    <div className="App">
      <NewCard setCards={setCards}/>
      <DisplayCards cards={cards} />
    </div>
  );
}

export default App;
