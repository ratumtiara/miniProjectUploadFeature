require('dotenv').config
const { GEN_DATA_DIRI_KERABAT } = require('../../models/index')

class DataDiriKerabatController {

    // Create Form Data Diri Pasangan
    static create(req, res, next) {

        const getIdUser = parseInt(req.params.user)

        const {
            nama_kerabat,
            alamat_kerabat,
            rt,
            rw,
            kelurahan,
            kecamatan,
            kab_kota,
            provinsi,
            kode_pos,
            no_telepon_rumah,
            no_handphone,
            hubungan_nasabah,
        } = req.body

        GEN_DATA_DIRI_KERABAT.create({
            UserId: getIdUser,
            id_form_data_diri_keluarga: 3,
            nama_kerabat,
            alamat_kerabat,
            rt,
            rw,
            kelurahan,
            kecamatan,
            kab_kota,
            provinsi,
            kode_pos,
            no_telepon_rumah,
            no_handphone,
            hubungan_nasabah,
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

    // Read Form Data Diri Pasangan
    static read(req, res) {

        const getIdUser = req.params.user

        if (!req.params.user) {
            res.status(422).json({
                message: "error data could not be processed"
            })
        } else {
            GEN_DATA_DIRI_KERABAT.findAll({ where: { UserId: getIdUser } })
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

    // Update Form Data Diri Pasangan
    static update(req, res) {

        const getIdUser = parseInt(req.params.user)

        const {
            nama_kerabat,
            alamat_kerabat,
            rt,
            rw,
            kelurahan,
            kecamatan,
            kab_kota,
            provinsi,
            kode_pos,
            no_telepon_rumah,
            no_handphone,
            hubungan_nasabah,
        } = req.body

        GEN_DATA_DIRI_KERABAT.update({
            nama_kerabat,
            alamat_kerabat,
            rt,
            rw,
            kelurahan,
            kecamatan,
            kab_kota,
            provinsi,
            kode_pos,
            no_telepon_rumah,
            no_handphone,
            hubungan_nasabah,
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

    // Delete Form Data Diri Pasangan
    static delete(req, res) {

        const getIdUser = parseInt(req.params.user)

        GEN_DATA_DIRI_KERABAT.destroy({ where: { UserId: getIdUser } })
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

module.exports = DataDiriKerabatController