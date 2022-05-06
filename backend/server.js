const express = require('express')
const dotenv = require('dotenv').config()
const { errorhandler } = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.status(200).json({message: 'welcome to the supportdesk API'})
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorhandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
