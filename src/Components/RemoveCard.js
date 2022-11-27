import CollectionServices from "../Services/CollectionServices"

const RemoveCard = ({cards, setCards, cardnum}) =>
{

    const RemoveHandler = (event) =>
    {
        // console.log('cards.filter(card=>card.cardnum!==cardnum', cards.filter(card=>card.cardID!==cardnum))

        CollectionServices.deleteCard (cardnum).then (data => {
            // console.log('data', data)
            setCards (cards.filter(card => card.id !== cardnum))
        })
    }

    return (
        <button type="button" onClick={RemoveHandler}>Remove</button>
    )
}

export default RemoveCard