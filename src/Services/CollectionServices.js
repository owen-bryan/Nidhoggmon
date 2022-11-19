import axios from "axios"

const BASE_URL = process.env.BASE_URL | 'http://localhost:3001/'

const getCards = () =>
{
    const request = axios.get(`${BASE_URL}/Cards`)
    request.catch (error => console.log('error', error))

    return request.then (response => response.data)
}

const addCard = (newObj) =>
{
    const request = axios.post (`${BASE_URL}/Cards`, newObj)
    request.catch (error => console.log('error', error))
    return request.then (response => response.data)
}

export default {getCards, addCard}