const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000

const app = express()

app.get('/', (req, res) => {
    res.status(200).send({message: 'welcome to the supportdesk'})
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
