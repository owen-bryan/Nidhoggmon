import { useState } from "react"

const AddCard = () => {
    const [getCard, setCard] = useState("")
    
    const inputHandler = (event) =>
    {
        setCard (event.target.value)
    }

    const submitHandler = (event) =>
    {
        console.log('getCard()', getCard)
    }

    return (
        <div>
            <input type="text" onChange={inputHandler}/>
            <button onClick={submitHandler} type="submit">Submit</button>
        </div>
    )
}

export default AddCard