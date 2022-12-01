import axios from "axios";

const BASE_URL = process.env.REACT_APP_DIGIMON_IO || "https://digimoncard.io/api-public/"

const getCardByNumber = (cardID) =>
{
    const request = axios.get(`${BASE_URL}search.php?card=${cardID}`)
    request.catch (error => console.log('error', error))
    return request.then(response => response.data)
    
}

const getAll = () =>
{
    const request = axios.get(`${BASE_URL}getAllCards.php?sort=name&series=Digimon%20Card%20Game&sortdirection=asc`)
    request.catch (error => console.log('error', error))
    return request.then (response => response.data)
}

const DigimonIOServices = {getCardByNumber, getAll}

export default DigimonIOServices