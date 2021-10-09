import React, { useState, useEffect, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../StepContext";
import "../Styles/Step.css";
import "../Styles/style.css";

import axios from "axios";


export default function RingkasanPemohon() {
  const { setStepDataDiri, setPage } = useContext(multiStepContext);

  const [namaPemohon, setnamaPemohon] = useState("");
  const [nomorHanphone, setNomorHanphone] = useState("");
  const [peruntukanPembiayaan, setPeruntukanPembiayaan] = useState("");
  const [totalPlafond, setTotalPlafond] = useState("");
  const [waktuPembiayaan, setWaktuPembiayaan] = useState("");

  let getIdUser = localStorage.getItem("UserId");

  useEffect(() => {
    axios({
      url: "http://localhost:4000/api/user/getOne/" + getIdUser,
      method: "GET",
    })
      .then((response) => {
        setnamaPemohon(response.data.result.GEN_DATA_DIRI_PEMOHON.nama_pemohon);
        setNomorHanphone(
          response.data.result.GEN_DATA_DIRI_PEMOHON.nomor_handphone1
        );
        setPeruntukanPembiayaan(
          response.data.result.GEN_FASILITAS_PEMBIAYAAN.peruntukan_pembiayaan
        );
        setTotalPlafond(
          response.data.result.GEN_FASILITAS_PEMBIAYAAN.total_plafond
        );
        setWaktuPembiayaan(
          response.data.result.GEN_FASILITAS_PEMBIAYAAN.waktu_pembiayaan
        );
      })
      .catch((err) => { });
  }, []);

  return (
    <>
      <div className="wrapper">
        <div type="form" className="basicForm">
          <h2 className="titleOne">Ringkasan</h2>
          <p className="forKetRingkasan">
            Mohon lakukan pengecekan sebelum menekan tombol “Ajukan KPR” untuk
            pengajuan kredit kepemilikan properti Anda secara seksama. Informasi
            yang telah Anda isi akan kami gunakan untuk menindak lanjuti
            pengajuan Anda.
          </p>
          <hr className="divider" />
          <h3 className="titleTwo">Ringkasan Pemohon</h3>

          <label className="basicLabel">Nama Pemohon</label>
          <input
            className="basicInput"
            style={{ backgroundColor: "#EDEDED", cursor: "unset" }}
            readOnly
            value={namaPemohon}
          ></input>

          <label className="basicLabel">Nomor Telepon</label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              style={{ backgroundColor: "#EDEDED", cursor: "unset" }}
              type="number"
              min="1"
              value={nomorHanphone}
              readOnly
            />
            <label className="iconLeft" style={{ backgroundColor: "#E3E3E3" }}>
              +62
            </label>
          </div>

          <label className="basicLabel">Tujuan Kredit</label>
          <input
            className="basicInput"
            style={{ backgroundColor: "#EDEDED", cursor: "unset" }}
            readOnly
            value={peruntukanPembiayaan}
          ></input>

          <label className="basicLabel">Jumlah Pinjaman</label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              style={{ backgroundColor: "#EDEDED", cursor: "unset" }}
              type="number"
              min="1"
              value={totalPlafond}
              readOnly
            />
            <label
              className="iconLeft"
              style={{ backgroundColor: "#E3E3E3", cursor: "unset" }}
            >
              Rp
            </label>
          </div>

          <label className="basicLabel">Waktu Pembiayaan</label>
          <div className="inputWithIconRightWrapper">
            <input
              className="inputWithIconRight"
              style={{ backgroundColor: "#EDEDED", cursor: "unset" }}
              type="number"
              readOnly
              value={waktuPembiayaan}
            />
            <label
              className="iconRight"
              style={{ backgroundColor: "#E3E3E3", cursor: "unset" }}
            >
              Bulan
            </label>
          </div>

          <h3 className="titleTwo">Dokumen Pemohon</h3>

          <div className="fileUploadRingkasanWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">KTP</label>
            </div>

            {/* <label className="uploadButton" for="ktp">
              Pilih
            </label> */}
            <input type="file" id="ktp" style={{ display: "none" }}></input>
          </div>

          <div className="fileUploadRingkasanWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">Kartu Keluarga</label>
            </div>

            {/* <label className="uploadButton" for="ktp">
              Pilih
            </label>
            <input type="file" id="ktp" style={{ display: "none" }}></input> */}
          </div>
          <div className="fileUploadRingkasanWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">Surat Nikah</label>
            </div>

            {/* <label className="uploadButton" for="ktp">
              Pilih
            </label>
            <input type="file" id="ktp" style={{ display: "none" }}></input> */}
          </div>
          <div className="fileUploadRingkasanWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">NPWP</label>
            </div>

            {/* <label className="uploadButton" for="ktp">
              Pilih
            </label>
            <input type="file" id="ktp" style={{ display: "none" }}></input> */}
          </div>
          <div className="fileUploadRingkasanWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">Slip Gaji</label>
            </div>

            {/* <label className="uploadButton" for="ktp">
              Pilih
            </label>
            <input type="file" id="ktp" style={{ display: "none" }}></input> */}
          </div>
          <div className="fileUploadRingkasanWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">Keterangan Kerja</label>
            </div>

            {/* <label className="uploadButton" for="ktp">
              Pilih
            </label>
            <input type="file" id="ktp" style={{ display: "none" }}></input> */}
          </div>
          <div className="fileUploadRingkasanWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">
                Mutasi Rekening Buku Tabungan
              </label>
            </div>

            {/* <label className="uploadButton" for="ktp">
              Pilih
            </label>
            <input type="file" id="ktp" style={{ display: "none" }}></input> */}
          </div>
          <div className="fileUploadRingkasanWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">
                Laporan Keuangan atau Usaha
              </label>
            </div>

            {/* <label className="uploadButton" for="ktp">
              Pilih
            </label>
            <input type="file" id="ktp" style={{ display: "none" }}></input> */}
          </div>
          <div className="fileUploadRingkasanWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">Sertifikat Bangunan</label>
            </div>

            {/* <label className="uploadButton" for="ktp">
              Pilih
            </label>
            <input type="file" id="ktp" style={{ display: "none" }}></input> */}
          </div>
          <div className="fileUploadRingkasanWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">IMB</label>
            </div>

            {/* <label className="uploadButton" for="ktp">
              Pilih
            </label>
            <input type="file" id="ktp" style={{ display: "none" }}></input> */}
          </div>
          <div className="fileUploadRingkasanWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">PBB</label>
            </div>

            {/* <label className="uploadButton" for="ktp">
              Pilih
            </label>
            <input type="file" id="ktp" style={{ display: "none" }}></input> */}
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
                onClick={() => setPage(2)}
              ></input>
              <input
                className="primaryButton"
                type="submit"
                value="Lanjut"
                // onClick={() => setStepDataDiri(4)}
                onClick={() => setPage(3.1)}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
