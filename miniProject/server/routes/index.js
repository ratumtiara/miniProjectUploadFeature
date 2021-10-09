const router = require('express').Router()

const fasilitasPembiayaanRoutes = require('./fasilitasPembiayaanRoutes')
const dataAgunanRoutes = require('./dataAgunanRoutes')
const dataPemohonKeluargaRoutes = require('./dataPemohonKeluargaRoutes')
const dataPerkejaanRoutes = require('./dataPerkejaanRoutes')
const dataPembiayaanRoutes = require('./dataPembiayaanRoutes')
const userRoutes = require('./userRoutes')
const informasiAwalRoutes = require('./informasiAwalRoutes')
const uploadDocsRoutes = require('./uploadDocsRoutes')

//pengisian data
router.use('/api/fasilitas_pembiayaan/', fasilitasPembiayaanRoutes)
router.use('/api/data_agunan/', dataAgunanRoutes)
router.use('/api/data_diri_keluarga/', dataPemohonKeluargaRoutes)
router.use('/api/data_pekerjaan/', dataPerkejaanRoutes)
router.use('/api/data_pembiayaan/', dataPembiayaanRoutes)

//landing page
router.use('/api/user/', userRoutes)
router.use('/api/isNasabah/', informasiAwalRoutes)

//upload dokumen
router.use('/api/upload/', uploadDocsRoutes)

//Ringkasan


module.exports = router