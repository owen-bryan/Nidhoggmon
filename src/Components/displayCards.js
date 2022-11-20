
import { useEffect, useState } from "react"
import DigimonIOServices from "../Services/DigimonIOServices"


const DisplayCards = ({cards}) =>
{
    const [displayCards, setDisplayCards] = useState ([...cards])

    useEffect (() =>
    {
        let c = [];
        
        cards.forEach (card => {
            c.push (DigimonIOServices.getCardByNumber(card.cardID))
        })

        setDisplayCards (c);
    }, [])

    return (
        <div>
            <ul>
                {cards.map (c => 
                    {
                        return <li key ={c.id}>{c.cardID}</li>
                    })}
            </ul>
        </div>
    )
}

export default DisplayCards