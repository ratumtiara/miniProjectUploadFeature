const dataAgunan = (req, res, next) => {
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

    if (!jenis_agunan ||
        !luas_tanah ||
        !luas_bangunan ||
        !kondisi_bangunan ||
        !status_kepemilikan ||
        !status_agunan ||
        !nama_sertifikat ||
        !nomor_sertifikat ||
        !masa_berlaku_sertifikat ||
        !nomor_spr ||
        !alamat_agunan ||
        !rt ||
        !rw ||
        !provinsi_agunan ||
        !kab_kota_agunan ||
        !kecamatan_agunan ||
        !kelurahan_agunan ||
        !kode_pos_agunan
    ) {
        next({ name: "REQUIRED_DATA_NOT_FOUND" })
    } else if (
        typeof jenis_agunan !== 'string' ||
        typeof luas_tanah !== 'string' ||
        typeof luas_bangunan !== 'string' ||
        typeof kondisi_bangunan !== 'string' ||
        typeof status_kepemilikan !== 'string' ||
        typeof status_agunan !== 'string' ||
        typeof nama_sertifikat !== 'string' ||
        typeof nomor_sertifikat !== 'string' ||
        typeof masa_berlaku_sertifikat !== 'string' ||
        typeof nomor_spr !== 'string' ||
        typeof alamat_agunan !== 'string' ||
        typeof rt !== 'integer' ||
        typeof rw !== 'integer' ||
        typeof provinsi_agunan !== 'string' ||
        typeof kab_kota_agunan !== 'string' ||
        typeof kecamatan_agunan !== 'string' ||
        typeof kelurahan_agunan !== 'string' ||
        typeof kode_pos_agunan !== 'integer') {
        next(({ name: "UNPROCESSABLE_DATA" }))
    }
    else {
        next()
    }
}


module.exports = {
    dataAgunan
}