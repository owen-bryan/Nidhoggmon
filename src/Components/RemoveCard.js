import CollectionServices from "../Services/CollectionServices"

const RemoveCard = ({cards, setCards, id}) =>
{

    const RemoveHandler = (event) =>
    {
        // console.log('cards.filter(card=>card.cardnum!==cardnum', cards.filter(card=>card.cardID!==cardnum))

        CollectionServices.deleteCard (id).then (data => {
            // console.log('data', data)
            setCards (cards.filter(card => card.id !== id))
        })
    }

    return (
        <button type="button" onClick={RemoveHandler}>Remove</button>
    )
}

export default RemoveCard