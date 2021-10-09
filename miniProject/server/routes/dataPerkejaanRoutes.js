const router = require("express").Router();
const DataPekerjaanPemohonController = require("../controller/Data Pekerjaan/DataPekerjaanPemohonController");
const DataPekerjaanPasanganController = require("../controller/Data Pekerjaan/DataPekerjaanPasanganController");
const validator = require("../middleware/dataPekerjaanValidator");

// Form Data Pekerjaan Pemohon
// router.post('/add_form_pekerjaan_pemohon/:user', validator.checkDataPekerjaanPemohon, DataPekerjaanController.addDataPekerjaanPemohon)
router.post('/add_form_pekerjaan_pemohon/:user', DataPekerjaanPemohonController.create)
router.get('/read_form_pekerjaan_pemohon/:user', DataPekerjaanPemohonController.read)
router.put('/update_form_pekerjaan_pemohon/:user', DataPekerjaanPemohonController.update)
router.delete('/delete_form_pekerjaan_pemohon/:user', DataPekerjaanPemohonController.delete)

// Form Data Pekerjaan Pasangan
// router.post('/add_form_pekerjaan_pasangan/:user', validator.checkDataPekerjaanPasangan, DataPekerjaanController.addDataPekerjaanPasangan)
router.post('/add_form_pekerjaan_pasangan/:user', DataPekerjaanPasanganController.create)
router.get('/read_form_pekerjaan_pasangan/:user', DataPekerjaanPasanganController.read)
router.put('/update_form_pekerjaan_pasangan/:user', DataPekerjaanPasanganController.update)
router.delete('/delete_form_pekerjaan_pasangan/:user', DataPekerjaanPasanganController.delete)

module.exports = router;
