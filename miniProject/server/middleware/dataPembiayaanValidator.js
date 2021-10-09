const checkDataPembiayaan = (req, res, next) => {

    const {
        pembiayaan_bank_lain,
        jumlah_pembiayaan,
        angsuran,
        jatuh_tempo,
        jenis_pembiayaan,
        nama_kreditur,
    } = req.body

    if (
        !pembiayaan_bank_lain ||
        !jumlah_pembiayaan ||
        !angsuran ||
        !jatuh_tempo ||
        !jenis_pembiayaan ||
        !nama_kreditur
    ) {
        next({ name: "REQUIRED_DATA_NOT_FOUND" })
    }

    else if (
        typeof nama_pemohon !== 'string' ||
        typeof tempat_lahir_pemohon !== 'string' ||
        typeof tanggal_lahir_pemohon !== 'string' ||
        typeof nik_pemohon !== 'string' ||
        typeof npwp_pemohon !== 'string' ||
        typeof nama_ibu_kandung_pemohon !== 'string'
    ) {
        next({ name: "UNPROCESSABLE_DATA" })
    }

    else {
        next()
    }
}

module.exports = {
    checkDataPembiayaan
}