
const CardTile = ({card}) =>
{
    return (
        <p>{card.card.quantity} x {card.apiData.name}</p>
    )
}

export default CardTile