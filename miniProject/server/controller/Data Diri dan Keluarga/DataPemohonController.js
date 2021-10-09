require('dotenv').config
const { GEN_DATA_DIRI_PEMOHON } = require('../../models/index')

class DataPemohonController {

    // Create Form Data Pemohon
    static create(req, res, next) {

        const getIdUser = parseInt(req.params.user)

        const {
            nama_pemohon,
            tempat_lahir_pemohon,
            tanggal_lahir_pemohon,
            nik_pemohon,
            npwp_pemohon,
            nama_ibu_kandung_pemohon,
            status_kawin_pemohon,
            jumlah_tanggungan_anak,
            pendidikan_terakhir,
            status_tempat_tinggal,
            alamat_seuai_ktp,
            rt,
            rw,
            provinsi,
            kab_kota,
            kecamatan,
            kelurahan,
            kode_pos,
            alamat_saat_ini,
            rt_saat_ini,
            rw_saat_ini,
            kelurahan_saat_ini,
            kecamatan_saat_ini,
            kab_kota_saat_ini,
            provinsi_saat_ini,
            kode_pos_saat_ini,
            lama_tinggal,
            alamat_surat_menyurat,
            nomor_handphone1,
            nomor_handphone2,
            nomor_telp_rumah,
            alamat_email,
        } = req.body

        GEN_DATA_DIRI_PEMOHON.create({
            UserId: getIdUser,
            id_form_data_diri_keluarga: 3,
            nama_pemohon,
            tempat_lahir_pemohon,
            tanggal_lahir_pemohon,
            nik_pemohon,
            npwp_pemohon,
            nama_ibu_kandung_pemohon,
            status_kawin_pemohon,
            jumlah_tanggungan_anak,
            pendidikan_terakhir,
            status_tempat_tinggal,
            alamat_seuai_ktp,
            rt,
            rw,
            provinsi,
            kab_kota,
            kecamatan,
            kelurahan,
            kode_pos,
            alamat_saat_ini,
            rt_saat_ini,
            rw_saat_ini,
            kelurahan_saat_ini,
            kecamatan_saat_ini,
            kab_kota_saat_ini,
            provinsi_saat_ini,
            kode_pos_saat_ini,
            lama_tinggal,
            alamat_surat_menyurat,
            nomor_handphone1,
            nomor_handphone2,
            nomor_telp_rumah,
            alamat_email,
        })
            .then((data) => {
                res.status(201).json({
                    message: "Add Form Data Diri keluarga Success",
                    result: data
                })
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    message: "Server Error",
                    log: err
                })
            })
    }

    // Read Form Data Pemohon
    static read(req, res) {

        const getIdUser = req.params.user

        if (!req.params.user) {
            res.status(422).json({
                message: "error data could not be processed"
            })
        } else {
            GEN_DATA_DIRI_PEMOHON.findAll({ where: { UserId: getIdUser } })
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

    // Update Form Data Pemohon
    static update(req, res) {

        const getIdUser = parseInt(req.params.user)

        const {
            nama_pemohon,
            tempat_lahir_pemohon,
            tanggal_lahir_pemohon,
            nik_pemohon,
            npwp_pemohon,
            nama_ibu_kandung_pemohon,
            status_kawin_pemohon,
            jumlah_tanggungan_anak,
            pendidikan_terakhir,
            status_tempat_tinggal,
            alamat_seuai_ktp,
            rt,
            rw,
            provinsi,
            kab_kota,
            kecamatan,
            kelurahan,
            kode_pos,
            alamat_saat_ini,
            rt_saat_ini,
            rw_saat_ini,
            kelurahan_saat_ini,
            kecamatan_saat_ini,
            kab_kota_saat_ini,
            provinsi_saat_ini,
            kode_pos_saat_ini,
            lama_tinggal,
            alamat_surat_menyurat,
            nomor_handphone1,
            nomor_handphone2,
            nomor_telp_rumah,
            alamat_email,
        } = req.body

        GEN_DATA_DIRI_PEMOHON.update({
            nama_pemohon,
            tempat_lahir_pemohon,
            tanggal_lahir_pemohon,
            nik_pemohon,
            npwp_pemohon,
            nama_ibu_kandung_pemohon,
            status_kawin_pemohon,
            jumlah_tanggungan_anak,
            pendidikan_terakhir,
            status_tempat_tinggal,
            alamat_seuai_ktp,
            rt,
            rw,
            provinsi,
            kab_kota,
            kecamatan,
            kelurahan,
            kode_pos,
            alamat_saat_ini,
            rt_saat_ini,
            rw_saat_ini,
            kelurahan_saat_ini,
            kecamatan_saat_ini,
            kab_kota_saat_ini,
            provinsi_saat_ini,
            kode_pos_saat_ini,
            lama_tinggal,
            alamat_surat_menyurat,
            nomor_handphone1,
            nomor_handphone2,
            nomor_telp_rumah,
            alamat_email,
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

    // Delete Form Data Pemohon
    static delete(req, res) {

        const getIdUser = parseInt(req.params.user)

        GEN_DATA_DIRI_PEMOHON.destroy({ where: { UserId: getIdUser } })
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

module.exports = DataPemohonController