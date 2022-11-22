
import { useEffect, useState } from "react"
import DigimonIOServices from "../Services/DigimonIOServices"


const DisplayCards = ({cards}) =>
{
    const [displayCards, setDisplayCards] = useState ([])

    useEffect (() =>
    {
      
        let c = []
        cards.forEach (card => {
            // console.log('card', card)
            c.push (DigimonIOServices.getCardByNumber(card.cardID))
        })


        Promise.all(c).then (data => {
            let d = []
            data.forEach (card => {
                
               d = [...d, {name: card[0].name, cardnum: card[0].cardnumber}]
            })

            // console.log('data', data)
            setDisplayCards (d)
        })
        
    }, [cards])

    // console.log('displayCards.length', displayCards.length)
    if (displayCards.length === 0)
        return null

    return (
        <div>
            {/* {console.log('displayCards', displayCards)} */}
            {/* {console.log('displayCards.length', displayCards.length)} */}
            <ul>
                {displayCards.map (c => 
                    {
                        return <li key={c.cardnum}>{c.name}</li>
                    })}
            </ul>
        </div>
    )
}

export default DisplayCards