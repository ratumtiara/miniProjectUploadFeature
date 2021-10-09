const { GEN_PEMBIAYAAN_TAKE_OVER } = require('../../models/index')

class PembiayaanTakeOverController {

    // Create Pembiayaan Konsumsi Properti
    static create(req, res, next) {

        const getIdUser = parseInt(req.params.user)

        const {
            jenis_bank_asal,
            nama_bank,
            peruntukan_fasilitas_sebelumnya,
            akad_fasilitas_sebelumnya,
            nilai_pelunasan_take_over,
            plafond_top_up,
        } = req.body

        GEN_PEMBIAYAAN_TAKE_OVER.create({
            UserId: getIdUser,
            id_form_pengajuan: 1,
            jenis_bank_asal,
            nama_bank,
            peruntukan_fasilitas_sebelumnya,
            akad_fasilitas_sebelumnya,
            nilai_pelunasan_take_over,
            plafond_top_up,
        })
            .then((data) => {

                res.status(200).json({
                    message: "Add Data Pengajuan",
                    result: data
                })
            })
            .catch((err) => {
                console.log(typeof total_plafond);
                // console.log(err);
                next({
                    name: "Error Create",
                    log: err
                })
            })
    }

    // Read Pembiayaan Konsumsi Properti
    static read(req, res) {

        const getIdUser = req.params.user

        if (!getIdUser) {
            res.status(422).json({
                message: "error data could not be processed"
            })
        } else {
            GEN_PEMBIAYAAN_TAKE_OVER.findOne({ where: { UserId: getIdUser } })
                .then((data) => {
                    if (!data) {
                        res.status(404).json({
                            message: "Data Not Found",
                            data
                        })
                    } else {
                        res.status(201).json({
                            message: "Fetch Data Success",
                            data
                        })
                    }
                })
                .catch((err) => {
                    res.status(500).json({
                        message: "Internal Server Error",
                        log: err
                    })
                })
        }
    }

    // Update Pembiayaan Konsumsi Properti
    static update(req, res) {

        const getIdUser = parseInt(req.params.user)

        const {
            jenis_bank_asal,
            nama_bank,
            peruntukan_fasilitas_sebelumnya,
            akad_fasilitas_sebelumnya,
            nilai_pelunasan_take_over,
            plafond_top_up,
        } = req.body

        GEN_PEMBIAYAAN_TAKE_OVER.update({
            jenis_bank_asal,
            nama_bank,
            peruntukan_fasilitas_sebelumnya,
            akad_fasilitas_sebelumnya,
            nilai_pelunasan_take_over,
            plafond_top_up,
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

    // Delete Pembiayaan Konsumsi Properti
    static delete(req, res) {

        const getIdUser = parseInt(req.params.user)

        GEN_PEMBIAYAAN_TAKE_OVER.destroy({ where: { UserId: getIdUser } })
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

module.exports = PembiayaanTakeOverController