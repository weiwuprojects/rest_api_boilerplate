const { errorHandler } = require('../middleware/error-handler')
const search = require('../controllers/search')

const initRoutes = () => {
  const router = require('express').Router()
  router.use('/data', search())
  router.use(errorHandler)
  return router
}

module.exports = initRoutes
