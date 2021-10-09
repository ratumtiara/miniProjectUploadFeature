import React, { useState, useEffect, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../StepContext";
import "../Styles/Step.css";
import "../Styles/style.css";

import axios from "axios";

export default function DataDiriKerabat() {
  const { setStepDataDiri, userData, setUserData } =
    useContext(multiStepContext);

  const [nama_kerabat, setNama_Kerabat] = useState("");
  const [alamat_kerabat, setAlamat_Kerabat] = useState("");
  const [rt, setRt] = useState("");
  const [rw, setRw] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kab_kota, setKab_Kota] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kode_pos, setKode_Pos] = useState("");
  const [no_telepon_rumah, setNo_Telepon_Rumah] = useState("");
  const [no_handphone, setNo_Handphone] = useState("");
  const [hubungan_nasabah, setHubungan_Nasabah] = useState("");

  // ALAMAT KTP
  const [getIdProvinsi, setGetIdProvinsi] = useState("");
  const [getIdKota, setGetIdKota] = useState("");
  const [getIdKecamatan, setGetIdKecamatan] = useState("");

  // ALAMAT KTP
  const [pilihanProvinsi, setPilihanProvinsi] = useState([]);
  const [pilihanKotaKabupaten, setPilihanKotaKabupaten] = useState([]);
  const [pilihanKecamatan, setPilihanKecamatan] = useState([]);
  const [pilihanKelurahan, setPilihanKelurahan] = useState([]);

  // KONEKSI KE DATABASE
  const postDataForm = () => {
    let getIdUser = localStorage.getItem("UserId");

    axios({
      url:
        "http://localhost:4000/api/data_diri_keluarga/add_data_diri_kerabat/" +
        getIdUser,
      method: "POST",
      data: {
        nama_kerabat,
        alamat_kerabat,
        rt,
        rw,
        kelurahan,
        kecamatan,
        kab_kota,
        provinsi,
        kode_pos,
        no_telepon_rumah,
        no_handphone,
        hubungan_nasabah,
      },
    })
      .then((response) => {
        setStepDataDiri(4);
      })
      .catch((err) => {});
  };

  // CEK ALAMAT
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

  return (
    <>
      <div className="wrapper">
        <div type="form" className="basicForm">
          <h2 className="titleOne">Data Diri dan Keluarga</h2>

          <hr className="divider" />
          <h3 className="titleTwo">Kerabat Yang Tidak Tinggal Serumah</h3>

          <label className="basicLabel">Nama Kerabat</label>
          <input
            className="basicInput"
            placeholder="Masukkan Nama Kerabat"
            onChange={(e) => setNama_Kerabat(e.target.value)}
          ></input>

          <label className="basicLabel">Alamat Tinggal Kerabat Saat Ini</label>
          <input
            className="basicInput"
            placeholder="Masukkan Alamat Tinggal Kerabat"
            onChange={(e) => setAlamat_Kerabat(e.target.value)}
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
                  placeholder="17510"
                  onChange={(e) => setKode_Pos(e.target.value)}
                ></input>
              </div>
            </div>
          </div>

          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">
                  Nomor Telepon Rumah (Optional)
                </label>
                <input
                  className="basicInput"
                  type="number"
                  min="0"
                  placeholder="Masukkan Nomor Telepon"
                  onChange={(e) => setNo_Telepon_Rumah(e.target.value)}
                />
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Nomor Handphone</label>
                <div className="inputWithIconLeftWrapper">
                  <input
                    className="inputWithIconLeft"
                    type="number"
                    min="1"
                    placeholder="81234567890"
                    onChange={(e) => setNo_Handphone(e.target.value)}
                  />
                  <label className="iconLeft">+62</label>
                </div>
              </div>
            </div>
          </div>

          <label className="basicLabel">Hubungan Dengan Nasabah</label>
          <select
            className="dropdownSelect"
            onChange={(e) => setHubungan_Nasabah(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Hubungan Dengan Nasabah
            </option>
            <option value="Orang Tua">Orang Tua</option>
            <option value="Saudara Kandung">Saudara Kandung</option>
            <option value="Anak Kandung">Anak Kandung</option>
            <option value="Lainnya">Lainnya</option>
          </select>

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
                onClick={() => setStepDataDiri(3.1)}
              ></input>
              <input
                className="primaryButton"
                type="submit"
                value="Lanjut"
                // onClick={() => setStepDataDiri(4)}
                onClick={() => postDataForm()}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
