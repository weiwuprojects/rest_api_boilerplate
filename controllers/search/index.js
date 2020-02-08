const validateParams = (req, res, next) => {
  if (!req.params.data) {
    throw new Error('No data given')
  }
  next()
}

module.exports = () => {
  const router = require('express').Router()
  router.use('/:search', validateParams, (req, res, next) => {
    res.status(200).json({ ok: 200 })
  })

  return router
}
