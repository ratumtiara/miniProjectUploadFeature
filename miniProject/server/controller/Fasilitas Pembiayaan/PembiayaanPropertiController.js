const { GEN_PEMBIAYAAN_PROPERTI } = require('../../models/index')

class PembiayaanPropertiController {

    // Create Pembiayaan Konsumsi Properti
    static create(req, res, next) {

        const getIdUser = parseInt(req.params.user)

        const {
            jenis_penjual,
            nama_penjual,
            nilai_spr,
            no_telepon_penjual,
            uang_muka,
            nama_proyek,
            kondisi_bangunan,
            alamat,
            rt,
            rw,
            provinsi,
            kab_kota,
            kecamatan,
            kelurahan,
            kode_pos
        } = req.body

        console.log(req.body);

        GEN_PEMBIAYAAN_PROPERTI.create({
            UserId: getIdUser,
            id_form_pengajuan: 1,
            jenis_penjual,
            nama_penjual,
            nilai_spr,
            no_telepon_penjual,
            uang_muka,
            nama_proyek,
            kondisi_bangunan,
            alamat,
            rt,
            rw,
            provinsi,
            kab_kota,
            kecamatan,
            kelurahan,
            kode_pos,
        })
            .then((data) => {
                res.status(200).json({
                    message: "Add Data Pengajuan",
                    result: data
                })
            })
            .catch((err) => {
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
            GEN_PEMBIAYAAN_PROPERTI.findOne({ where: { UserId: getIdUser } })
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
            jenis_penjual,
            nama_penjual,
            nilai_spr,
            no_telepon_penjual,
            uang_muka,
            nama_proyek,
            kondisi_bangunan,
            alamat,
            rt,
            rw,
            provinsi,
            kab_kota,
            kecamatan,
            kelurahan,
            kode_pos
        } = req.body

        GEN_PEMBIAYAAN_PROPERTI.update({
            jenis_penjual,
            nama_penjual,
            nilai_spr,
            no_telepon_penjual,
            uang_muka,
            nama_proyek,
            kondisi_bangunan,
            alamat,
            rt,
            rw,
            provinsi,
            kab_kota,
            kecamatan,
            kelurahan,
            kode_pos
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

        GEN_PEMBIAYAAN_PROPERTI.destroy({ where: { UserId: getIdUser } })
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

module.exports = PembiayaanPropertiController