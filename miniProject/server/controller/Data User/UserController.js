require('dotenv').config()
const { GEN_USER } = require('../../models/index')
const { GEN_FASILITAS_PEMBIAYAAN, GEN_PEMBIAYAAN_PROPERTI, GEN_DATA_AGUNAN, GEN_DATA_DIRI_PEMOHON, GEN_DATA_PEKERJAAN_PEMOHON, GEN_DATA_PEMBIAYAAN_SAAT_INI } = require('../../models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class userController {

   // API Create
   static daftar(req, res, next) {

      const { nama, email, password } = req.body

      GEN_USER.create({ nama, email, password })
         .then((data) => {
            console.log(data);
            res.status(201).json({
               message: "Berhasil Daftar",
               result: data
            })
         })
         .catch((err) => {
            console.log(err);
            next({
               name: "failed to daftar",
               log: err
            })
         })
   }

   static masuk(req, res, next) {
      const { email, password } = req.body

      GEN_USER.findOne({
         where: {
            email: email
         }
      })
         .then((data) => {
            bcrypt.compare(password, data.password, (err, result) => {
               if (err) {
                  res.send(err)
               } else if (result === true && data.email === email) {
                  jwt.sign({
                     email: data.email
                  }, process.env.SECRET_KEY, { expiresIn: '1h' }, (err, token) => {
                     if (err) {
                        res.send(err)
                     } else {
                        console.log("Login Berhasil");
                        res.send({
                           UserId: data.id,
                           token: token
                        })
                     }
                  })
               }
            })
         })
         .catch((err) => {
            next({
               name: "REQUESTED_DATA_NOT_FOUND",
               log: err
            })
         })
   }

   static masukMobile(req, res, next) {
      const { email, password } = req.body

      GEN_USER.findOne({
         where: {
            email: email
         }
      })
         .then((data) => {
            bcrypt.compare(password, data.password, (err, result) => {
               if (err) {
                  console.log(err);
                  console.log("Data Tidak masuk");
               } else if (result === true && data.email === email) {
                  jwt.sign({
                     email: data.email
                  }, process.env.SECRET_KEY, { expiresIn: '1h' }, (err, token) => {
                     if (err) {
                        res.send(err)
                     } else {
                        console.log("Login Berhasil");
                        res.send({
                           UserId: data.id,
                           token: token
                        })
                     }
                  })
               }
            })
         })
         .catch((err) => {
            console.log(err);
            next({
               name: "REQUESTED_DATA_NOT_FOUND",
               log: err
            })
         })
   }


   static getAll(req, res, next) {
      GEN_USER.findAll({
         attributes: ['id', 'nama', 'email']
      })
         .then((data) => {
            res.status(200).json({
               message: "get Data success",
               result: data
            })
         })
         .catch((err) => {
            res.status(500).json({
               message: "Internal Server Error",
               log: err
            })
            console.log(err)
         })
   }

   static getOne(req, res, next) {

      const UserId = req.params.id

      GEN_USER.findOne({
         where: {
            id: UserId
         },
         attributes: ['id'],
         include: [
            {
               model: GEN_DATA_DIRI_PEMOHON,
               where: {
                  UserId: UserId
               },
               attributes: ['nama_pemohon', 'nomor_handphone1']
            },
            {
               model: GEN_FASILITAS_PEMBIAYAAN,
               where: {
                  UserId: UserId
               },
               attributes: ['peruntukan_pembiayaan', 'total_plafond', 'waktu_pembiayaan']
            }
         ],
         order: [
            [GEN_DATA_DIRI_PEMOHON, 'id', 'DESC'],
            [GEN_FASILITAS_PEMBIAYAAN, 'id', 'DESC']
         ],
         limit: 1
      })
         .then((data) => {
            res.status(200).json({
               message: "get Data success",
               result: data
            })
         })
         .catch((err) => {
            res.status(500).json({
               message: "Internal Server Error",
               log: err
            })
         })
   }

   static update(req, res, next) {

      const { nama, email, password } = req.body
      const UserId = req.params.id
      GEN_USER.findOne({ where: { id: UserId } })
         .then((data) => {
            data.update({ nama, email, password }, { where: { id: UserId } })
               .then((updated) => {
                  res.status(200).json({
                     message: "update Data success",
                     result: updated
                  })
               })
               .catch((err) => {
                  res.status(500).json({
                     message: "Internal Server Error",
                     log: err
                  })
               })
         })
         .catch((err) => {
            res.status(500).json({
               message: "Internal Server Error",
               log: err
            })
         })
   }

   static delete(req, res, next) {
      const UserId = req.params.id

      GEN_USER.destroy({ where: { id: UserId } })
         .then((data) => {
            res.status(200).json({
               message: "delete Data success",
               result: data
            })
         })
         .catch((err) => {
            res.status(500).json({
               message: "Internal Server Error",
               log: err
            })
         })
   }
}

module.exports = userController
