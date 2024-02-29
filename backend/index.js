const express = require('express')
const app = express();
const PORT = 8000

// routes
const userRoutes = require('./routes/userRoutes')

app.use(express.json());

// defining end points
app.use('/api/users', userRoutes)

app.use('/', (req, res) => {
    res.send({ status: 200, message: "Welcome to Capstone Page" })
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});