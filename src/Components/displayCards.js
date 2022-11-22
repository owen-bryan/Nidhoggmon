
import { useEffect, useState } from "react"
import DigimonIOServices from "../Services/DigimonIOServices"
import RemoveCard from "./RemoveCard"

const DisplayCards = ({cards, setCards}) =>
{
    const [displayCards, setDisplayCards] = useState ([])

    useEffect (() =>
    {
      
        let promises = []
        let timeouts = []
        cards.forEach (card => {
            // console.log('card', card)
            promises.push (DigimonIOServices.getCardByNumber(card.cardID))
        })

        for (let i = 0; i < cards.length; i++)
        {
            timeouts[i] =setTimeout (() => {
                promises.push (DigimonIOServices.getCardByNumber(cards[i].cardID))
            }, 1500 * i)
        }


        Promise.all(promises).then (data => {
            let processedData = []
            data.forEach (card => {
                
               processedData = [...processedData, {name: card[0].name, cardnum: card[0].cardnumber}]
            })

            // console.log('data', data)
            setDisplayCards (processedData)
        })

        return (
            timeouts.forEach (timeout => clearTimeout (timeout))
        )
        
    }, [cards])

    // console.log('displayCards.length', displayCards.length)
    if (displayCards.length === 0)
        return null

    return (
        <div>
            <ul>
                {displayCards.map (c => 
                    {
                        return <li key={c.cardnum}>{c.name}<RemoveCard cards={cards} setCards={setCards} cardnum={c.cardnum} /></li>
                    })}
            </ul>
        </div>
    )
}

export default DisplayCards