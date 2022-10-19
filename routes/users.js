import express from 'express'
import { v4 as uuidv4 } from 'uuid'

const router = express.Router()

const userId = uuidv4()

const users = [
    {
        "id": userId,
        "username": "Shadrack",
        "gender": "Male",
        "age": 14
    }, 

    {
        "id": userId,
        "username": "Racheal Oyediran",
        "gender": "Female",
        "age": 15
    },    
    
    {
        "id": userId,
        "username": "Favour Ayodele",
        "gender": "Female",
        "age": 16
    },    
    
    {
        "id": userId,
        "username": "Favour Oladosu",
        "gender": "Male",
        "age": 17
    }
]

router.get('/', (req, res) => {
    res.send(users)
})

router.post('/', (req, res) => {
    const user = req.body

    res.send(`User with the name ${username} has been added to the database!`)
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    const foundUser = users.find((user) => user.id === id) 

    res.send(foundUser)
})

export default router