import { useState } from "react"
import CollectionServices from "../Services/CollectionServices"


const NewCard = ({cards, setCards}) => {
    const [card, setCard] = useState({})


    const nameHandler = (event) =>
    {
        let changedCard = {...card}
        changedCard.name = event.target.value
        setCard (changedCard)
    }

    const submitHandler = (event) =>
    {
        // console.log('getCard()', cardName)
        
        CollectionServices.addCard ({cardID: card.name, ownerID: 0, quantity: card.qunatity}).then (data => {
            // console.log('data', data)
            setCards ([...cards,data])
        })
        
    }
 
    const quantityHandler = (event) =>
    {
        let changedCard = {...card}
        changedCard.qunatity = event.target.value
        setCard (changedCard)
    }

    return (
        <div>
            <input type="text" onChange={nameHandler}/>
            <input type="number" onChange={quantityHandler} min="1"/>
            <button onClick={submitHandler} type="submit">Submit</button>
        </div>
    )
}

export default NewCard
