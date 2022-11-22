import axios from "axios"

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001/Cards'

const getCards = () =>
{
    const request = axios.get(`${BASE_URL}`)
    request.catch (error => console.log('error', error))

    return request.then (response => response.data)
}

const getCard = (id) =>
{
    const request = axios.get(`${BASE_URL}/${id}`)
    request.catch (error => console.log('error', error))

    return request.then (response => response)
}

const addCard = (newObj) =>
{
    const request = axios.post (`${BASE_URL}`, newObj)
    request.catch (error => console.log('error', error))
    return request.then (response => response.data)
}

const deleteCard = (id) =>
{
    const request = axios.delete (`${BASE_URL}/${id}`)
    request.catch (error => console.log('error', error))

    return request.then (response => response)
}

const CollectionServices = {getCards, getCard, addCard, deleteCard}

export default CollectionServices