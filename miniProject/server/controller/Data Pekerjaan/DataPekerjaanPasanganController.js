require('dotenv').config
const { GEN_DATA_PEKERJAAN_PASANGAN } = require('../../models/index')

class DataPekerjaanPasanganController {

    // Create Form Data Pekerjaan Pasangan
    static create(req, res, next) {

        const getIdUser = req.params.user

        const {
            jenis_pekerjaan_pasangan,
            nama_perusahaan_pasangan,
            jabatan_pasangan,
            kategori_instansi_pasangan,
            lama_bekerja_pasangan_tahun,
            lama_bekerja_pasangan_bulan,
            jumlah_karyawan_pasangan,
            pendapatan_pasangan,
            status_pasangan,
            pembayaran_gaji_pasangan,
            alamat_perusahaan_pasangan,
            bidang_usaha_pasangan,
            nomor_kantor_pasangan,
            nomor_hrd_pasangan,
            email_hrd_pasangan,
            nomor_atasan_pasangan,
            email_atasan_pasangan,
        } = req.body

        GEN_DATA_PEKERJAAN_PASANGAN.create({
            UserId: getIdUser,
            id_form_pekerjaan: 4,
            jenis_pekerjaan_pasangan,
            nama_perusahaan_pasangan,
            jabatan_pasangan,
            kategori_instansi_pasangan,
            lama_bekerja_pasangan_tahun,
            lama_bekerja_pasangan_bulan,
            jumlah_karyawan_pasangan,
            pendapatan_pasangan,
            status_pasangan,
            pembayaran_gaji_pasangan,
            alamat_perusahaan_pasangan,
            bidang_usaha_pasangan,
            nomor_kantor_pasangan,
            nomor_hrd_pasangan,
            email_hrd_pasangan,
            nomor_atasan_pasangan,
            email_atasan_pasangan,
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

    // Read Form Data Pekerjaan Pasangan
    static read(req, res) {

        const getIdUser = req.params.user

        if (!req.params.user) {
            res.status(422).json({
                message: "error data could not be processed"
            })
        } else {
            GEN_DATA_PEKERJAAN_PASANGAN.findAll({ where: { UserId: getIdUser } })
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

    // Update Form Data Pekerjaan Pasangan
    static update(req, res) {

        const getIdUser = parseInt(req.params.user)

        const {
            jenis_pekerjaan_pasangan,
            nama_perusahaan_pasangan,
            jabatan_pasangan,
            kategori_instansi_pasangan,
            lama_bekerja_pasangan_tahun,
            lama_bekerja_pasangan_bulan,
            jumlah_karyawan_pasangan,
            pendapatan_pasangan,
            status_pasangan,
            pembayaran_gaji_pasangan,
            alamat_perusahaan_pasangan,
            bidang_usaha_pasangan,
            nomor_kantor_pasangan,
            nomor_hrd_pasangan,
            email_hrd_pasangan,
            nomor_atasan_pasangan,
            email_atasan_pasangan,
        } = req.body

        GEN_DATA_PEKERJAAN_PASANGAN.update({
            jenis_pekerjaan_pasangan,
            nama_perusahaan_pasangan,
            jabatan_pasangan,
            kategori_instansi_pasangan,
            lama_bekerja_pasangan_tahun,
            lama_bekerja_pasangan_bulan,
            jumlah_karyawan_pasangan,
            pendapatan_pasangan,
            status_pasangan,
            pembayaran_gaji_pasangan,
            alamat_perusahaan_pasangan,
            bidang_usaha_pasangan,
            nomor_kantor_pasangan,
            nomor_hrd_pasangan,
            email_hrd_pasangan,
            nomor_atasan_pasangan,
            email_atasan_pasangan,
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

    // Delete Form Data Pekerjaan Pasangan
    static delete(req, res) {

        const getIdUser = parseInt(req.params.user)

        GEN_DATA_PEKERJAAN_PASANGAN.destroy({ where: { UserId: getIdUser } })
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

module.exports = DataPekerjaanPasanganController