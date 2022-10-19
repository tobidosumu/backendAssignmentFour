import express from 'express'
import { v4 as uuidv4 } from 'uuid'

const router = express.Router()

const clotheId = uuidv4()

const clothes = [
    {
        "id": clotheId,
        "type": "Lace material",
        "stock": 44,
        "price": 1400
    }, 

    {
        "id": clotheId,
        "type": "Silk material",
        "stock": 14,
        "price": 1500
    },    
    
    {
        "id": clotheId,
        "type": "Cotton material",
        "stock": 4,
        "price": 1600
    },    
    
    {
        "id": clotheId,
        "type": "Leather material",
        "stock": 7,
        "price": 1700
    }
]

router.get('/', (req, res) => {
    res.send(clothes)
})

router.post('/', (req, res) => {
    const clothe = req.body

    res.send(`Clothe of the type ${type} has been added to the database!`)
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    const foundClothe = clothes.find((clothe) => clothe.id === id) 

    res.send(foundClothe)
})

export default router