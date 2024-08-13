import { useEffect } from "react";
export default function Home() {
  const [deck, setDeck] = useState({});
  useEffect (() => {
    axios.get("http://localhost:8080/deck/0").then(response => {
      setDeck (deck);
    }).catch (error => {
      console.error('object :>> ', error);
    });
  },[]);

  useEffect (() => {
    deck.main_deck.foreach(card => {
      
    })
  },[deck]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="grid grid-cols-7 gap-4">
        {deck.main_deck.map (card => <div>{card.name} </div>)}
      </div>
    </main>
  );
}


