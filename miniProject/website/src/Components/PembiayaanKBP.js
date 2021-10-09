import React, { useState, useEffect, useContext } from "react";
import { multiStepContext } from "../StepContext";
import "../Styles/Step.css";
import "../Styles/style.css";

import axios from "axios";

export default function PembiayaanKBP() {
  const { setStepDataDiri, userData, setUserData } =
    useContext(multiStepContext);

  const [jenis_penjual_kendaraan, setJenis_penjual_kendaraan] = useState("");
  const [nama_penjual_kendaraan, setNama_penjual_kendaraan] = useState("");
  const [nilai_spr_kendaraan, setNilai_spr_kendaraan] = useState("");
  const [no_telepon_penjual_kendaraan, setNo_telepon_penjual_kendaraan] =
    useState("");
  const [uang_muka_kendaraan, setUang_muka_kendaraan] = useState("");

  const postDataForm = () => {
    let getIdUser = localStorage.getItem("UserId");

    axios({
      url:
        "http://localhost:4000/api/data_pengajuan/add_form_data_pengajuan/" +
        getIdUser,
      method: "POST",
      data: {
        jenis_penjual_kendaraan,
        nama_penjual_kendaraan,
        nilai_spr_kendaraan,
        no_telepon_penjual_kendaraan,
        uang_muka_kendaraan,
      },
    })
      .then((response) => {
        setStepDataDiri(2);
      })
      .catch((err) => { });
  };

  return (
    <>
      <div className="wrapper">
        <div type="form" className="basicForm">
          <h2 className="titleOne">Data Pengajuan</h2>
          <hr className="divider" />
          <h3 className="titleTwo">Pembiayaan Konsumsi Beragun Properti</h3>

          <label className="basicLabel" for="fasilitasBank">
            Jenis Penjual
          </label>
          <select
            className="dropdownSelect"
            placeholder="Pilih Jenis Penjual"
            onChange={(e) => setJenis_penjual_kendaraan(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Jenis Penjual
            </option>
            <option>Developer Rekanan</option>
            <option>Developer Non Rekanan</option>
            <option>Non Developer</option>
          </select>

          <label className="basicLabel">Nama Penjual</label>
          <input
            className="basicInput"
            placeholder="Masukan Nama Penjual"
            onChange={(e) => setNama_penjual_kendaraan(e.target.value)}
          ></input>

          <label className="basicLabel">
            Harga Penawaran Penjual atau Nilai SPR
          </label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="500.000.000"
              onChange={(e) => setNilai_spr_kendaraan(e.target.value)}
            />
            <label className="iconLeft">Rp</label>
          </div>

          <label className="basicLabel">Nomor Telepon Penjual</label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="81234567890"
              onChange={(e) => setNo_telepon_penjual_kendaraan(e.target.value)}
            />
            <label className="iconLeft">+62</label>
          </div>

          <label className="basicLabel">Uang Muka</label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="500.000.000"
              onChange={(e) => setUang_muka_kendaraan(e.target.value)}
            />
            <label className="iconLeft">Rp</label>
          </div>

          <div className="firstPageButtonsWrapper">
            <input
              className="transparentButton"
              type="submit"
              value="Simpan Formulir"
            ></input>
            <div className="sliceForSecondPageButton">
              <input
                className="secondaryButton"
                type="submit"
                value="Kembali"
                onClick={() => setStepDataDiri(1)}
              ></input>
              <input
                className="primaryButton"
                type="submit"
                value="Lanjut"
                // onClick={() => setStepDataDiri(objek)}
                onClick={() => postDataForm()}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
