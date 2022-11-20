import { useState } from "react"
import CollectionServices from "../Services/CollectionServices"


const NewCard = ({cards, setCards}) => {
    const [getCard, setCard] = useState("")
    
    const inputHandler = (event) =>
    {
        setCard (event.target.value)
    }

    const submitHandler = (event) =>
    {
        console.log('getCard()', getCard)
        
        CollectionServices.addCard ({cardID: getCard, ownerID: 0}).then (data => {
            console.log('data', data)
            setCards ([...cards,data])
        })
        
    }

    return (
        <div>
            <input type="text" onChange={inputHandler}/>
            <button onClick={submitHandler} type="submit">Submit</button>
        </div>
    )
}

export default NewCard