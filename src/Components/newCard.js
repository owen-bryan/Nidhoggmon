import { useState } from "react"
import {addCard, getCards} from "../Services/CollectionServices"


const NewCard = ({setCards}) => {
    const [getCard, setCard] = useState("")
    
    const inputHandler = (event) =>
    {
        setCard (event.target.value)
    }

    const submitHandler = (event) =>
    {
        console.log('getCard()', getCard)
        
        addCard ({cardID: getCard, ownerID: 0})
        
        setCard (getCards())
    }

    return (
        <div>
            <input type="text" onChange={inputHandler}/>
            <button onClick={submitHandler} type="submit">Submit</button>
        </div>
    )
}

export default NewCard