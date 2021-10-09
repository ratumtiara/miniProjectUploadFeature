import React, { useContext, useState } from "react";
import { multiStepContext } from "../StepContext";
import "../Styles/Step.css";
import axios from "axios";
import swal from "sweetalert";

export default function DataPembiayaan() {
  const { setStepDataDiri, userData, setPage } = useContext(multiStepContext);

  const [pembiayaan_bank_lain, setPembiayaan_Bank_Lain] = useState("");
  const [jumlah_pembiayaan, setJumlah_Pembiayaan] = useState("");
  const [angsuran, setAngsuran] = useState("");
  const [jatuh_tempo, setJatuh_Tempo] = useState("");
  const [jenis_pembiayaan, setJenis_Pembiayaan] = useState("");
  const [nama_kreditur, setNama_Kreditur] = useState("");

  const postDataForm = () => {
    let getIdUser = localStorage.getItem("UserId");

    const localhost = "localhost";

    axios({
      url:
        "http://" +
        localhost +
        ":4000/api/data_pembiayaan/add_form_data_pembiayaan/" +
        getIdUser,

      method: "POST",
      data: {
        pembiayaan_bank_lain,
        jumlah_pembiayaan,
        angsuran,
        jatuh_tempo,
        jenis_pembiayaan,
        nama_kreditur,
      },
    })
      .then((response) => {
        alert();
      })
      .catch((err) => {});
  };

  function alert() {
    swal(
      "Apakah Anda yakin? Setelah ini, pastikan nama file yang ingin di unggah sesuai. ex: KTP.jpg",
      {
        buttons: {
          cancel: "No",
          catch: {
            text: "Okay",
            value: "yash",
          },
        },
      }
    ).then((value) => {
      switch (value) {
        case "yash":
          swal(
            "Berhasil",
            "Silahkan untuk melanjuti pengisian form",
            "success"
          );
          setPage(2);
          break;

        default:
          swal("File Anda Tersimpan Oleh Sistem");
      }
    });
  }

  return (
    <>
      <div className="wrapper">
        <div type="form" className="basicForm">
          <h2 className="titleOne">Data Pembiayaan Saat Ini</h2>

          <label className="basicLabel" htmlFor="skema">
            Memiliki Pembiayaan di Bank / Lembaga Keuangan Lain
          </label>
          <div className="radioWrapper">
            <label className="radioContainer">
              <label className="radioLabel"> Ya </label>
              <input
                value="Ya"
                type="radio"
                name="radio"
                onChange={(e) => setPembiayaan_Bank_Lain(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
            <label className="radioContainer">
              <label className="radioLabel"> Tidak </label>
              <input
                value="Tidak"
                type="radio"
                name="radio"
                onChange={(e) => setPembiayaan_Bank_Lain(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
          </div>

          <label className="basicLabel">Jumlah Pembiayaan</label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="500.000.000"
              onChange={(e) => setJumlah_Pembiayaan(e.target.value)}
            />
            <label className="iconLeft">Rp</label>
          </div>

          <label className="basicLabel">Angsuran</label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="500.000.000"
              onChange={(e) => setAngsuran(e.target.value)}
            />
            <label className="iconLeft">Rp</label>
          </div>

          <label className="basicLabel">Jatuh Tempo</label>
          <div className="inputWithIconRightWrapper">
            <input
              className="inputWithIconRight"
              type="date"
              placeholder="0"
              onChange={(e) => setJatuh_Tempo(e.target.value)}
            />
          </div>

          <label className="basicLabel">Jenis Pembiayaan</label>
          <input
            className="basicInput"
            placeholder="Masukan Jenis Pembiayaan"
            onChange={(e) => setJenis_Pembiayaan(e.target.value)}
          ></input>

          <label className="basicLabel">Nama Kreditur</label>
          <input
            className="basicInput"
            placeholder="Masukan Nama Kreditur"
            onChange={(e) => setNama_Kreditur(e.target.value)}
          ></input>

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
                onClick={() => setStepDataDiri(4.1)}
              ></input>
              <input
                className="primaryButton"
                type="submit"
                value="Submit"
                onClick={() => postDataForm()}
                // onClick={() => alert()}
                // onClick={() => setPage(2)}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
