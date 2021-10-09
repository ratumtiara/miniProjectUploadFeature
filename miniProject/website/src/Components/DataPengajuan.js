import React, { useState, useEffect, useContext } from "react";
import { multiStepContext } from "../StepContext";
import "../Styles/Step.css";
import "../Styles/style.css";

import axios from "axios";

export default function DataPengajuan() {
  const { setStepDataDiri, userData, setUserData } =
    useContext(multiStepContext);

  const [skema_pengajuan, setSkema_Pengajuan] = useState("");
  const [peruntukan_pembiayaan, setPeruntukan_Pembiayaan] = useState("");
  const [program, setProgram] = useState("");
  const [objek, setObjek] = useState("");
  const [akad, setAkad] = useState("");
  const [total_plafond, setTotal_Plafond] = useState("");
  const [waktu_pembiayaan, setWaktu_Pembiayaan] = useState("");

  const buatBalik = (e) => {
    setWaktu_Pembiayaan(e.target.value);
    setUserData({ ...userData, wkt_pembiayaan: e.target.value });
  };

  const postDataForm = () => {
    let getIdUser = localStorage.getItem("UserId");

    const localhost = "localhost";

    axios({
      url:
        "http://" +
        localhost +
        ":4000/api/fasilitas_pembiayaan/add_form_fasilitas_pembiayaan/" +
        getIdUser,
      method: "POST",
      data: {
        skema_pengajuan,
        peruntukan_pembiayaan,
        program,
        objek,
        akad,
        total_plafond,
        waktu_pembiayaan,
      },
    })
      .then((response) => {
        const status_peruntukan = peruntukan_pembiayaan;

        if (status_peruntukan === "Properti") {
          setStepDataDiri(1.1);
        } else if (
          (status_peruntukan === "Top Up", "Take Over", "Take Over + Top Up")
        ) {
          setStepDataDiri(1.2);
        } else {
          setStepDataDiri(1.3);
        }
      })
      .catch((err) => {});
  };

  return (
    <>
      <div className="wrapper">
        <div type="form" className="basicForm">
          <h2 className="titleOne">Data Pengajuan</h2>
          <hr className="divider" />
          <h3 className="titleTwo">Fasilitas Pembiayaan</h3>

          <label className="basicLabel" htmlFor="skema">
            Skema Pengajuan
          </label>
          <div className="radioWrapper">
            <label className="radioContainer">
              <label className="radioLabel"> Penghasilan Tunggal </label>
              <input
                value="Penghasilan Tunggal"
                type="radio"
                name="radio"
                onChange={(e) => setSkema_Pengajuan(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>

            <label className="radioContainer">
              <label className="radioLabel"> Penghasilan Gabungan </label>
              <input
                value="Penghasilan Gabungan"
                type="radio"
                name="radio"
                onChange={(e) => setSkema_Pengajuan(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
          </div>

          <div></div>

          <label className="basicLabel" for="peruntukan_pembiayaan">
            Peruntukan Pembiayaan
          </label>
          <select
            className="dropdownSelect"
            placeholder="Pilih Peruntukan Pembiayaan"
            for="Objek"
            onChange={(e) => setPeruntukan_Pembiayaan(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Peruntukan Pembiayaan
            </option>
            <option value="Properti">Pembelian Properti</option>
            <option value="Top Up">Top Up</option>
            <option value="Take Over">Take Over</option>
            <option value="Take Over + Top Up">Take Over + Top Up</option>
            <option value="Pembiayaan Konsumsi Beragun Properti">
              Pembiayaan Konsumsi Beragun Properti
            </option>
          </select>

          <label className="basicLabel" for="Program">
            Program
          </label>
          <select
            className="dropdownSelect"
            placeholder="Pilih Program"
            onChange={(e) => setProgram(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Program
            </option>
            <option> Fix & Fix</option>
            <option>Angsuran Super Ringan</option>
            <option>Special MMQ</option>
          </select>

          <label className="basicLabel" for="Objek">
            Objek Yang Dibiayai
          </label>
          <select
            className="dropdownSelect"
            name="Objek"
            onChange={(e) => setObjek(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Objek Yang Dibiayai
            </option>
            <option>Properti</option>
            <option>Renovasi Pembangunan</option>
            <option>Kendaraan</option>
            <option>Furniture</option>
            <option>Jasa Konsumtif</option>
            <option>Lainnya</option>
          </select>

          <label className="basicLabel" for="Akad">
            Akad Fasilitas Yang Diajukan
          </label>
          <select
            className="dropdownSelect"
            name="Akad"
            onChange={(e) => setAkad(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Akad Fasilitas Yang Diajukan
            </option>
            <option>Murabahah</option>
            <option>MMQ (Musyarakah Mutanaqishah</option>
            <option>Isthisna</option>
            <option>Lainnya</option>
          </select>

          <label className="basicLabel">Total Plafond Yang Diajukan</label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="500.000.000"
              onChange={(e) => setTotal_Plafond(e.target.value)}
            />
            <label className="iconLeft">Rp</label>
          </div>

          <label className="basicLabel">Waktu Pembiayaan</label>
          <div className="inputWithIconRightWrapper">
            <input
              className="inputWithIconRight"
              type="number"
              onChange={(e) => setWaktu_Pembiayaan(e.target.value)}
              // value={userData["wkt_pembiayaan"]}
              // onChange={(e) => buatBalik(e)}
              placeholder="Masukkan Dalam Bentuk Angka"
            />
            <label className="iconRight">bulan</label>
          </div>

          <div className="firstPageButtonsWrapper">
            <input
              className="transparentButton"
              type="submit"
              value="Simpan Formulir"
            ></input>

            <input
              className="primaryButton"
              type="submit"
              value="Lanjut"
              onClick={() => postDataForm()}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}
