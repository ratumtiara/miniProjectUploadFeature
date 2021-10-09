const { GEN_DATA_AGUNAN } = require('../../models/index')

class DataAgunanController {

    // Create Form Data Agunan
    static create(req, res) {

        const getIdUser = req.params.user

        const {
            jenis_agunan,
            luas_tanah,
            luas_bangunan,
            kondisi_bangunan,
            status_kepemilikan,
            status_agunan,
            nama_sertifikat,
            nomor_sertifikat,
            masa_berlaku_sertifikat,
            nomor_spr,
            alamat_agunan,
            rt,
            rw,
            provinsi_agunan,
            kab_kota_agunan,
            kecamatan_agunan,
            kelurahan_agunan,
            kode_pos_agunan,
        } = req.body

        GEN_DATA_AGUNAN.create({
            UserId: getIdUser,
            id_form_agunan: 2,
            jenis_agunan,
            luas_tanah,
            luas_bangunan,
            kondisi_bangunan,
            status_kepemilikan,
            status_agunan,
            nama_sertifikat,
            nomor_sertifikat,
            masa_berlaku_sertifikat,
            nomor_spr,
            alamat_agunan,
            rt,
            rw,
            provinsi_agunan,
            kab_kota_agunan,
            kecamatan_agunan,
            kelurahan_agunan,
            kode_pos_agunan,
        })
            .then((data) => {
                console.log(data);
                res.status(201).json({
                    message: "Add Data Agunan Success",
                    data: data
                })
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    message: "Error Created",
                    log: err
                })
            })
    }

    // Read Form Data Agunan
    static read(req, res) {

        const getIdUser = req.params.user

        if (!getIdUser) {
            res.status(422).json({
                message: "error data could not be processed"
            })
        } else {
            GEN_DATA_AGUNAN.findOne({ where: { UserId: getIdUser } })
                .then((data) => {
                    if (!data) {
                        res.status(404).json({
                            message: "Data Not Found",
                            data: data
                        })
                    } else {
                        res.status(201).json({
                            message: "Fetch Get One Agunan Success",
                            data: data
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

    // Update Form Data Agunan
    static update(req, res) {
        const getIdUser = req.params.user

        const {
            jenis_agunan,
            luas_tanah,
            luas_bangunan,
            kondisi_bangunan,
            status_kepemilikan,
            status_agunan,
            nama_sertifikat,
            nomor_sertifikat,
            masa_berlaku_sertifikat,
            nomor_spr,
            alamat_agunan,
            rt,
            rw,
            provinsi_agunan,
            kab_kota_agunan,
            kecamatan_agunan,
            kelurahan_agunan,
            kode_pos_agunan
        } = req.body

        GEN_DATA_AGUNAN.update({
            jenis_agunan,
            luas_tanah,
            luas_bangunan,
            kondisi_bangunan,
            status_kepemilikan,
            status_agunan,
            nama_sertifikat,
            nomor_sertifikat,
            masa_berlaku_sertifikat,
            nomor_spr,
            alamat_agunan,
            rt,
            rw,
            provinsi_agunan,
            kab_kota_agunan,
            kecamatan_agunan,
            kelurahan_agunan,
            kode_pos_agunan
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

    // Delete Form Data Agunan
    static delete(req, res) {

        const getIdUser = parseInt(req.params.user)

        GEN_DATA_AGUNAN.destroy({ where: { UserId: getIdUser } })
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

module.exports = DataAgunanController