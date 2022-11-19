import axios from "axios"

const BASE_URL = 'http://localhost:3001/Cards'

const getCards = () =>
{
    const request = axios.get(`${BASE_URL}`)
    request.catch (error => console.log('error', error))

    return request.then (response => response.data)
}

const addCard = (newObj) =>
{
    console.log('BASE_URL', BASE_URL)
    const request = axios.post (`${BASE_URL}`, newObj)
    request.catch (error => console.log('error', error))
    return request.then (response => response.data)
}

const out = {getCards, addCard}

export default out