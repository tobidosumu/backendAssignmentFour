import express from 'express'
import { v4 as uuidv4 } from 'uuid'

const router = express.Router()

const shoeId = uuidv4()

const shoes = [
    {
        "id": shoeId,
        "name": "Sneakers",
        "brand": "Nike",
        "price": 4000
    }, 

    {
        "id": shoeId,
        "name": "Wedges",
        "brand": "Puma",
        "price": 5000
    },    
    
    {
        "id": shoeId,
        "name": "Pumps",
        "brand": "Jordan",
        "price": 6000
    },    
    
    {
        "id": shoeId,
        "name": "Brogue",
        "brand": "Addidas",
        "price": 7000
    }
]

router.get('/', (req, res) => {
    res.send(shoes)
})

router.post('/', (req, res) => {
    const shoe = req.body

    res.send(`Shoe with the name ${name} has been added to the database!`)
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    const foundShoe = shoes.find((shoe) => shoe.id === id) 

    res.send(foundShoe)
})

export default router