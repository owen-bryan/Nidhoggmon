
import { useEffect, useState } from "react"
import DigimonIOServices from "../Services/DigimonIOServices"


const DisplayCards = ({cards}) =>
{
    const [displayCards, setDisplayCards] = useState ([])

    useEffect (() =>
    {
      
        let c = []
        console.log('use effect called')
        cards.forEach (card => {
            // console.log('card', card)
            c.push (DigimonIOServices.getCardByNumber(card.cardID))
        })


        Promise.all(c).then (data => {
            data.map (card => {
                console.log('displayCards', displayCards)
                setDisplayCards ([...displayCards, {name: card[0].name, cardnum: card[0].cardnumber}])
            })
        })

    }, [cards])

    console.log('displayCards.length', displayCards.length)
    if (displayCards.length === 0)
        return null

    return (
        <div>
            {/* {console.log('displayCards', displayCards)} */}
            {/* {console.log('displayCards.length', displayCards.length)} */}
            <ul>
                {displayCards.map (c => 
                    {
                        return <li >{c.name}</li>
                    })}
            </ul>
        </div>
    )
}

export default DisplayCards