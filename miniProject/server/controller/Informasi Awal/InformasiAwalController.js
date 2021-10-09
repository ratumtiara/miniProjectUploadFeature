const { GEN_INFORMASI_AWAL } = require('../../models/index')

class InformasiAwalController {

   static create(req, res) {

      const getIdUser = req.params.user

      const {
         isNasabah,
         nomor_rekening,
      } = req.body

      if (!isNasabah) {
         res.status(422).json({
            message: "error data could not be processed"
         })
      } else {
         const data = GEN_INFORMASI_AWAL.create({
            UserId: getIdUser,
            isNasabah,
            nomor_rekening,
         })
            .then((data) => {
               console.log(data);
               res.status(201).json({
                  message: "Status Nasabah created",
                  result: data
               })
            })
            .catch((err) => {
               res.status(500).json({
                  message: "internal server error",
                  log: err
               })
            })
      }

   }

   static read(req, res, next) {
      const isNasabahid = req.params.id

      GEN_INFORMASI_AWAL.findOne({
         where: {
            id: isNasabahid
         }
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

      const {
         isNasabah,
         nomor_rekening,
      } = req.body

      const isNasabahid = req.params.id

      if (!isNasabahid) {
         res.status(422).json({
            message: "error data could not be processed"
         })
      } else {
         const data = GEN_INFORMASI_AWAL.update({
            isNasabah,
            nomor_rekening,
         }, { where: { id: isNasabahid } })
            .then((data) => {
               res.status(200).json({
                  message: "update Data success",
                  data: data
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

   static delete(req, res, next) {
      const isNasabahid = req.params.id

      GEN_INFORMASI_AWAL.destroy({ where: { id: isNasabahid } })
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

module.exports = InformasiAwalController