
import { useEffect, useState } from "react"
import DigimonIOServices from "../Services/DigimonIOServices"
import RemoveCard from "./RemoveCard"

const DisplayCards = ({cards, setCards}) =>
{
    const [displayCards, setDisplayCards] = useState ([])

    useEffect (() =>
    {
      console.log('use effect fired')
        let promises = []
        let timeouts = []
        cards.forEach (card => {
            console.log('card', card)
            promises.push (DigimonIOServices.getCardByNumber(card.cardID))
        })
        // console.log("first loop")

        for (let i = 0; i < cards.length; i++)
        {
            timeouts[i] = setTimeout (() => {
                promises.push (DigimonIOServices.getCardByNumber(cards[i].cardID))
            }, 1500 * i)
        }
        // console.log ("second loop")

        Promise.all(promises).then (data => {
            console.log('promises', promises)
            let processedData = []
            data.forEach (card => {
                
               processedData = [...processedData, {name: card[0].name, cardnum: card[0].cardnumber}]
            })


            let results = [];

            // console.log('processedData', processedData)

            for (let i = 0; i < processedData.length; i++)
            {
                results.push({card: cards[i], apiData: processedData[i]})
            }

            // console.log('results', results)
            setDisplayCards (results)
        })

        return (
            timeouts.forEach (timeout => clearTimeout (timeout))
        )
        
    }, [cards])

    console.log('displayCards.length', displayCards.length)
    if (displayCards.length === 0)
        return null

    return (
        <div>
            <ul>
                {displayCards.map (c => 
                    {
                        return <li key={c.apiData.cardnum}>{c.card.quantity} x {c.apiData.name}<RemoveCard cards={cards} setCards={setCards} cardnum={c.card.id} /></li>
                    })}
            </ul>
        </div>
    )
}

export default DisplayCards