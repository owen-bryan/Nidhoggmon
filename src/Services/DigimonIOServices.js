import axios from "axios";

const BASE_URL = process.env.REACT_APP_DIGIMON_IO || "https://digimoncard.io/api-public/search.php?"

const getCardByNumber = (cardID) =>
{
    const request = axios.get(`${BASE_URL}card=${cardID}`)
    request.catch (error => console.log('error', error))
    return request.then(response => response.data)
    
}

const DigimonIOServices = {getCardByNumber}

export default DigimonIOServices