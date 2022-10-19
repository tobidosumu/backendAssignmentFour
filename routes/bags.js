import express from 'express'
import { v4 as uuidv4 } from 'uuid'

const router = express.Router()

const bagId = uuidv4()

const bags = [
    {
        "id": bagId,
        "type": "Hand bag",
        "price": 3000
    }, 

    {
        "id": bagId,
        "type": "Hobo bag",
        "price": 4000
    },    
    
    {
        "id": bagId,
        "type": "Tote bag",
        "price": 5000
    },    
    
    {
        "id": bagId,
        "type": "Duffle bag",
        "price": 6000
    }
]

router.get('/', (req, res) => {
    res.send(bags)
})

router.post('/', (req, res) => {
    const bag = req.body

    res.send(`Bag of the name ${type} has been added to the database!`)
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    const foundBag = bags.find((bag) => bag.id === id) 

    res.send(foundBag)
})

export default router