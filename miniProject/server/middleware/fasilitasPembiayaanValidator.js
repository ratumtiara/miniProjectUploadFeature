const pengajuan = (req, res, next) => {
    const {
        skema_pengajuan,
        peruntukan_pembiayaan,
        program,
        objek,
        akad,
        total_plafond,
        waktu_pembiayaan,
    } = req.body

    if (
        !skema_pengajuan ||
        !peruntukan_pembiayaan ||
        !program ||
        !objek ||
        !akad ||
        !total_plafond ||
        !waktu_pembiayaan
    ) {
        next({ name: "REQUIRED_DATA_NOT_FOUND" })
    } else if (
        typeof skema_pengajuan !== 'string' ||
        typeof peruntukan_pembiayaan !== 'string' ||
        typeof program !== 'string' ||
        typeof objek !== 'string' ||
        typeof akad !== 'string' ||

        // Tipe data dari FE string
        typeof total_plafond !== 'string' ||
        typeof waktu_pembiayaan !== 'string'
    ) {
        next({ name: "UNPROCESSABLE_DATA" })
    }
    else {
        next()
    }
}

const kendaraan = (req, res, next) => {
    const {
        jenis_penjual_kendaraan,
        nama_penjual_kendaraan,
        nilai_spr_kendaraan,
        no_telepon_penjual_kendaraan,
        uang_muka_kendaraan,
    } = req.body

    if (
        !jenis_penjual_kendaraan ||
        !nama_penjual_kendaraan ||
        !nilai_spr_kendaraan ||
        !no_telepon_penjual_kendaraan ||
        !uang_muka_kendaraan
    ) {
        next({ name: "REQUIRED_DATA_NOT_FOUND" })
    } else if (
        typeof jenis_penjual_kendaraan !== 'string' ||
        typeof nama_penjual_kendaraan !== 'string' ||
        typeof nilai_spr_kendaraan !== 'bigint' ||
        typeof no_telepon_penjual_kendaraan !== 'bigint' ||
        typeof uang_muka_kendaraan !== 'bigint'
    ) {
        next(({ name: "UNPROCESSABLE_DATA" }))
    }
    else {
        next()
    }
}

const properti = (req, res, next) => {
    const {
        jenis_penjual_properti,
        nama_penjual_properti,
        nilai_spr_properti,
        no_telepon_penjual_properti,
        uang_muka_properti,
        nama_proyek,
        kondisi_bangunan,
        alamat_properti,
        rt,
        rw,
        provinsi_properti,
        kab_kota_properti,
        kecamatan_properti,
        kelurahan_properti,
        kode_pos_properti
    } = req.body

    if (
        !jenis_penjual_properti ||
        !nama_penjual_properti ||
        !nilai_spr_properti ||
        !no_telepon_penjual_properti ||
        !uang_muka_properti ||
        !nama_proyek ||
        !kondisi_bangunan ||
        !alamat_properti ||
        !rt ||
        !rw ||
        !provinsi_properti ||
        !kab_kota_properti ||
        !kecamatan_properti ||
        !kelurahan_properti ||
        !kode_pos_properti
    ) {
        next({ name: "REQUIRED_DATA_NOT_FOUND" })
    } else if (
        typeof jenis_penjual_properti !== 'string' ||
        typeof nama_penjual_properti !== 'string' ||
        typeof nilai_spr_properti !== 'string' ||
        typeof no_telepon_penjual_properti !== 'string' ||
        typeof uang_muka_properti !== 'string' ||
        typeof nama_proyek !== 'string' ||
        typeof kondisi_bangunan !== 'string' ||
        typeof alamat_properti !== 'string' ||
        typeof rt !== 'string' ||
        typeof rw !== 'string' ||
        typeof provinsi_properti !== 'string' ||
        typeof kab_kota_properti !== 'string' ||
        typeof kecamatan_properti !== 'string' ||
        typeof kelurahan_properti !== 'string' ||
        typeof kode_pos_properti !== 'string'

    ) {
        next(({ name: "UNPROCESSABLE_DATA" }))
    }
    else {
        next()
    }
}


const takeover = (req, res, next) => {
    const {
        jenis_bank_asal,
        nama_bank,
        peruntukan_fasilitas_sebelumnya,
        akad_fasilitas_sebelumnya,
        nilai_pelunasan_take_over,
        plafond_top_up,
    } = req.body

    if (
        !jenis_bank_asal ||
        !nama_bank ||
        !peruntukan_fasilitas_sebelumnya ||
        !akad_fasilitas_sebelumnya ||
        !nilai_pelunasan_take_over ||
        !plafond_top_up
    ) {
        next({ name: "REQUIRED_DATA_NOT_FOUND" })
    } else if (
        typeof jenis_bank_asal !== 'string' ||
        typeof nama_bank !== 'string' ||
        typeof peruntukan_fasilitas_sebelumnya !== 'string' ||
        typeof akad_fasilitas_sebelumnya !== 'string' ||
        typeof nilai_pelunasan_take_over !== 'bigint' ||
        typeof plafond_top_up !== 'bigint'
    ) {
        next(({ name: "UNPROCESSABLE_DATA" }))
    }
    else {
        next()
    }
}



module.exports = {
    pengajuan,
    kendaraan,
    properti,
    takeover
}