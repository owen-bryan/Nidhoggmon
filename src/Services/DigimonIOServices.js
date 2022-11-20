import axios from "axios";

const getCardByNumber = (cardID) =>
{
    axios.get(`https://digimoncard.io/api-public/search.php?card=${cardID}`)
    .catch (error => console.log('error', error))
    .then (response => {
        console.log('response', response)
        console.log('response.data[0].name', response.data[0].name)
        let card = response.data[0]
        return card
    })
}

export default {getCardByNumber}