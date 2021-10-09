const checkDataPekerjaanPemohon = (req, res, next) => {

    const {
        jenis_pekerjaan,
        nama_perusahaan,
        jabatan,
        kategori_instansi,
        lama_bekerja_tahun,
        lama_bekerja_bulan,
        jumlah_karyawan,
        pendapatan,
        status_pekerjaan,
        pembayaran_gaji,
        alamat_perusahaan,
        bidang_usaha,
        nomor_kantor,
        nomor_hrd,
        email_hrd,
        nomor_atasan,
        email_atasan,
    } = req.body

    if (
        !jenis_pekerjaan ||
        !nama_perusahaan ||
        !jabatan ||
        !kategori_instansi ||
        !lama_bekerja_tahun ||
        !lama_bekerja_bulan ||
        !jumlah_karyawan ||
        !pendapatan ||
        !status_pekerjaan ||
        !pembayaran_gaji ||
        !alamat_perusahaan ||
        !bidang_usaha ||
        !nomor_kantor ||
        !nomor_hrd ||
        !email_hrd ||
        !nomor_atasan ||
        !email_atasan
    ) {
        next({ name: "REQUIRED_DATA_NOT_FOUND" })
    }

    else if (
        typeof nama_pemohon !== 'string' ||
        typeof tempat_lahir_pemohon !== 'string' ||
        typeof tanggal_lahir_pemohon !== 'string' ||
        typeof nik_pemohon !== 'string' ||
        typeof npwp_pemohon !== 'integer' ||
        typeof nama_ibu_kandung_pemohon !== 'integer' ||
        typeof status_kawin_pemohon !== 'integer' ||
        typeof jumlah_tanggungan_anak !== 'bigint' ||
        typeof pendidikan_terakhir !== 'string' ||
        typeof status_tempat_tinggal !== 'string' ||
        typeof alamat_ktp_domisili !== 'string' ||
        typeof rt_domisili !== 'string' ||
        typeof rw_domisili !== 'bigint' ||
        typeof provinsi_domisili !== 'bigint' ||
        typeof kab_kota_domisili !== 'string' ||
        typeof kecamatan_domisili !== 'bigint' ||
        typeof kelurahan_domisili !== 'string'
    ) {
        next({ name: "UNPROCESSABLE_DATA" })
    }

    else {
        next()
    }
}

const checkDataPekerjaanPasangan = (req, res, next) => {
    const {
        jenis_pekerjaan_pasangan,
        nama_perusahaan_pasangan,
        jabatan_pasangan,
        kategori_instansi_pasangan,
        lama_bekerja_pasangan,
        jumlah_karyawan_pasangan,
        pendapatan_pasangan,
        status_pasangan,
        pembayaran_gaji_pasangan,
        alamat_perusahaan_pasangan,
        bidang_usaha_pasangan,
        nomor_kantor_pasangan,
        nomor_hrd_pasangan,
        email_hrd_pasangan,
        nomor_atasan_pasangan,
        email_atasan_pasangan
    } = req.body

    if (
        !jenis_pekerjaan_pasangan ||
        !nama_perusahaan_pasangan ||
        !jabatan_pasangan ||
        !kategori_instansi_pasangan ||
        !lama_bekerja_pasangan ||
        !jumlah_karyawan_pasangan ||
        !pendapatan_pasangan ||
        !status_pasangan ||
        !pembayaran_gaji_pasangan ||
        !alamat_perusahaan_pasangan ||
        !bidang_usaha_pasangan ||
        !nomor_kantor_pasangan ||
        !nomor_hrd_pasangan ||
        !email_hrd_pasangan ||
        !nomor_atasan_pasangan ||
        !email_atasan_pasangan
    ) {
        next({ name: "REQUIRED_DATA_NOT_FOUND" })
    }

    else if (
        typeof nama_pemohon !== 'string' ||
        typeof tempat_lahir_pemohon !== 'string' ||
        typeof tanggal_lahir_pemohon !== 'string' ||
        typeof nik_pemohon !== 'string' ||
        typeof npwp_pemohon !== 'integer' ||
        typeof nama_ibu_kandung_pemohon !== 'integer' ||
        typeof status_kawin_pemohon !== 'bigint' ||
        typeof jumlah_tanggungan_anak !== 'string' ||
        typeof pendidikan_terakhir !== 'string' ||
        typeof status_tempat_tinggal !== 'string' ||
        typeof alamat_ktp_domisili !== 'string' ||
        typeof rt_domisili !== 'bigint' ||
        typeof rw_domisili !== 'bigint' ||
        typeof provinsi_domisili !== 'string' ||
        typeof kab_kota_domisili !== 'bigint' ||
        typeof kecamatan_domisili !== 'string'
    ) {
        next({ name: "UNPROCESSABLE_DATA" })
    }

    else {
        next()
    }
}

module.exports = {
    checkDataPekerjaanPemohon,
    checkDataPekerjaanPasangan
}