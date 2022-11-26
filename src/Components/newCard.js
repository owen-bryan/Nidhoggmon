import { useState } from "react"
import CollectionServices from "../Services/CollectionServices"


const NewCard = ({cards, setCards}) => {
    const [cardName, setCardName] = useState("")
    const [quantity, setQuantity] = useState(1)


    const nameHandler = (event) =>
    {
        setCardName (event.target.value)
    }

    const submitHandler = (event) =>
    {
        // console.log('getCard()', cardName)
        
        CollectionServices.addCard ({cardID: cardName, ownerID: 0, quantity: quantity}).then (data => {
            console.log('data', data)
            setCards ([...cards,data])
        })
        
    }

    const quantityHandler = (event) =>
    {
        setQuantity (event.target.value)
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