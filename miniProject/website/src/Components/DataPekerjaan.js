import React, { useState, useEffect, useContext } from "react";
import { multiStepContext } from "../StepContext";
import "../Styles/Step.css";

import axios from "axios";

export default function DataPekerjaan() {
  const { setStepDataDiri, userData, setUserData } =
    useContext(multiStepContext);

  const [jenis_pekerjaan, setJenis_Pekerjaan] = useState("");
  const [nama_perusahaan, setNama_Perusahaan] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [kategori_instansi, setKategori_Instansi] = useState("");
  const [lama_bekerja_tahun, setLama_Bekerja_Tahun] = useState("");
  const [lama_bekerja_bulan, setLama_Bekerja_Bulan] = useState("");
  const [jumlah_karyawan, setJumlah_Karyawan] = useState("");
  const [pendapatan, setPendapatan] = useState("");
  const [status_pekerjaan, setStatus_Pekerjaan] = useState("");
  const [pembayaran_gaji, setPembayaran_Gaji] = useState("");
  const [alamat_kantor, setAlamat_Kantor] = useState("");
  const [bidang_usaha, setBidang_Usaha] = useState("");
  const [nomor_kantor, setNomor_Kantor] = useState("");
  const [nomor_hrd, setNomor_Hrd] = useState("");
  const [email_hrd, setEmail_Hrd] = useState("");
  const [nomor_atasan, setNomor_Atasan] = useState("");
  const [email_atasan, setEmail_Atasan] = useState("");

  const postDataForm = () => {
    let getIdUser = localStorage.getItem("UserId");

    const localhost = "localhost";

    axios({
      url:
        "http://" +
        localhost +
        ":4000/api/data_pekerjaan/add_form_pekerjaan_pemohon/" +
        getIdUser,

      getIdUser,
      method: "POST",
      data: {
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
        alamat_kantor,
        bidang_usaha,
        nomor_kantor,
        nomor_hrd,
        email_hrd,
        nomor_atasan,
        email_atasan,
      },
    })
      .then((response) => {
        axios({
          url:
            "http://" +
            localhost +
            ":4000/api/fasilitas_pembiayaan/read_form_fasilitas_pembiayaan/" +
            getIdUser,
          method: "GET",
        })
          .then((responseSkema) => {
            const skema_pengajuan_user =
              responseSkema.data.data.skema_pengajuan;

            console.log(responseSkema.data.data.skema_pengajuan);

            if (skema_pengajuan_user === "Penghasilan Gabungan") {
              setStepDataDiri(4.1);
            } else if (skema_pengajuan_user === "Penghasilan Tunggal") {
              setStepDataDiri(5);
            }
          })
          .catch((err) => {});
      })
      .catch((err) => {});
  };

  return (
    <>
      <div className="wrapper">
        <div type="form" className="basicForm">
          <h2 className="titleOne">Data Pekerjaan</h2>
          <hr className="divider" />
          <h3 className="titleTwo">Data Pekerjaan Pemohon</h3>

          <label className="basicLabel" for="Pembiayaan">
            Jenis Pekerjaan
          </label>
          <select
            className="dropdownSelect"
            placeholder="Pilih Jenis Pekerjaan"
            onChange={(e) => setJenis_Pekerjaan(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Jenis Pekerjaan
            </option>
            <option value="Karyawan">Karyawan</option>
            <option value="Profesional">Profesional</option>
            <option value="Wiraswasta">Wiraswasta</option>
            <option value="Lainnya">Lainnya</option>
          </select>

          <label className="basicLabel">Nama Perusahaan</label>
          <input
            className="basicInput"
            placeholder="Masukkan Nama Perusahaan"
            onChange={(e) => setNama_Perusahaan(e.target.value)}
          ></input>

          <label className="basicLabel">Jabatan</label>
          <input
            className="basicInput"
            placeholder="Masukkan Jabatan"
            onChange={(e) => setJabatan(e.target.value)}
          ></input>

          <label className="basicLabel">Kategori Instansi</label>
          <select
            className="dropdownSelect"
            onChange={(e) => setKategori_Instansi(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Kategori Instansi
            </option>
            <option value="Pemerintahan">Pemerintahan</option>
            <option value="BUMN">BUMN</option>
            <option value="TNI/Polri">TNI/Polri</option>
            <option value="Wiraswasta/Profesional">
              Wiraswasta/Profesional
            </option>
            <option value="Swasta Asing">Swasta Asing</option>
            <option value=">Swasta Nasional">Swasta Nasional</option>
            <option value="Lainnya">Lainnya</option>
          </select>

          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Lama Bekerja</label>
                <div className="inputWithIconRightWrapper">
                  <input
                    className="inputWithIconRight"
                    placeholder="1"
                    type="number"
                    min="1"
                    onChange={(e) => setLama_Bekerja_Tahun(e.target.value)}
                  />
                  <label className="iconRight">tahun</label>
                </div>
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">.</label>
                <div className="inputWithIconRightWrapper">
                  <input
                    className="inputWithIconRight"
                    placeholder="1"
                    type="number"
                    min="1"
                    onChange={(e) => setLama_Bekerja_Bulan(e.target.value)}
                  />
                  <label className="iconRight">bulan</label>
                </div>
              </div>
            </div>
          </div>

          <label className="basicLabel">Jumlah Karyawan</label>
          <input
            className="basicInput"
            placeholder="Masukan Jumlah Karyawan"
            type="number"
            onChange={(e) => setJumlah_Karyawan(e.target.value)}
          ></input>

          <label className="basicLabel">Pendapatan Per Bulan</label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="30.000.000"
              onChange={(e) => setPendapatan(e.target.value)}
            />
            <label className="iconLeft">Rp</label>
          </div>

          <label className="basicLabel" htmlFor="skema">
            Status Pekerjaan
          </label>
          <div className="radioWrapper">
            <label className="radioContainer">
              <label className="radioLabel"> Karyawan Tetap </label>
              <input
                value="Karyawan Tetap"
                type="radio"
                name="radio"
                onChange={(e) => setStatus_Pekerjaan(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
            <label className="radioContainer">
              <label className="radioLabel"> Karyawan Kontrak </label>
              <input
                value="Karyawan Kontrak"
                type="radio"
                name="radio"
                onChange={(e) => setStatus_Pekerjaan(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
          </div>

          <label className="basicLabel" htmlFor="skema">
            Pembayaran Gaji
          </label>
          <div className="radioWrapper">
            <label className="radioContainer">
              <label className="radioLabel"> Transfer Bank Muamalat </label>
              <input
                value="Transfer Bank Muamalat"
                type="radio"
                name="radio_bank"
                onChange={(e) => setPembayaran_Gaji(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
            <label className="radioContainer">
              <label className="radioLabel"> Transfer Bank Lain </label>
              <input
                value="Transfer Bank Lain"
                type="radio"
                name="radio_bank"
                onChange={(e) => setPembayaran_Gaji(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
          </div>

          <label className="basicLabel">Alamat Kantor atau Tempat Usaha</label>
          <input
            className="basicInput"
            placeholder="Masukan Alamat Kantor atau Tempat Usaha"
            onChange={(e) => setAlamat_Kantor(e.target.value)}
          ></input>

          <label className="basicLabel">Bidang Usaha</label>
          <input
            className="basicInput"
            placeholder="Masukan Bidang Usaha"
            onChange={(e) => setBidang_Usaha(e.target.value)}
          ></input>

          <label className="basicLabel">Nomor Telepon Kantor</label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="81234567890"
              onChange={(e) => setNomor_Kantor(e.target.value)}
            />
            <label className="iconLeft">+62</label>
          </div>

          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Nomor Telepon HRD</label>
                <div className="inputWithIconLeftWrapper">
                  <input
                    className="inputWithIconLeft"
                    type="number"
                    placeholder="81234567899"
                    onChange={(e) => setNomor_Hrd(e.target.value)}
                  />
                  <label className="iconLeft">+62</label>
                </div>
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Alamat Email HRD</label>
                <input
                  className="basicInput"
                  placeholder="example@email.com"
                  type="email"
                  onChange={(e) => setEmail_Hrd(e.target.value)}
                ></input>
              </div>
            </div>
          </div>

          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">
                  Nomor Telepon Atasan Langsung
                </label>
                <div className="inputWithIconLeftWrapper">
                  <input
                    className="inputWithIconLeft"
                    type="number"
                    placeholder="81234567899"
                    onChange={(e) => setNomor_Atasan(e.target.value)}
                  />
                  <label className="iconLeft">+62</label>
                </div>
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">
                  Alamat Email Atasan Langsung
                </label>
                <input
                  className="basicInput"
                  placeholder="example@email.com"
                  type="email"
                  onChange={(e) => setEmail_Atasan(e.target.value)}
                ></input>
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
                onClick={() => setStepDataDiri(3)}
              ></input>
              <input
                className="primaryButton"
                type="submit"
                value="Lanjut"
                // onClick={() => setStepDataDiri(5)}
                onClick={() => postDataForm()}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
