import { TextField } from "@mui/material"
import { useState } from "react"

import CollectionServices from "../Services/CollectionServices"

import NewCardAutoComplete from "./NewCardAutoComplete"


const NewCard = ({cards, setCards}) => {
    
    const [newCard, setNewCard] = useState ({})
    

    const handleChange = (cardData) =>
    {
        let c = {...newCard}
        c.cardnumber = cardData.cardnumber
        setNewCard (c)
        // console.log ("Call from handleChange")
        // console.log('cardData', cardData)
    }

    const handleQuantity = (event) =>
    {
        let c = {...newCard}
        c.quantity = event.target.value
        // console.log('event.target.value', event.target.value)
        setNewCard (c)
    }

    const handleSubmit = (event) =>
    {
        CollectionServices.addCard ({cardID: newCard.cardnumber, ownerID: 0, quantity: newCard.quantity}).then (data =>
            {
                setCards ([...cards, data])
            })
    }

    return (
        <>
            <NewCardAutoComplete handleChange={handleChange} />
            {/* <input type="number" onChange={handleQuantity} min="1"/> */}
            <TextField inputProps={{inputMode: 'numeric', pattern: '[0-9]*'}} onChange={handleQuantity}/>
            <button onClick={handleSubmit} type="submit">Submit</button>
        </>
    )
}

export default NewCard
