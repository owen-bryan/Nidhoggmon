import NewCard from "./Components/newCard";
import DisplayCards from "./Components/displayCards";
import { useState } from "react";

function App() {

  const [cards, setCards] = useState([])

  return (

    <div className="App">
      
      {console.log('cards', cards)}
      <NewCard setCards={setCards}/>
      {cards.length > 0 ? <DisplayCards cards={cards} /> : <div />}
        
    </div>
  );
}

export default App;
