import express from 'express'

const route = express.Router()

const time = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })

route.get('/', (req, res, next) => {
  return res.json({
    message: 'Digital Library Backend Server',
    deployTime: time
  })
})

export default route
