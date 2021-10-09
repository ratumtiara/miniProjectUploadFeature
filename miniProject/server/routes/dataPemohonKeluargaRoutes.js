const router = require("express").Router();
const DataPemohonController = require("../controller/Data Diri dan Keluarga/DataPemohonController");
const DataPasanganController = require("../controller/Data Diri dan Keluarga/DataDiriPasanganController");
const DataKerabat = require("../controller/Data Diri dan Keluarga/DataDiriKerabatController");
const validator = require("../middleware/dataPemohonKeluargaValidator");

// Form Data Pemohon
// router.post('/add_data_data_pemohon/:user', validator.checkDataPemohon, DataPemohonKeluargaController.addDataPemohon)
router.post('/add_data_diri_pemohon/:user', DataPemohonController.create)
router.get('/read_data_diri_pemohon/:user', DataPemohonController.read)
router.put('/update_data_diri_pemohon/:user', DataPemohonController.update)
router.delete('/delete_data_diri_pemohon/:user', DataPemohonController.delete)

// Form Data Pasangan
// router.post('/add_data_diri_pasangan/:user', validator.checkDataPasangan, DataPemohonKeluargaController.addDataPasangan)
router.post('/add_data_diri_pasangan/:user', DataPasanganController.create)
router.get('/read_data_diri_pasangan/:user', DataPasanganController.read)
router.put('/update_data_diri_pasangan/:user', DataPasanganController.update)
router.delete('/delete_data_diri_pasangan/:user', DataPasanganController.delete)

// Form Data Kerabat
router.post('/add_data_diri_kerabat/:user', DataKerabat.create)
router.get('/read_data_diri_kerabat/:user', DataKerabat.read)
router.put('/update_data_diri_kerabat/:user', DataKerabat.update)
router.delete('/delete_data_diri_kerabat/:user', DataKerabat.delete)

module.exports = router;
