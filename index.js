const app = require('express')()
const api = require('./api')
const port = process.env.PORT || 3000

app.use('/api/v1', api())

app.listen(port, () => {
  console.log(`Server Started on ${port}`)
})
