import React, { useState, useEffect, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../StepContext";
import "../Styles/Step.css";
import "../Styles/style.css";

import axios from "axios";

export default function DataDirinKel() {
  const { setStepDataDiri, userData, setUserData } =
    useContext(multiStepContext);

  const [nama_pemohon, setNama_Pemohon] = useState("");
  const [tempat_lahir_pemohon, setTempat_Lahir_Pemohon] = useState("");
  const [tanggal_lahir_pemohon, setTanggal_Lahir_Pemohon] = useState("");
  const [nik_pemohon, setNik_Pemohon] = useState("");
  const [npwp_pemohon, setNpwp_Pemohon] = useState("");
  const [nama_ibu_kandung_pemohon, setNama_Ibu_Kandung_Pemohon] = useState("");
  const [status_kawin_pemohon, setStatus_Kawin_Pemohon] = useState("");
  const [jumlah_tanggungan_anak, setJumlah_Tanggungan_Anak] = useState("");
  const [pendidikan_terakhir, setPendidikan_Terakhir] = useState("");
  const [status_tempat_tinggal, setStatus_Tempat_Tinggal] = useState("");
  const [alamat_seuai_ktp, setAlamat_Seuai_Ktp] = useState("");
  const [rt, setRt] = useState("");
  const [rw, setRw] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kab_kota, setKab_Kota] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [kode_pos, setKode_Pos] = useState("");
  const [alamat_saat_ini, setAlamat_Saat_Ini] = useState("");
  const [rt_saat_ini, setRt_Saat_Ini] = useState("");
  const [rw_saat_ini, setRw_Saat_Ini] = useState("");
  const [kelurahan_saat_ini, setKelurahan_Saat_Ini] = useState("");
  const [kecamatan_saat_ini, setKecamatan_Saat_Ini] = useState("");
  const [kab_kota_saat_ini, setKab_Kota_Saat_Ini] = useState("");
  const [provinsi_saat_ini, setProvinsi_Saat_Ini] = useState("");
  const [kode_pos_saat_ini, setKode_Pos_Saat_Ini] = useState("");
  const [lama_tinggal, setLama_Tinggal] = useState("");
  const [alamat_surat_menyurat, setAlamat_Surat_Menyurat] = useState("");
  const [nomor_handphone1, setNomor_Handphone1] = useState("");
  const [nomor_handphone2, setNomor_Handphone2] = useState("");
  const [nomor_telp_rumah, setNomor_Telp_Rumah] = useState("");
  const [alamat_email, setAlamat_Email] = useState("");

  // ALAMAT KTP
  const [getIdProvinsi, setGetIdProvinsi] = useState("");
  const [getIdKota, setGetIdKota] = useState("");
  const [getIdKecamatan, setGetIdKecamatan] = useState("");

  // ALAMAT KTP
  const [pilihanProvinsi, setPilihanProvinsi] = useState([]);
  const [pilihanKotaKabupaten, setPilihanKotaKabupaten] = useState([]);
  const [pilihanKecamatan, setPilihanKecamatan] = useState([]);
  const [pilihanKelurahan, setPilihanKelurahan] = useState([]);

  //ALAMAT SaatIni
  const [getIdProvinsiSaatIni, setGetIdProvinsiSaatIni] = useState("");
  const [getIdKotaSaatIni, setGetIdKotaSaatIni] = useState("");
  const [getIdKecamatanSaatIni, setGetIdKecamatanSaatIni] = useState("");

  //ALAMAT SaatIni
  const [pilihanProvinsiSaatIni, setPilihanProvinsiSaatIni] = useState([]);
  const [pilihanKotaKabupatenSaatIni, setPilihanKotaKabupatenSaatIni] =
    useState([]);
  const [pilihanKecamatanSaatIni, setPilihanKecamatanSaatIni] = useState([]);
  const [pilihanKelurahanSaatIni, setPilihanKelurahanSaatIni] = useState([]);

  // Koneksi ke Database
  const postDataForm = () => {
    let getIdUser = localStorage.getItem("UserId");

    axios({
      url:
        "http://localhost:4000/api/data_diri_keluarga/add_data_diri_pemohon/" +
        getIdUser,
      method: "POST",
      data: {
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
        alamat_seuai_ktp,
        rt,
        rw,
        provinsi,
        kab_kota,
        kecamatan,
        kelurahan,
        kode_pos,
        alamat_saat_ini,
        rt_saat_ini,
        rw_saat_ini,
        kelurahan_saat_ini,
        kecamatan_saat_ini,
        kab_kota_saat_ini,
        provinsi_saat_ini,
        kode_pos_saat_ini,
        lama_tinggal,
        alamat_surat_menyurat,
        nomor_handphone1,
        nomor_handphone2,
        nomor_telp_rumah,
        alamat_email,
      },
    })
      .then((response) => {
        const status_kawin = status_kawin_pemohon;

        if (status_kawin === "Menikah") {
          setStepDataDiri(3.1);
        } else {
          setStepDataDiri(3.2);
        }
      })
      .catch((err) => { });
  };

  // Cek Alamat
  const cekDaerah = (idDaerah, tipeDaerah) => {
    const idOption = parseInt(idDaerah);

    if (tipeDaerah === "Provinsi") {
      pilihanProvinsi.forEach((value, index) => {
        if (idOption === value.id) {
          setProvinsi(value.nama);
        }
      });
    } else if (tipeDaerah === "Kab/Kota") {
      pilihanKotaKabupaten.forEach((value, index) => {
        if (idOption === value.id) {
          setKab_Kota(value.nama);
        }
      });
    } else if (tipeDaerah === "Kecamatan") {
      pilihanKecamatan.forEach((value, index) => {
        if (idOption === value.id) {
          setKecamatan(value.nama);
        }
      });
    } else if (tipeDaerah === "Kelurahan") {
      pilihanKelurahan.forEach((value, index) => {
        if (idOption === value.id) {
          setKelurahan(value.nama);
        }
      });
    } else if (tipeDaerah === "ProvinsiSaatIni") {
      pilihanProvinsiSaatIni.forEach((value, index) => {
        if (idOption === value.id) {
          setProvinsi_Saat_Ini(value.nama);
        }
      });
    } else if (tipeDaerah === "Kab/KotaSaatIni") {
      pilihanKotaKabupatenSaatIni.forEach((value, index) => {
        if (idOption === value.id) {
          setKab_Kota_Saat_Ini(value.nama);
        }
      });
    } else if (tipeDaerah === "KecamatanSaatIni") {
      pilihanKecamatanSaatIni.forEach((value, index) => {
        if (idOption === value.id) {
          setKecamatan_Saat_Ini(value.nama);
        }
      });
    } else if (tipeDaerah === "KelurahanSaatIni") {
      pilihanKelurahanSaatIni.forEach((value, index) => {
        if (idOption === value.id) {
          setKelurahan_Saat_Ini(value.nama);
        }
      });
    }
  };

  // ALAMAT KTP
  useEffect(() => {
    axios({
      url: "https://dev.farizdotid.com/api/daerahindonesia/provinsi",
      method: "GET",
    })
      .then((response) => {
        setPilihanProvinsi(response.data.provinsi);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const pilihProvinsi = (getIdProvinsi) => {
    axios({
      url: `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${getIdProvinsi}`,
      method: "GET",
    })
      .then((response) => {
        setPilihanKotaKabupaten(response.data.kota_kabupaten);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const pilihKotaKabupaten = (getIdKota) => {
    axios({
      url: `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${getIdKota}`,
      method: "GET",
    })
      .then((response) => {
        setPilihanKecamatan(response.data.kecamatan);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const pilihKecamatan = (getIdKecamatan) => {
    axios({
      url: `https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${getIdKecamatan}`,
      method: "GET",
    })
      .then((response) => {
        setPilihanKelurahan(response.data.kelurahan);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  //ALAMAT SaatIni
  useEffect(() => {
    axios({
      url: "https://dev.farizdotid.com/api/daerahindonesia/provinsi",
      method: "GET",
    })
      .then((response) => {
        setPilihanProvinsiSaatIni(response.data.provinsi);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const pilihProvinsiSaatIni = (getIdProvinsiSaatIni2) => {
    axios({
      url: `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${getIdProvinsiSaatIni2}`,
      method: "GET",
    })
      .then((response) => {
        setPilihanKotaKabupatenSaatIni(response.data.kota_kabupaten);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const pilihKotaKabupatenSaatIni = (getIdKotaSaatIni) => {
    axios({
      url: `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${getIdKotaSaatIni}`,
      method: "GET",
    })
      .then((response) => {
        setPilihanKecamatanSaatIni(response.data.kecamatan);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const pilihKecamatanSaatIni = (getIdKecamatanSaatIni) => {
    axios({
      url: `https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${getIdKecamatanSaatIni}`,
      method: "GET",
    })
      .then((response) => {
        setPilihanKelurahanSaatIni(response.data.kelurahan);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <>
      <div className="wrapper">
        <div type="form" className="basicForm">
          <h2 className="titleOne">Data Diri dan Keluarga</h2>

          <hr className="divider" />
          <h3 className="titleTwo">Data Diri Pemohon</h3>

          <label className="basicLabel">
            Nama Lengkap Tanpa Singkatan dan Tanpa Gelar
          </label>
          <input
            className="basicInput"
            placeholder="Masukkan Nama Lengkap Tanpa Singkatan dan Tanpa Gelar"
            onChange={(e) => setNama_Pemohon(e.target.value)}
          ></input>

          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Tempat Lahir</label>
                <input
                  className="basicInput"
                  type="text"
                  placeholder="Masukkan Tempat Lahir"
                  onChange={(e) => setTempat_Lahir_Pemohon(e.target.value)}
                />
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Tanggal Lahir</label>
                <div className="inputWithIconRightWrapper">
                  <input
                    className="inputWithIconRight"
                    type="date"
                    placeholder="0"
                    onChange={(e) => setTanggal_Lahir_Pemohon(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Nomor KTP</label>
                <input
                  className="basicInput"
                  type="number"
                  placeholder="Masukkan Nomor KTP"
                  onChange={(e) => setNik_Pemohon(e.target.value)}
                />
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Nomor NPWP</label>
                <input
                  className="basicInput"
                  type="text"
                  placeholder="Masukkan Nomor NPWP"
                  onChange={(e) => setNpwp_Pemohon(e.target.value)}
                />
              </div>
            </div>
          </div>

          <label className="basicLabel">Nama Gadis Ibu Kandung</label>
          <input
            className="basicInput"
            placeholder="Masukan Nama Gadis Ibu Kandung"
            onChange={(e) => setNama_Ibu_Kandung_Pemohon(e.target.value)}
          ></input>

          <label className="basicLabel" htmlFor="skema">
            Status Perkawinan
          </label>
          <div className="radioWrapper">
            <label className="radioContainerThird">
              <label className="radioLabel"> Belum Menikah </label>
              <input
                value="Belum Menikah"
                type="radio"
                name="radio"
                value="Belum Menikah"
                onChange={(e) => setStatus_Kawin_Pemohon(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
            <label className="radioContainerThird">
              <label className="radioLabel"> Menikah </label>
              <input
                value="Menikah"
                type="radio"
                name="radio"
                value="Menikah"
                onChange={(e) => setStatus_Kawin_Pemohon(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
            <label className="radioContainerThird">
              <label className="radioLabel"> Cerai </label>
              <input
                value="Cerai"
                type="radio"
                name="radio"
                value="Cerai"
                onChange={(e) => setStatus_Kawin_Pemohon(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
          </div>

          <label className="basicLabel">Jumlah Tanggungan Anak</label>
          <div className="inputWithIconRightWrapper">
            <input
              className="inputWithIconRight"
              type="number"
              placeholder="Masukkan Jumlah Tanggungan Anak"
              onChange={(e) => setJumlah_Tanggungan_Anak(e.target.value)}
            />
            <label className="iconRight">orang</label>
          </div>

          <label className="basicLabel">Pendidikan Terakhir</label>
          <select
            className="dropdownSelect"
            onChange={(e) => setPendidikan_Terakhir(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Pendidikan Terakhir
            </option>
            <option value="Strata 3 (S3)">Strata 3 (S3)</option>
            <option value="Strata 2 (S2)">Strata 2 (S2)</option>
            <option value="Strata 1 (S1) / Diploma 4 (D4)">
              Strata 1 (S1) / Diploma 4 (D4)
            </option>
            <option value="Diploma 3 (D3)">Diploma 3 (D3)</option>
            <option value="Diploma 2 (D2)">Diploma 2 (D2)</option>
            <option value="Diploma 1 (D1)">Diploma 1 (D1)</option>
            <option value="Sekolah Menengah Atas">Sekolah Menengah Atas</option>
          </select>

          <label className="basicLabel">Status Tempat Tinggal</label>
          <select
            className="dropdownSelect"
            onChange={(e) => setStatus_Tempat_Tinggal(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Status Tempat Tinggal
            </option>
            <option value="Milik Sendiri">Milik Sendiri</option>
            <option value="Keluarga">Keluarga</option>
            <option value="Kontrak/Kost">Kontrak/Kost</option>
            <option value="Lainnya">Lainnya</option>
          </select>

          {/* ++++++++++++++++++++++++++ ALAMAT SESUAI KTP ++++++++++++++++++++++++++ */}

          {/* Alamat Sesuai KTP */}
          <label className="basicLabel">Alamat Sesuai KTP</label>
          <input
            className="basicInput"
            placeholder="Masukan Alamat Sesuai KTP"
            onChange={(e) => setAlamat_Seuai_Ktp(e.target.value)}
          ></input>

          {/* RT RW Provinsi  */}
          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="halfQuarter">
                <label className="basicLabel">RT</label>
                <input
                  className="basicInput"
                  placeholder="001"
                  onChange={(e) => setRt(e.target.value)}
                ></input>
              </div>

              <div className="halfQuarter">
                <label className="basicLabel">RW</label>
                <input
                  className="basicInput"
                  placeholder="001"
                  onChange={(e) => setRw(e.target.value)}
                ></input>
              </div>
            </div>

            {/* Provinsi */}
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Provinsi</label>
                <select
                  className="dropdownSelectHalf"
                  onChange={(e) => {
                    setGetIdProvinsi(e.target.value);
                    cekDaerah(e.target.value, "Provinsi");
                  }}
                >
                  <option value="" disabled selected hidden>
                    Pilih Provinsi
                  </option>
                  {pilihanProvinsi.map((provinsi, key) => {
                    return (
                      <option key={key} value={provinsi.id}>
                        {provinsi.nama}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          {/* Kota/Kabupaten + Kecamatan */}
          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Kota/Kabupaten</label>
                <select
                  className="dropdownSelectHalf"
                  onClick={() => pilihProvinsi(getIdProvinsi)}
                  onChange={(e) => {
                    setGetIdKota(e.target.value);
                    cekDaerah(e.target.value, "Kab/Kota");
                  }}
                >
                  <option value="" disabled selected>
                    Pilih Kota/Kabupaten
                  </option>
                  {pilihanKotaKabupaten.map((kota, key) => {
                    return <option value={kota.id}>{kota.nama}</option>;
                  })}
                </select>
              </div>
            </div>

            {/* Kecamatan */}
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Kecamatan</label>
                <select
                  className="dropdownSelectHalf"
                  onClick={() => pilihKotaKabupaten(getIdKota)}
                  onChange={(e) => {
                    setGetIdKecamatan(e.target.value);
                    cekDaerah(e.target.value, "Kecamatan");
                  }}
                >
                  <option value="" disabled selected>
                    Pilih Kecamatan
                  </option>
                  {pilihanKecamatan.map((kecamatan, key) => {
                    return (
                      <option value={kecamatan.id}>{kecamatan.nama}</option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          {/* Kelurahan + Kode Pos */}
          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Kelurahan</label>
                <select
                  className="dropdownSelectHalf"
                  onClick={() => pilihKecamatan(getIdKecamatan)}
                  onChange={(e) => {
                    cekDaerah(e.target.value, "Kelurahan");
                  }}
                >
                  <option value="" disabled selected>
                    Pilih Kelurahan
                  </option>
                  {pilihanKelurahan.map((kelurahan, key) => {
                    return (
                      <option value={kelurahan.id}>{kelurahan.nama}</option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Kode Pos</label>
                <input
                  className="basicInput"
                  placeholder="11111"
                  onChange={(e) => setKode_Pos(e.target.value)}
                ></input>
              </div>
            </div>
          </div>

          {/* ++++++++++++++++++++++++++ ALAMAT SAAT INI ++++++++++++++++++++++++++ */}

          {/* Alamat Saat Ini */}
          <label className="basicLabel">
            Alamat Tinggal Saat Ini (Opsional)
          </label>
          <input
            className="basicInput"
            placeholder="Masukan Alamat Tinggal Saat Ini"
            onChange={(e) => setAlamat_Saat_Ini(e.target.value)}
          ></input>

          {/* RT RW Provinsi Saat Ini */}
          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="halfQuarter">
                <label className="basicLabel">RT</label>
                <input
                  className="basicInput"
                  placeholder="001"
                  onChange={(e) => setRt_Saat_Ini(e.target.value)}
                ></input>
              </div>

              <div className="halfQuarter">
                <label className="basicLabel">RW</label>
                <input
                  className="basicInput"
                  placeholder="001"
                  onChange={(e) => setRw_Saat_Ini(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Provinsi</label>
                <select
                  className="dropdownSelectHalf"
                  onChange={(e) => {
                    setGetIdProvinsiSaatIni(e.target.value);
                    cekDaerah(e.target.value, "ProvinsiSaatIni");
                  }}
                >
                  <option value="" disabled selected hidden>
                    Pilih Provinsi
                  </option>
                  {pilihanProvinsiSaatIni.map((provinsiSaatIni, key) => {
                    return (
                      <option value={provinsiSaatIni.id}>
                        {provinsiSaatIni.nama}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          {/* Kota Kabupaten Kecamatan */}
          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Kota/Kabupaten</label>
                <select
                  className="dropdownSelectHalf"
                  onClick={() => pilihProvinsiSaatIni(getIdProvinsiSaatIni)}
                  onChange={(e) => {
                    setGetIdKotaSaatIni(e.target.value);
                    cekDaerah(e.target.value, "Kab/KotaSaatIni");
                  }}
                >
                  <option value="" disabled selected>
                    Pilih Kota/Kabupaten
                  </option>
                  {pilihanKotaKabupatenSaatIni.map((kotaSaatIni, key) => {
                    return (
                      <option value={kotaSaatIni.id}>{kotaSaatIni.nama}</option>
                    );
                  })}
                </select>
              </div>
            </div>

            {/* Kecamatan */}
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Kecamatan</label>
                <select
                  className="dropdownSelectHalf"
                  onClick={() => pilihKotaKabupatenSaatIni(getIdKotaSaatIni)}
                  onChange={(e) => {
                    setGetIdKecamatanSaatIni(e.target.value);
                    cekDaerah(e.target.value, "KecamatanSaatIni");
                  }}
                >
                  <option value="" disabled selected>
                    Pilih Kecamatan
                  </option>
                  {pilihanKecamatanSaatIni.map((kecamatanSaatIni, key) => {
                    return (
                      <option value={kecamatanSaatIni.id}>
                        {kecamatanSaatIni.nama}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          {/* Kelurahan Kode Pos */}
          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Kelurahan</label>
                <select
                  className="dropdownSelectHalf"
                  onClick={() => pilihKecamatanSaatIni(getIdKecamatanSaatIni)}
                  onChange={(e) => {
                    cekDaerah(e.target.value, "KelurahanSaatIni");
                  }}
                >
                  <option value="" disabled selected>
                    Pilih Kelurahan
                  </option>
                  {pilihanKelurahanSaatIni.map((kelurahanSaatIni, key) => {
                    return (
                      <option value={kelurahanSaatIni.id}>
                        {kelurahanSaatIni.nama}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Kode Pos</label>
                <input
                  className="basicInput"
                  placeholder="11111"
                  onChange={(e) => setKode_Pos_Saat_Ini(e.target.value)}
                ></input>
              </div>
            </div>
          </div>

          <label className="basicLabel">Lama Tinggal</label>
          <div className="inputWithIconRightWrapper">
            <input
              className="inputWithIconRight"
              type="number"
              placeholder="Masukkan Lama Tinggal"
              onChange={(e) => setLama_Tinggal(e.target.value)}
            />
            <label className="iconRight">tahun</label>
          </div>

          <label className="basicLabel">Alamat Surat Menyurat</label>
          <select
            className="dropdownSelect"
            onChange={(e) => setAlamat_Surat_Menyurat(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Alamat Surat Menyurat
            </option>
            <option value="Alamat KTP">Alamat KTP</option>
            <option value="Alamat Saat Ini">Alamat Saat Ini</option>
          </select>

          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Nomor Handphone</label>
                <div className="inputWithIconLeftWrapper">
                  <input
                    className="inputWithIconLeft"
                    type="number"
                    min="1"
                    placeholder="81234567890"
                    onChange={(e) => setNomor_Handphone1(e.target.value)}
                  />
                  <label className="iconLeft">+62</label>
                </div>
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Nomor Handphone (Opsional)</label>
                <div className="inputWithIconLeftWrapper">
                  <input
                    className="inputWithIconLeft"
                    type="number"
                    min="1"
                    placeholder="81234567890"
                    onChange={(e) => setNomor_Handphone2(e.target.value)}
                  />
                  <label className="iconLeft">+62</label>
                </div>
              </div>
            </div>
          </div>

          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">
                  Nomor Telepon Rumah (Opsional)
                </label>
                <div className="inputWithIconLeftWrapper">
                  <input
                    className="inputWithIconLeft"
                    type="number"
                    min="1"
                    placeholder="81234567890"
                    onChange={(e) => setNomor_Telp_Rumah(e.target.value)}
                  />
                  <label className="iconLeft">+62</label>
                </div>
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Alamat Email</label>
                <input
                  className="basicInput"
                  type="email"
                  placeholder="Masukkan Alamat Email"
                  onChange={(e) => setAlamat_Email(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="firstPageButtonsWrapper">
            <div className="">
              <input
                className="transparentButton"
                type="submit"
                value="Simpan Formulir"
              ></input>
            </div>
            <div className="sliceForSecondPageButton">
              <input
                className="secondaryButton"
                type="submit"
                value="Kembali"
                onClick={() => setStepDataDiri(2)}
              ></input>
              <input
                className="primaryButton"
                type="submit"
                value="Lanjut"
                // onClick={() => setStepDataDiri(3.1)}
                onClick={() => postDataForm()}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
