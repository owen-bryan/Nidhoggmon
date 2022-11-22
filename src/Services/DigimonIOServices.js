import axios from "axios";

const getCardByNumber = (cardID) =>
{
    const request = axios.get(`https://digimoncard.io/api-public/search.php?card=${cardID}`)
    request.catch (error => console.log('error', error))
    return request.then(response => response.data)
    
}

export default {getCardByNumber}