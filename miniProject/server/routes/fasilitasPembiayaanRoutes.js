const router = require('express').Router()
const fasilitasPembiayaanController = require('../controller/Fasilitas Pembiayaan/FasilitasPembiayaanController')
const pembiayaanKonsumsiPropertiController = require('../controller/Fasilitas Pembiayaan/PembiayaanKonsumsiPropertiController')
const pembiayaanProperti = require('../controller/Fasilitas Pembiayaan/PembiayaanPropertiController')
const pembiayaanTakeOver = require('../controller/Fasilitas Pembiayaan/PembiayaanTakeOverController')
const validator = require('../middleware/fasilitasPembiayaanValidator')

// router.use('/api/fasilitas_pembiayaan/', fasilitasPembiayaanRoutes)

// Form Data Pengajuan
// router.post('/add_form_data_pengajuan/:user', validator.pengajuan, fasilitasPembiayaanController.formDataPengajuan)
router.post('/add_form_fasilitas_pembiayaan/:user', fasilitasPembiayaanController.create)
router.get('/read_form_fasilitas_pembiayaan/:user', fasilitasPembiayaanController.read)
router.put('/update_form_fasilitas_pembiayaan/:user', fasilitasPembiayaanController.update)
router.delete('/delete_form_fasilitas_pembiayaan/:user', fasilitasPembiayaanController.delete)

// Form Data Pembiayaan Kendaraan
// router.post('/add_form_data_pengajuan_kendaraan/:user', validator.kendaraan, fasilitasPembiayaanController.formDataPengajuanKendaraan)
router.post('/add_form_data_pembiayaan_beragun_properti/:user', pembiayaanKonsumsiPropertiController.create)
router.get('/read_form_data_pembiayaan_beragun_properti/:user', pembiayaanKonsumsiPropertiController.read)
router.put('/update_form_data_pembiayaan_beragun_properti/:user', pembiayaanKonsumsiPropertiController.update)
router.delete('/delete_form_data_pembiayaan_beragun_properti/:user', pembiayaanKonsumsiPropertiController.delete)

// Form Data Pembiayaan Properti
// router.post('/add_form_data_pengajuan_properti/:user', validator.properti,fasilitasPembiayaanController.formDataPengajuanProperti)
router.post('/add_form_data_pembiayaan_properti/:user', pembiayaanProperti.create)
router.get('/read_form_data_pembiayaan_properti/:user', pembiayaanProperti.read)
router.put('/update_form_data_pembiayaan_properti/:user', pembiayaanProperti.update)
router.delete('/delete_form_data_pembiayaan_properti/:user', pembiayaanProperti.delete)

// Form Data Pembiayaan Take Over
// router.post('/add_form_data_pengajuan_takeover/:user', validator.takeover, fasilitasPembiayaanController.formDataPengajuanTakeover)
router.post('/add_form_data_pembiayaan_takeover/:user', pembiayaanTakeOver.create)
router.get('/read_form_data_pembiayaan_takeover/:user', pembiayaanTakeOver.read)
router.put('/update_form_data_pembiayaan_takeover/:user', pembiayaanTakeOver.update)
router.delete('/delete_form_data_pembiayaan_takeover/:user', pembiayaanTakeOver.delete)

module.exports = router