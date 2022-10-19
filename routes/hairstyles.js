import express from 'express'
import { v4 as uuidv4 } from 'uuid'

const router = express.Router()

const hairstyleId = uuidv4()

const hairstyles = [
    {
        "id": hairstyleId,
        "name": "Pixie cut",
        "gender": "Male",
        "price": 1400
    }, 

    {
        "id": hairstyleId,
        "name": "Bob",
        "gender": "Female",
        "price": 12000
    },    
    
    {
        "id": hairstyleId,
        "name": "Long",
        "gender": "Male",
        "price": 2400
    },    
    
    {
        "id": hairstyleId,
        "name": "Ponytail",
        "gender": "Female",
        "price": 7000
    }
]

router.get('/', (req, res) => {
    res.send(hairstyles)
})

router.post('/', (req, res) => {
    const hairstyle = req.body

    res.send(`Hairstyle with the name ${name} has been added to the database!`)
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    const foundHairstyle = hairstyles.find((hairstyle) => hairstyle.id === id) 

    res.send(foundHairstyle)
})

export default router