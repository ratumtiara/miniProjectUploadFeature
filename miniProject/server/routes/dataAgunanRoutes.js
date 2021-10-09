const router = require('express').Router()
const DataAgunanController = require('../controller/Data Agunan/DataAgunanController')
const validator = require('../middleware/dataAgunanValidator')

// router.post('/add_form_data_agunan/:user', validator.dataAgunan, DataAgunanController.addAgunan)
router.post('/add_form_data_agunan/:user', DataAgunanController.create)
router.get('/read_form_data_agunan/:user', DataAgunanController.read)
router.put('/update_form_data_agunan/:user', DataAgunanController.update)
router.delete('/delete_form_data_agunan/:user', DataAgunanController.delete)

module.exports = router