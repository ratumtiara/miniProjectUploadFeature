import React, { useState, useContext } from "react";
import { multiStepContext } from "../StepContext";
import "../Styles/Step.css";
import "../Styles/style.css";
import swal from "sweetalert";

import axios from "axios";

export default function UploadDokumen() {
  const { userData, setUserData, setPage } =
    useContext(multiStepContext);

  const [KTP, setKTP] = useState("");
  const [KK, setKK] = useState("");
  const [SuratNikah, setSuratNikah] = useState("");
  const [NPWP, setNPWP] = useState("");
  const [SlipGaji, setSlipGaji] = useState("");
  const [KetKerja, setKetKerja] = useState("");
  const [MutasiRek, setMutasiRek] = useState("");
  const [LapKeuangan, setLapKeuangan] = useState("");
  const [SertifBangunan, setSertifBangunan] = useState("");
  const [IMB, setIMB] = useState("");
  const [PBB, setPBB] = useState("");


  const [TitleKTP, setTitleKTP] = useState("");
  const [TitleKK, setTitleKK] = useState("");
  const [TitleSuratNikah, setTitleSuratNikah] = useState("");
  const [TitleNPWP, setTitleNPWP] = useState("");
  const [TitleSlipGaji, setTitleSlipGaji] = useState("");
  const [TitleKetKerja, setTitleKetKerja] = useState("");
  const [TitleMutasiRek, setTitleMutasiRek] = useState("");
  const [TitleLapKeuangan, setTitleLapKeuangan] = useState("");
  const [TitleSertifBangunan, setTitleSertifBangunan] = useState("");
  const [TitleIMB, setTitleIMB] = useState("");
  const [TitlePBB, setTitlePBB] = useState("");

  const buatBalik = (e) => {
    setWaktu_Pembiayaan(e.target.value);
    setUserData({ ...userData, wkt_pembiayaan: e.target.value });
  };

  const handleUpload = (e, value) => {
    console.log(e.target.files)
    let fileName = e.target.files[0].name;
    // let fileName = fileNameForm;

    if (value === "KTP") {
      setTitleKTP(fileName);
      setKTP(e.target.files[0]);
    } else if (value === "KK") {
      setTitleKK(fileName);
      setKK(e.target.files[0]);
    } else if (value === "SuratNikah") {
      setTitleSuratNikah(fileName);
      setSuratNikah(e.target.files[0]);
    } else if (value === "NPWP") {
      setTitleNPWP(fileName);
      setNPWP(e.target.files[0]);
    } else if (value === "SlipGaji") {
      setTitleSlipGaji(fileName);
      setSlipGaji(e.target.files[0]);
    } else if (value === "KetKerja") {
      setTitleKetKerja(fileName);
      setKetKerja(e.target.files[0]);
    } else if (value === "MutasiRek") {
      setTitleMutasiRek(fileName);
      setMutasiRek(e.target.files[0]);
    } else if (value === "LapKeuangan") {
      setTitleLapKeuangan(fileName);
      setLapKeuangan(e.target.files[0]);
    } else if (value === "SertifBangunan") {
      setTitleSertifBangunan(fileName);
      setSertifBangunan(e.target.files[0]);
    } else if (value === "IMB") {
      setTitleIMB(fileName);
      setIMB(e.target.files[0]);
    } else if (value === "PBB") {
      setTitlePBB(fileName);
      setPBB(e.target.files[0]);
    }
  };

  const handleDelete = (value) => {
    swal("Apakah Anda yakin ingin menghapus gambar?", {
      buttons: {
        cancel: "No",
        catch: {
          text: "Yes",
          value: "yash",
        },
      },
    }).then((value1) => {
      switch (value1) {
        case "yash":
          if (value === "KTP") {
            setTitleKTP(null);
            setKTP(null);
          } else if (value === "KK") {
            setTitleKK(null);
            setKK(null);
          } else if (value === "SuratNikah") {
            setTitleSuratNikah(null);
            setSuratNikah(null);
          } else if (value === "NPWP") {
            setTitleNPWP(null);
            setNPWP(null);
          } else if (value === "SlipGaji") {
            setTitleSlipGaji(null);
            setSlipGaji(null);
          } else if (value === "KetKerja") {
            setTitleKetKerja(null);
            setKetKerja(null);
          } else if (value === "MutasiRek") {
            setTitleMutasiRek(null);
            setMutasiRek(null);
          } else if (value === "LapKeuangan") {
            setTitleLapKeuangan(null);
            setLapKeuangan(null);
          } else if (value === "SertifBangunan") {
            setTitleSertifBangunan(null);
            setSertifBangunan(null);
          } else if (value === "IMB") {
            setTitleIMB(null);
            setIMB(null);
          } else if (value === "PBB") {
            setTitlePBB(null);
            setPBB(null);
          }
          swal("Berhasil", "Gambar telah di hapus", "success");
          break;

        default:
          swal("File Anda Tersimpan Oleh Sistem");
      }
    });
  };

  const postDataForm = (e) => {
    e.preventDefault()
    let getIdUser = localStorage.getItem("UserId");
    let formdata = new FormData()
    formdata.append("KTP",KTP)
    formdata.append("KK",KK)
    formdata.append("SuratNikah",SuratNikah)
    formdata.append("NPWP",NPWP)
    formdata.append("SlipGaji",SlipGaji)
    formdata.append("KetKerja",KetKerja)
    formdata.append("MutasiRek",MutasiRek)
    formdata.append("LapKeuangan",LapKeuangan)
    formdata.append("SertifBangunan",SertifBangunan)
    formdata.append("IMB",IMB)
    formdata.append("PBB",PBB)
    axios({
      url:
        "http://localhost:4000/api/upload/uploadMultiple/" +
        getIdUser,
      method: "POST",
      data: formdata ,
      headers:{"Content-Type": "multipart/form-data"}
    })
      .then((e) => {
        setPage(3);
        // console.log("TEST");
        // console.log(response);
      })
      .catch((err) => {
        console.log(err)
        console.log("ini");
      });
  };

  return (
    <>

      <div className="wrapper" type="form-data" >
        <form encType="multipart/form-data" className="basicForm" onSubmit ={(e) => postDataForm(e)}>
          <h2 className="titleOne">Upload Dokumen Pendukung</h2>
          <hr className="divider"></hr>
          <h3 className="titleTwo">Dokumen Wajib</h3>
          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">KTP</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label
              className="uploadButton"
              for="ktp"
              style={{ display: TitleKTP ? "none" : "block" }}
            >
              Pilih
            </label>
            <div
              className="formUD"
              style={{
                display: TitleKTP ? "block" : "none",
              }}
            >
              <div className="uploadDocc">
                <span style={{ textAlign: "center" }}>{TitleKTP}</span>
              </div>
              <div className="asetImage">
                <img
                  src="./assets/Vector.png"
                  onClick={() => handleDelete("KTP")}
                  width="10"
                  height="13"
                  style={{
                    alignSelf: "center",
                  }}
                />
              </div>
            </div>
            <input
              type="file"
              id="ktp"
              onChange={(e) => handleUpload(e, "KTP")}
              onClick={(e) => (e.target.value = null)}
              style={{ display: "none" }}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">Kartu Keluarga</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label
              className="uploadButton"
              for="kk"
              style={{ display: TitleKK ? "none" : "block" }}
            >
              Pilih
            </label>
            <div
              className="formUD"
              style={{
                display: TitleKK ? "block" : "none",
              }}
            >
              <div className="uploadDocc">
                <span style={{ textAlign: "center" }}>{TitleKK}</span>
              </div>
              <div className="asetImage">
                <img
                  src="./assets/Vector.png"
                  onClick={() => handleDelete("KK")}
                  width="10"
                  height="13"
                  style={{
                    alignSelf: "center",
                  }}
                />
              </div>
            </div>
            <input
              type="file"
              id="kk"
              onChange={(e) => handleUpload(e, "KK")}
              onClick={(e) => (e.target.value = null)}
              style={{ display: "none" }}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">Surat Nikah</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label
              className="uploadButton"
              for="surat_nikah"
              style={{ display: TitleSuratNikah ? "none" : "block" }}
            >
              Pilih
            </label>
            <div
              className="formUD"
              style={{
                display: TitleSuratNikah ? "block" : "none",
              }}
            >
              <div className="uploadDocc">
                <span style={{ textAlign: "center" }}>{TitleSuratNikah}</span>
              </div>
              <div className="asetImage">
                <img
                  src="./assets/Vector.png"
                  onClick={() => handleDelete("SuratNikah")}
                  width="10"
                  height="13"
                  style={{
                    alignSelf: "center",
                  }}
                />
              </div>
            </div>
            <input
              type="file"
              id="surat_nikah"
              onChange={(e) =>
                handleUpload(e, "SuratNikah")
              }
              onClick={(e) => (e.target.value = null)}
              style={{ display: "none" }}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">NPWP</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label
              className="uploadButton"
              for="npwp"
              style={{ display: TitleNPWP ? "none" : "block" }}
            >
              Pilih
            </label>
            <div
              className="formUD"
              style={{
                display: TitleNPWP ? "block" : "none",
              }}
            >
              <div className="uploadDocc">
                <span style={{ textAlign: "center" }}>{TitleNPWP}</span>
              </div>
              <div className="asetImage">
                <img
                  src="./assets/Vector.png"
                  onClick={() => handleDelete("NPWP")}
                  width="10"
                  height="13"
                  style={{
                    alignSelf: "center",
                  }}
                />
              </div>
            </div>
            <input
              type="file"
              id="npwp"
              onChange={(e) => handleUpload(e, "NPWP")}
              onClick={(e) => (e.target.value = null)}
              style={{ display: "none" }}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">Slip Gaji Asli</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label
              className="uploadButton"
              for="slip_gaji"
              style={{ display: TitleSlipGaji ? "none" : "block" }}
            >
              Pilih
            </label>
            <div
              className="formUD"
              style={{
                display: TitleSlipGaji ? "block" : "none",
              }}
            >
              <div className="uploadDocc">
                <span style={{ textAlign: "center" }}>{TitleSlipGaji}</span>
              </div>
              <div className="asetImage">
                <img
                  src="./assets/Vector.png"
                  onClick={() => handleDelete("SlipGaji")}
                  width="10"
                  height="13"
                  style={{
                    alignSelf: "center",
                  }}
                />
              </div>
            </div>
            <input
              type="file"
              id="slip_gaji"
              onChange={(e) => handleUpload(e, "SlipGaji")}
              onClick={(e) => (e.target.value = null)}
              style={{ display: "none" }}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">Keterangan Kerja</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label
              className="uploadButton"
              for="ket_kerja"
              style={{ display: TitleKetKerja ? "none" : "block" }}
            >
              Pilih
            </label>
            <div
              className="formUD"
              style={{
                display: TitleKetKerja ? "block" : "none",
              }}
            >
              <div className="uploadDocc">
                <span style={{ textAlign: "center" }}>{TitleKetKerja}</span>
              </div>
              <div className="asetImage">
                <img
                  src="./assets/Vector.png"
                  onClick={() => handleDelete("KetKerja")}
                  width="10"
                  height="13"
                  style={{
                    alignSelf: "center",
                  }}
                />
              </div>
            </div>
            <input
              type="file"
              id="ket_kerja"
              onChange={(e) => handleUpload(e, "KetKerja")}
              onClick={(e) => (e.target.value = null)}
              style={{ display: "none" }}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">
                {" "}
                Mutasi Rekening Buku Tabungan
              </label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label
              className="uploadButton"
              for="mutasi"
              style={{ display: TitleMutasiRek ? "none" : "block" }}
            >
              Pilih
            </label>
            <div
              className="formUD"
              style={{
                display: TitleMutasiRek ? "block" : "none",
              }}
            >
              <div className="uploadDocc">
                <span style={{ textAlign: "center" }}>{TitleMutasiRek}</span>
              </div>
              <div className="asetImage">
                <img
                  src="./assets/Vector.png"
                  onClick={() => handleDelete("MutasiRek")}
                  width="10"
                  height="13"
                  style={{
                    alignSelf: "center",
                  }}
                />
              </div>
            </div>
            <input
              type="file"
              id="mutasi"
              onChange={(e) =>
                handleUpload(e, "MutasiRek")
              }
              onClick={(e) => (e.target.value = null)}
              style={{ display: "none" }}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">
                Laporan Keuangan atau usaha
              </label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label
              className="uploadButton"
              for="lap_keuangan"
              style={{ display: TitleLapKeuangan ? "none" : "block" }}
            >
              Pilih
            </label>
            <div
              className="formUD"
              style={{
                display: TitleLapKeuangan ? "block" : "none",
              }}
            >
              <div className="uploadDocc">
                <span style={{ textAlign: "center" }}>{TitleLapKeuangan}</span>
              </div>
              <div className="asetImage">
                <img
                  src="./assets/Vector.png"
                  onClick={() => handleDelete("LapKeuangan")}
                  width="10"
                  height="13"
                  style={{
                    alignSelf: "center",
                  }}
                />
              </div>
            </div>
            <input
              type="file"
              id="lap_keuangan"
              onChange={(e) =>
                handleUpload(e, "LapKeuangan")
              }
              onClick={(e) => (e.target.value = null)}
              style={{ display: "none" }}
            ></input>
          </div>

          <h3 className="titleTwo">Dokumen Jaminan - Untuk Pembelian</h3>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">Sertifikat Bangunan</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label
              className="uploadButton"
              for="stf_bangunan2"
              style={{ display: TitleSertifBangunan ? "none" : "block" }}
            >
              Pilih
            </label>
            <div
              className="formUD"
              style={{
                display: TitleSertifBangunan ? "block" : "none",
              }}
            >
              <div className="uploadDocc">
                <span style={{ textAlign: "center" }}>
                  {TitleSertifBangunan}
                </span>
              </div>
              <div className="asetImage">
                <img
                  src="./assets/Vector.png"
                  onClick={() => handleDelete("SertifBangunan")}
                  width="10"
                  height="13"
                  style={{
                    alignSelf: "center",
                  }}
                />
              </div>
            </div>
            <input
              type="file"
              id="stf_bangunan2"
              onChange={(e) =>
                handleUpload(e, "SertifBangunan")
              }
              onClick={(e) => (e.target.value = null)}
              style={{ display: "none" }}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">IMB</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label
              className="uploadButton"
              for="imb"
              style={{ display: TitleIMB ? "none" : "block" }}
            >
              Pilih
            </label>
            <div
              className="formUD"
              style={{
                display: TitleIMB ? "block" : "none",
              }}
            >
              <div className="uploadDocc">
                <span style={{ textAlign: "center" }}>{TitleIMB}</span>
              </div>
              <div className="asetImage">
                <img
                  src="./assets/Vector.png"
                  onClick={() => handleDelete("IMB")}
                  width="10"
                  height="13"
                  style={{
                    alignSelf: "center",
                  }}
                />
              </div>
            </div>
            <input
              type="file"
              id="imb"
              onChange={(e) => handleUpload(e, "IMB")}
              onClick={(e) => (e.target.value = null)}
              style={{ display: "none" }}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">PBB</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label
              className="uploadButton"
              for="pbb"
              style={{ display: TitlePBB ? "none" : "block" }}
            >
              Pilih
            </label>
            <div
              className="formUD"
              style={{
                display: TitlePBB ? "block" : "none",
              }}
            >
              <div className="uploadDocc">
                <span style={{ textAlign: "center" }}>{TitlePBB}</span>
              </div>
              <div className="asetImage">
                <img
                  src="./assets/Vector.png"
                  onClick={() => handleDelete("PBB")}
                  width="10"
                  height="13"
                  style={{
                    alignSelf: "center",
                  }}
                />
              </div>
            </div>
            <input
              type="file"
              id="pbb"
              onChange={(e) => handleUpload(e, "PBB")}
              onClick={(e) => (e.target.value = null)}
              style={{ display: "none" }}
            ></input>
          </div>

          <label className="forKeterangan">
            Data yang Anda berikan akan tersimpan dan terlindungi dengan aman
            didalam sistem Bank Muamalat.
          </label>

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
                onClick={() => setPage(1)}
              />
              <input
                className="primaryButton"
                type="submit"
                value="Lanjut"
                // onClick={() => setPage(3)}
                // 
              />
            </div>
          </div>
        </form>

      </div>
    </>
  );
}
