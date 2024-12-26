require('dotenv').config()
const express = require('express')
const connectToDB = require('./database/db')
const ride_routes = require('./routes/ride-sharing-routes')
const app = express()
connectToDB()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.use('/api/ride-sharing', ride_routes)

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})