const express = require('express')
require('dotenv').config()
const { GEN_UPLOAD_DOKUMEN } = require('../../models/index')


//file single KTP
class uploadDocsController {

   //------------------------------------------------File multiple
   static addPathMultiple(req, res, next) {
      // const a = req.files.KTP[0].path

      console.log(req.files.IMB[0].path);

      const getIdUser = req.params.user
      // const files = req.files;

      const KTP = req.files.KTP[0].path
      const KK = req.files.KK[0].path
      const   SuratNikah = req.files.SuratNikah[0].path
      const   NPWP = req.files.NPWP[0].path
      const   SlipGaji = req.files.SlipGaji[0].path
      const   KetKerja = req.files.KetKerja[0].path
      const   MutasiRek =req.files.MutasiRek[0].path
      const   LapKeuangan =req.files.LapKeuangan[0].path
      const   SertifBangunan =req.files.SertifBangunan[0].path
      const   IMB =req.files.IMB[0].path
      const   PBB = req.files.PBB[0].path
     

      GEN_UPLOAD_DOKUMEN.create({



         UserId: getIdUser,
         id_form_pembiayaan: 9,
         KTP,
         KK,
         SuratNikah,
         NPWP,
         SlipGaji,
         KetKerja,
         MutasiRek,
         LapKeuangan,
         SertifBangunan,
         IMB,
         PBB


      })
         .then((data) => {
            console.log(data);
            res.status(201).json({
               message: "Berhasil Ditaro ke server",
               result: data
            })
         })
         .catch((err) => {
            console.log("yey dapet error");
            next({
               name: "Yahh gagal",
               log: err
            })
         })
   }

   //-------------------------------------file single KTP
   static addPathKTP(req, res, next) {
      console.log(req.file)
      const KTP = req.file.path
      // console.log(req.file.path)
      const ktp = KTP
      // console.log(KTP.path)
      GEN_UPLOAD_DOKUMEN.create({ ktp })
         .then((data) => {
            res.status(201).json({
               message: "Berhasil Ditaro ke server",
               result: data
            })
         })
         .catch((err) => {

            next({
               name: "Yahh gagal",
               log: err
            })
         })
   }
}

module.exports = uploadDocsController


