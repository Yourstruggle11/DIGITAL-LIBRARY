import express from 'express'
import env from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import dbConnection from './config/DB.js'
import bodyParser from 'body-parser'

//import routes
import homeRoute from './routes/homeRoute.js'
import PublicRouter from './routes/public/index.js'
import PrivateRouter from './routes/private/index.js'

import { errorhandler, notFound } from './middlewares/errorHandler.js'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
env.config()

//middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))
app.use(morgan('dev'))
app.use(cors())

//connect to the database
dbConnection()



// MAIN ROUTES

app.use('/', homeRoute)
app.use('/public', PublicRouter)
app.use('/private', PrivateRouter)



//For Error Handling
app.use(notFound)
app.use(errorhandler)

// making the port dynamic
const PORT = process.env.PORT || 5001

//starting the server
app.listen(PORT, function () {
    console.log(`server has started at port no ${PORT}`)
})
