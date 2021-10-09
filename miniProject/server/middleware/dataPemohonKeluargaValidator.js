const checkDataPemohon = (req, res, next) => {
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
        alamat_ktp_domisili,
        rt_domisili,
        rw_domisili,
        provinsi_domisili,
        kab_kota_domisili,
        kecamatan_domisili,
        kelurahan_domisili,
        kode_pos_domisili
    } = req.body

    if (
        !nama_pemohon ||
        !tempat_lahir_pemohon ||
        !tanggal_lahir_pemohon ||
        !nik_pemohon ||
        !npwp_pemohon ||
        !nama_ibu_kandung_pemohon ||
        !status_kawin_pemohon ||
        !jumlah_tanggungan_anak ||
        !pendidikan_terakhir ||
        !status_tempat_tinggal ||
        !alamat_ktp_domisili ||
        !rt_domisili ||
        !rw_domisili ||
        !provinsi_domisili ||
        !kab_kota_domisili ||
        !kecamatan_domisili ||
        !kelurahan_domisili ||
        !kode_pos_domisili
    ) {
        next({ name: "REQUIRED_DATA_NOT_FOUND" })
    }

    else if (
        typeof nama_pemohon !== 'string' ||
        typeof tempat_lahir_pemohon !== 'string' ||
        typeof tanggal_lahir_pemohon !== 'DATE' ||
        typeof nik_pemohon !== 'bigint' ||
        typeof npwp_pemohon !== 'bigint' ||
        typeof nama_ibu_kandung_pemohon !== 'string' ||
        typeof status_kawin_pemohon !== 'string' ||
        typeof jumlah_tanggungan_anak !== 'integer' ||
        typeof pendidikan_terakhir !== 'string' ||
        typeof status_tempat_tinggal !== 'string' ||
        typeof alamat_ktp_domisili !== 'string' ||
        typeof rt_domisili !== 'integer' ||
        typeof rw_domisili !== 'integer' ||
        typeof provinsi_domisili !== 'string' ||
        typeof kab_kota_domisili !== 'string' ||
        typeof kecamatan_domisili !== 'string' ||
        typeof kelurahan_domisili !== 'string' ||
        typeof kode_pos_domisili !== 'integer'
    ) {
        next({ name: "UNPROCESSABLE_DATA" })
    }

    else {
        next()
    }
}

const checkDataPasangan = (req, res, next) => {
    const {
        nama_pasangan,
        tempat_lahir_pasangan,
        tanggal_lahir_pasangan,
        nik_pasangan,
        npwp_pasangan,
        pekerjaan_pasangan,
        no_telepon_pasangan
    } = req.body

    if (
        !nama_pasangan ||
        !tempat_lahir_pasangan ||
        !tanggal_lahir_pasangan ||
        !nik_pasangan ||
        !npwp_pasangan ||
        !pekerjaan_pasangan ||
        !no_telepon_pasangan
    ) {
        next({ name: "REQUIRED_DATA_NOT_FOUND" })
    }

    else if (
        typeof nama_pasangan !== 'string' ||
        typeof tempat_lahir_pasangan !== 'string' ||
        typeof tanggal_lahir_pasangan !== 'DATE' ||
        typeof nik_pasangan !== 'bigint' ||
        typeof npwp_pasangan !== 'bigint' ||
        typeof pekerjaan_pasangan !== 'string' ||
        typeof no_telepon_pasangan !== 'bigint'
    ) {
        next(({ name: "UNPROCESSABLE_DATA" }))
    }

    else if (no_telepon_pasangan.length < 10) {
        next({
            name: "UNPROCESSABLE_DATA",
            custom: "No Handphone is too short ,add numberr until minimum 10 digit"
        })
    }

    else {
        next()
    }
}

const checkDataKerabat = (req, res, next) => {

    const {
        nama_kerabat,
        alamat_kerabat,
        rt_kerabat,
        rw_kerabat,
        provinsi_kerabat,
        kab_kota_kerabat,
        kecamatan_kerabat,
        kelurahan_kerabat,
        kode_pos_kerabat,
        no_telepon_rumah_kerabat,
        no_handphone_kerabat,
        hubungan_nasabah_kerabat
    } = req.body

    if (
        !nama_kerabat ||
        !alamat_kerabat ||
        !rt_kerabat ||
        !rw_kerabat ||
        !provinsi_kerabat ||
        !kab_kota_kerabat ||
        !kecamatan_kerabat ||
        !kelurahan_kerabat ||
        !kode_pos_kerabat ||
        !no_telepon_rumah_kerabat ||
        !no_handphone_kerabat ||
        !hubungan_nasabah_kerabat
    ) {
        next({ name: "REQUIRED_DATA_NOT_FOUND" })
    }

    else if (
        typeof nama_kerabat !== 'string' ||
        typeof alamat_kerabat !== 'string' ||
        typeof rt_kerabat !== 'integer' ||
        typeof rw_kerabat !== 'integer' ||
        typeof provinsi_kerabat !== 'string' ||
        typeof kab_kota_kerabat !== 'string' ||
        typeof kecamatan_kerabat !== 'string' ||
        typeof kelurahan_kerabat !== 'string' ||
        typeof kode_pos_kerabat !== 'integer' ||
        typeof no_telepon_rumah_kerabat !== 'bigint' ||
        typeof no_handphone_kerabat !== 'bigint' ||
        typeof hubungan_nasabah_kerabat !== 'string'
    ) {
        next({ name: "REQUIRED_DATA_NOT_FOUND" })
    }

    else if (no_handphone_kerabat.length < 10) {
        next({
            name: "UNPROCESSABLE_DATA",
            custom: "No Handphone is too short ,add numberr until minimum 10 digit"
        })
    }

    else {
        next()
    }
}

module.exports = {
    checkDataPemohon,
    checkDataPasangan,
    checkDataKerabat
}