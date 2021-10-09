require('dotenv').config
const { GEN_DATA_PEKERJAAN_PEMOHON } = require('../../models/index')

class DataPekerjaanPemohonController {

    // Create Form Data Pekerjaan Pemohon
    static create(req, res, next) {

        const getIdUser = req.params.user

        const {
            jenis_pekerjaan,
            nama_perusahaan,
            jabatan,
            kategori_instansi,
            lama_bekerja_tahun,
            lama_bekerja_bulan,
            jumlah_karyawan,
            pendapatan,
            status_pekerjaan,
            pembayaran_gaji,
            alamat_kantor,
            bidang_usaha,
            nomor_kantor,
            nomor_hrd,
            email_hrd,
            nomor_atasan,
            email_atasan,
        } = req.body

        GEN_DATA_PEKERJAAN_PEMOHON.create({
            UserId: getIdUser,
            id_form_pekerjaan: 4,
            jenis_pekerjaan,
            nama_perusahaan,
            jabatan,
            kategori_instansi,
            lama_bekerja_tahun,
            lama_bekerja_bulan,
            jumlah_karyawan,
            pendapatan,
            status_pekerjaan,
            pembayaran_gaji,
            alamat_kantor,
            bidang_usaha,
            nomor_kantor,
            nomor_hrd,
            email_hrd,
            nomor_atasan,
            email_atasan,
        })
            .then((data) => {
                console.log(data);
                res.status(200).json({
                    message: "Data Perkejaan Pemohon Add Success",
                    result: data
                })
            })
            .catch((err) => {
                console.log(err);
                next({
                    name: "failed to add data pekerjaan pemohon",
                    log: err
                })
            })
    }

    // Read Form Data Pekerjaan Pemohon
    static read(req, res) {

        const getIdUser = req.params.user

        if (!req.params.user) {
            res.status(422).json({
                message: "error data could not be processed"
            })
        } else {
            GEN_DATA_PEKERJAAN_PEMOHON.findAll({ where: { UserId: getIdUser } })
                .then((data) => {
                    res.status(404).json({
                        message: "fGet One Id User",
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

    // Update Form Data Pekerjaan Pemohon
    static update(req, res) {

        const getIdUser = parseInt(req.params.user)

        const {
            jenis_pekerjaan,
            nama_perusahaan,
            jabatan,
            kategori_instansi,
            lama_bekerja_tahun,
            lama_bekerja_bulan,
            jumlah_karyawan,
            pendapatan,
            status_pekerjaan,
            pembayaran_gaji,
            alamat_kantor,
            bidang_usaha,
            nomor_kantor,
            nomor_hrd,
            email_hrd,
            nomor_atasan,
            email_atasan,
        } = req.body

        GEN_DATA_PEKERJAAN_PEMOHON.update({
            jenis_pekerjaan,
            nama_perusahaan,
            jabatan,
            kategori_instansi,
            lama_bekerja_tahun,
            lama_bekerja_bulan,
            jumlah_karyawan,
            pendapatan,
            status_pekerjaan,
            pembayaran_gaji,
            alamat_perusahaan,
            bidang_usaha,
            nomor_kantor,
            nomor_hrd,
            email_hrd,
            nomor_atasan,
            email_atasan
        }, { where: { UserId: getIdUser } })
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
    }

    // Delete Form Data Pekerjaan Pemohon
    static delete(req, res) {

        const getIdUser = parseInt(req.params.user)

        GEN_DATA_PEKERJAAN_PEMOHON.destroy({ where: { UserId: getIdUser } })
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

module.exports = DataPekerjaanPemohonController