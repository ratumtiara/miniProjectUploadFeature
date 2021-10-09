const router = require('express').Router()
const informasiAwalController = require('../controller/Informasi Awal/InformasiAwalController')

router.post('/add_form_informasi_awal/:user', informasiAwalController.create)
router.get('/read_form_informasi_awal/:user', informasiAwalController.read)
router.put('/update_form_informasi_awal/:user', informasiAwalController.update)
router.delete('/delete_form_informasi_awal/:user', informasiAwalController.delete)

module.exports = router