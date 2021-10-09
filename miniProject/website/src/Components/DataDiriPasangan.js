import React, { useState, useEffect, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../StepContext";
import "../Styles/Step.css";
import "../Styles/style.css";

import axios from "axios";

export default function DataDiriPasangan() {
  const { setStepDataDiri, userData, setUserData } =
    useContext(multiStepContext);

  const [nama_pasangan, setNama_Pasangan] = useState("");
  const [tempat_lahir_pasangan, setTempat_Lahir_Pasangan] = useState("");
  const [tanggal_lahir_pasangan, setTanggal_Lahir_Pasangan] = useState("");
  const [nik_pasangan, setNik_Pasangan] = useState("");
  const [npwp_pasangan, setNpwp_Pasangan] = useState("");
  const [pekerjaan_pasangan, setPekerjaan_Pasangan] = useState("");
  const [no_telepon_pasangan, setNo_Telepon_Pasangan] = useState("");

  const postDataForm = () => {
    let getIdUser = localStorage.getItem("UserId");

    const localhost = "localhost";

    axios({
      url:
        "http://" +
        localhost +
        ":4000/api/data_diri_keluarga/add_data_diri_pasangan/" +
        getIdUser,
      method: "POST",
      data: {
        nama_pasangan,
        tempat_lahir_pasangan,
        tanggal_lahir_pasangan,
        nik_pasangan,
        npwp_pasangan,
        pekerjaan_pasangan,
        no_telepon_pasangan,
      },
    })
      .then((response) => {
        console.log(response);
        setStepDataDiri(3.2); // Data Diri Kerabat
      })
      .catch((err) => {});
  };

  return (
    <>
      <div className="wrapper">
        <div type="form" className="basicForm">
          <h2 className="titleOne">Data Diri dan Keluarga</h2>

          <hr className="divider" />
          <h3 className="titleTwo">Data Diri Pasangan</h3>

          <label className="basicLabel">Nama Pasangan</label>
          <input
            className="basicInput"
            placeholder="Masukkan Nama Lengkap Tanpa Singkatan dan Tanpa Gelar"
            onChange={(e) => setNama_Pasangan(e.target.value)}
          ></input>

          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Tempat Lahir</label>
                <input
                  className="basicInput"
                  type="text"
                  placeholder="Masukkan Tempat Lahir"
                  onChange={(e) => setTempat_Lahir_Pasangan(e.target.value)}
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
                    onChange={(e) => setTanggal_Lahir_Pasangan(e.target.value)}
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
                  onChange={(e) => setNik_Pasangan(e.target.value)}
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
                  onChange={(e) => setNpwp_Pasangan(e.target.value)}
                />
              </div>
            </div>
          </div>

          <label className="basicLabel">Pekerjaan Pasangan</label>
          <input
            className="basicInput"
            placeholder="Masukan Pekerjaan Pasangan"
            onChange={(e) => setPekerjaan_Pasangan(e.target.value)}
          ></input>

          <label className="basicLabel">Nomor Handphone Pasangan</label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="81234567890"
              onChange={(e) => setNo_Telepon_Pasangan(e.target.value)}
            />
            <label className="iconLeft">+62</label>
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
                onClick={() => setStepDataDiri(3)}
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
