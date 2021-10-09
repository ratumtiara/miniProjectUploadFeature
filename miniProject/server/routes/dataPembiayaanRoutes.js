const router = require('express').Router()
const DataPembiayaanController = require('../controller/Data Pembiayaan Saat Ini/DataPembiayaanController')
const validator = require('../middleware/dataPembiayaanValidator')

// Form Data Pembiayaan Yang Dimiliki
// router.post('/add_form_data_pembiayaan/:user', validator.checkDataPembiayaan, DataPembiayaanController.addDataPembiayaan)
router.post('/add_form_data_pembiayaan/:user', DataPembiayaanController.create)
router.get('/read_form_data_pembiayaan/:user', DataPembiayaanController.read)
router.put('/update_form_data_pembiayaan/:user', DataPembiayaanController.update)
router.delete('/delete_form_data_pembiayaan/:user', DataPembiayaanController.delete)

module.exports = router