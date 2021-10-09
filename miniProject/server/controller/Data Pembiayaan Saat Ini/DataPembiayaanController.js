require('dotenv').config
const { GEN_DATA_PEMBIAYAAN_SAAT_INI } = require('../../models/index')

class DataPembiayaanYangDimilikiController {

    // Create Form Data Pembiayaan Yang Dimiliki
    static create(req, res, next) {

        const {
            pembiayaan_bank_lain,
            jumlah_pembiayaan,
            angsuran,
            jatuh_tempo,
            jenis_pembiayaan,
            nama_kreditur,
        } = req.body

        const getIdUser = req.params.user

        GEN_DATA_PEMBIAYAAN_SAAT_INI.create({
            UserId: getIdUser,
            id_form_pembiayaan: 5,
            pembiayaan_bank_lain,
            jumlah_pembiayaan,
            angsuran,
            jatuh_tempo,
            jenis_pembiayaan,
            nama_kreditur,
        })
            .then((data) => {
                res.status(200).json({
                    message: "Add Data Method Create",
                    result: data
                })
            })
            .catch((err) => {
                next({
                    name: "failed to add data pembiayaan saat ini",
                    log: err
                })
            })
    }

    // Read Form Data Pembiayaan Yang Dimiliki
    static read(req, res) {

        const getIdUser = req.params.user

        if (!req.params.user) {
            res.status(422).json({
                message: "error data could not be processed"
            })
        } else {
            GEN_DATA_PEMBIAYAAN_SAAT_INI.findAll({ where: { UserId: getIdUser } })
                .then((data) => {
                    res.status(404).json({
                        message: "Get One Id User",
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
            pembiayaan_bank_lain,
            jumlah_pembiayaan,
            angsuran,
            jatuh_tempo,
            jenis_pembiayaan,
            nama_kreditur,
        } = req.body

        GEN_DATA_PEMBIAYAAN_SAAT_INI.update({
            pembiayaan_bank_lain,
            jumlah_pembiayaan,
            angsuran,
            jatuh_tempo,
            jenis_pembiayaan,
            nama_kreditur,
        }, { where: { UserId: getIdUser } })
            .then((data) => {
                res.status(200).json({
                    message: "update Data success",
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

    // Delete Form Data Pekerjaan Pemohon
    static delete(req, res) {

        const getIdUser = parseInt(req.params.user)

        GEN_DATA_PEMBIAYAAN_SAAT_INI.destroy({ where: { UserId: getIdUser } })
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

module.exports = DataPembiayaanYangDimilikiController