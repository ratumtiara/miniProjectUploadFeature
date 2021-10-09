import React, { useState, useEffect, useContext } from "react";
import { multiStepContext } from "../StepContext";
import "../Styles/Step.css";
import "../Styles/style.css";

import axios from "axios";

export default function TakeOver() {
  const { setStepDataDiri, userData, setUserData } =
    useContext(multiStepContext);

  const [jenis_bank_asal, setJenis_bank_asal] = useState("");
  const [nama_bank, setNama_bank] = useState("");
  const [peruntukan_fasilitas_sebelumnya, setPeruntukan_fasilitas_sebelumnya] =
    useState("");
  const [akad_fasilitas_sebelumnya, setAkad_fasilitas_sebelumnya] =
    useState("");
  const [nilai_pelunasan_take_over, setNilai_pelunasan_take_over] =
    useState("");
  const [plafond_top_up, setPlafond_top_up] = useState("");

  //   const buatBalik = (e) => {
  //     setWaktu_Pembiayaan(e.target.value);
  //     setUserData({ ...userData, wkt_pembiayaan: e.target.value });
  //   };

  const postDataForm = () => {
    let getIdUser = localStorage.getItem("UserId");

    axios({
      url:
        "http://localhost:4000/api/fasilitas_pembiayaan/add_form_data_pembiayaan_takeover/" +
        getIdUser,
      method: "POST",
      data: {
        jenis_bank_asal,
        nama_bank,
        peruntukan_fasilitas_sebelumnya,
        akad_fasilitas_sebelumnya,
        nilai_pelunasan_take_over,
        plafond_top_up,
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
          <h3 className="titleTwo">
            Pembiayaan Take Over Murni atau Take Over + Top Up
          </h3>

          <label className="basicLabel" htmlFor="skema">
            Jenis Bank Asal
          </label>
          <div className="radioWrapper">
            <label className="radioContainer">
              <label className="radioLabel"> Bank Syariah </label>
              <input
                value="bankSyariah"
                type="radio"
                name="radio"
                onChange={(e) => setJenis_bank_asal(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>

            <label className="radioContainer">
              <label className="radioLabel"> Bank Konvensional </label>
              <input
                value="bankKonvensional"
                type="radio"
                name="radio"
                onChange={(e) => setJenis_bank_asal(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
          </div>

          <label className="basicLabel">Nama Bank</label>
          <input
            className="basicInput"
            placeholder="Masukan Nama Bank"
            onChange={(e) => setNama_bank(e.target.value)}
          ></input>

          <label className="basicLabel" for="fasilitasBank">
            Peruntukan Fasilitas di Bank Sebelumnya
          </label>
          <select
            className="dropdownSelect"
            placeholder="Pilih Peruntukan Fasilitas di Bank Sebelumnya"
            onChange={(e) => setPeruntukan_fasilitas_sebelumnya(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Peruntukan Fasilitas di Bank Sebelumnya
            </option>
            <option>Pembelian Properti</option>
            <option>Renovasi atau Pembangunan</option>
            <option>Refinancing / Konsumsi Beragun Properti</option>
          </select>

          <label className="basicLabel" for="akadFasilitas">
            Akad Fasilitas di Bank Sebelumnya
          </label>
          <select
            className="dropdownSelect"
            placeholder="Pilih Akad Fasilitas di Bank Sebelumnya"
            onChange={(e) => setAkad_fasilitas_sebelumnya(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Akad Fasilitas di Bank Sebelumnya
            </option>
            <option>Murabahah</option>
            <option>MMQ</option>
            <option>IMBT</option>
            <option>Lainnya</option>
          </select>

          <label className="basicLabel">
            Perkiraan Nilai Pelunasan Take Over
          </label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="500.000.000"
              onChange={(e) => setNilai_pelunasan_take_over(e.target.value)}
            />
            <label className="iconLeft">Rp</label>
          </div>

          <label className="basicLabel">Plafond Top Up</label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="500.000.000"
              onChange={(e) => setPlafond_top_up(e.target.value)}
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
