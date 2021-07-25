const Express = require('express')
const cors = require('cors')
const bd = require('./src/data/sqlite-bd')
const port = process.env.PORT
const app = Express()
const dogsController = require('./src/controllers/dogs-controllers')

app.use(Express.json())
app.use(cors())

dogsController(app, bd)

app.listen(port, () => {
    console.log(`Porta que está sendo executada: http://localhost:${port}`)
  })