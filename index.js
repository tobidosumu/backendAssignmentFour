import express from 'express'
import bodyParser from 'body-parser'

import usersRoutes from './routes/users.js'
import clothesRoutes from './routes/clothes.js'
import shoesRoutes from './routes/shoes.js'
import bagsRoutes from './routes/bags.js'
import hairstylesRoutes from './routes/hairstyles.js'

const app = express()
const PORT = 5000

app.use(bodyParser.json())

app.use('/users', usersRoutes)
app.use('/clothes', clothesRoutes)
app.use('/shoes', shoesRoutes)
app.use('/bags', bagsRoutes)
app.use('/hairstyle', hairstylesRoutes)

app.get('/', (req, res) => {
    res.send(`Welcome to backend assignment four!`)
})

app.use(express.json({ extended: true }))

// Question 3.b. Create a GET and return whatever you like
app.get('/ping', (req, res) => {
    res
        .status(200)
        .json({ 
            "status": "Pinging",
            "Message": "Testing the mic",
            "Test": 124124
        })
})


app.listen(PORT, () => console.log(`Serve Running on port: http://localhost:${PORT}`))
