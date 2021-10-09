const { GEN_FASILITAS_PEMBIAYAAN } = require('../../models/index')

class FasilitasPembiayaanController {

    // Create Form Data Pengajuan
    static create(req, res, next) {

        const getIdUser = parseInt(req.params.user)
        // const getIdUser = req.params.user

        const {
            skema_pengajuan,
            peruntukan_pembiayaan,
            program,
            objek,
            akad,
            total_plafond,
            waktu_pembiayaan,
        } = req.body

        GEN_FASILITAS_PEMBIAYAAN.create({
            UserId: getIdUser,
            id_form_pengajuan: 1,
            skema_pengajuan,
            peruntukan_pembiayaan,
            program,
            objek,
            akad,
            total_plafond,
            waktu_pembiayaan
        })
            .then((data) => {
                console.log(data);
                res.status(200).json({
                    message: "Add Data Pengajuan",
                    result: data
                })
            })
            .catch((err) => {
                console.log(err);
                res.status(200).json({
                    message: "Erro Data Pengajuan",
                    result: err
                })
            })
    }

    // Read Form Data Pengajuan
    static read(req, res) {

        const getIdUser = parseInt(req.params.user)

        if (!getIdUser) {
            res.status(422).json({
                message: "error data could not be processed"
            })
        } else {
            GEN_FASILITAS_PEMBIAYAAN.findOne({ where: { UserId: getIdUser } })
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

    // Update Data Pengajuan
    static update(req, res) {

        const getIdUser = parseInt(req.params.user)

        const {
            skema_pengajuan,
            peruntukan_pembiayaan,
            program,
            objek,
            akad,
            total_plafond,
            waktu_pembiayaan
        } = req.body

        GEN_FASILITAS_PEMBIAYAAN.update({
            skema_pengajuan,
            peruntukan_pembiayaan,
            program,
            objek,
            akad,
            total_plafond,
            waktu_pembiayaan,
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

    // Delete Form Data Pengajuan
    static delete(req, res) {

        const getIdUser = parseInt(req.params.user)

        GEN_FASILITAS_PEMBIAYAAN.destroy({ where: { UserId: getIdUser } })
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

module.exports = FasilitasPembiayaanController