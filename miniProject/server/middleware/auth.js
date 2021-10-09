require('dotenv').config()
const jwt = require('jsonwebtoken')
const { data_user } = require('../models/index')

const auth = (req, res, next) => {
   const token = req.headers.authorization.slice(7)
   const decoded = jwt.verify(token, process.env.SECRET_KEY)

   data_user.findOne({ where: { email: decoded.email } })
      .then((data) => {
         if (!data) {
            next({
               name: "FORBIDDEN"
            })

         } else {
            req.userData = {}
            req.userData.id = decoded.id
            req.userData.email = decoded.email
            next()
         }
      })
      .catch((err) => {
         next({
            name: "cannot findOne",
            log: err
         })
      })
}

module.exports = auth