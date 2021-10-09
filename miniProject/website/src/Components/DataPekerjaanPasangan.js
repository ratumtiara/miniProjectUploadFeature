import React, { useState, useEffect, useContext } from "react";
import { multiStepContext } from "../StepContext";
import "../Styles/Step.css";

import axios from "axios";

export default function DataPekerjaanPasangan() {
  const { setStepDataDiri, userData, setUserData } =
    useContext(multiStepContext);

  const [jenis_pekerjaan_pasangan, setJenis_Pekerjaan_Pasangan] = useState("");
  const [nama_perusahaan_pasangan, setNama_Perusahaan_Pasangan] = useState("");
  const [jabatan_pasangan, setJabatan_Pasangan] = useState("");
  const [kategori_instansi_pasangan, setKategori_Instansi_Pasangan] = useState("");
  const [lama_bekerja_pasangan_tahun, setLama_Bekerja_Pasangan_Tahun] = useState("");
  const [lama_bekerja_pasangan_bulan, setLama_Bekerja_Pasangan_Bulan] = useState("");
  const [jumlah_karyawan_pasangan, setJumlah_Karyawan_Pasangan] = useState("");
  const [pendapatan_pasangan, setPendapatan_Pasangan] = useState("");
  const [status_pasangan, setStatus_Pasangan] = useState("");
  const [pembayaran_gaji_pasangan, setPembayaran_Gaji_Pasangan] = useState("");
  const [alamat_perusahaan_pasangan, setAlamat_Perusahaan_Pasangan] = useState("");
  const [bidang_usaha_pasangan, setBidang_Usaha_Pasangan] = useState("");
  const [nomor_kantor_pasangan, setNomor_Kantor_Pasangan] = useState("");
  const [nomor_hrd_pasangan, setNomor_Hrd_Pasangan] = useState("");
  const [email_hrd_pasangan, setEmail_Hrd_Pasangan] = useState("");
  const [nomor_atasan_pasangan, setNomor_Atasan_Pasangan] = useState("");
  const [email_atasan_pasangan, setEmail_Atasan_Pasangan] = useState("");

  const postDataForm = () => {
    let getIdUser = localStorage.getItem("UserId");

    const localhost = "localhost";

    axios({
      url:
        "http://" +
        localhost +
        ":4000/api/data_pekerjaan/add_form_pekerjaan_pasangan/" +
        getIdUser,

      method: "POST",
      data: {
        jenis_pekerjaan_pasangan,
        nama_perusahaan_pasangan,
        jabatan_pasangan,
        kategori_instansi_pasangan,
        lama_bekerja_pasangan_tahun,
        lama_bekerja_pasangan_bulan,
        jumlah_karyawan_pasangan,
        pendapatan_pasangan,
        status_pasangan,
        pembayaran_gaji_pasangan,
        alamat_perusahaan_pasangan,
        bidang_usaha_pasangan,
        nomor_kantor_pasangan,
        nomor_hrd_pasangan,
        email_hrd_pasangan,
        nomor_atasan_pasangan,
        email_atasan_pasangan,
      },
    })
      .then((response) => {
        console.log(response);
        setStepDataDiri(5);
      })
      .catch((err) => {});
  };

  return (
    <>
      <div className="wrapper">
        <div type="form" className="basicForm">
          <h2 className="titleOne">Data Pekerjaan</h2>
          <hr className="divider" />
          <h3 className="titleTwo">Data Pekerjaan Pasangan</h3>

          <label className="basicLabel" for="Pembiayaan">
            Jenis Pekerjaan
          </label>
          <select
            className="dropdownSelect"
            placeholder="Pilih Jenis Pekerjaan"
            onChange={(e) => setJenis_Pekerjaan_Pasangan(e.target.value)}
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
            onChange={(e) => setNama_Perusahaan_Pasangan(e.target.value)}
          ></input>

          <label className="basicLabel">Jabatan</label>
          <input
            className="basicInput"
            placeholder="Masukkan Jabatan"
            onChange={(e) => setJabatan_Pasangan(e.target.value)}
          ></input>

          <label className="basicLabel">Kategori Instansi</label>
          <select
            className="dropdownSelect"
            onChange={(e) => setKategori_Instansi_Pasangan(e.target.value)}
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
                    onChange={(e) =>
                      setLama_Bekerja_Pasangan_Tahun(e.target.value)
                    }
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
                    onChange={(e) =>
                      setLama_Bekerja_Pasangan_Bulan(e.target.value)
                    }
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
            onChange={(e) => setJumlah_Karyawan_Pasangan(e.target.value)}
          ></input>

          <label className="basicLabel">Pendapatan Per Bulan</label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="30.000.000"
              onChange={(e) => setPendapatan_Pasangan(e.target.value)}
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
                onChange={(e) => setStatus_Pasangan(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
            <label className="radioContainer">
              <label className="radioLabel"> Karyawan Kontrak </label>
              <input
                value="Karyawan Kontrak"
                type="radio"
                name="radio"
                onChange={(e) => setStatus_Pasangan(e.target.value)}
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
                onChange={(e) => setPembayaran_Gaji_Pasangan(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
            <label className="radioContainer">
              <label className="radioLabel"> Transfer Bank Lain </label>
              <input
                value="Transfer Bank Lain"
                type="radio"
                name="radio_bank"
                onChange={(e) => setPembayaran_Gaji_Pasangan(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
          </div>

          <label className="basicLabel">Alamat Kantor atau Tempat Usaha</label>
          <input
            className="basicInput"
            placeholder="Masukan Alamat Kantor atau Tempat Usaha"
            onChange={(e) => setAlamat_Perusahaan_Pasangan(e.target.value)}
          ></input>

          <label className="basicLabel">Bidang Usaha</label>
          <input
            className="basicInput"
            placeholder="Masukan Bidang Usaha"
            onChange={(e) => setBidang_Usaha_Pasangan(e.target.value)}
          ></input>

          <label className="basicLabel">Nomor Telepon Kantor</label>
          <input
            className="basicInput"
            placeholder="Masukan Nomor Telepon Kantor"
            onChange={(e) => setNomor_Kantor_Pasangan(e.target.value)}
          ></input>

          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Nomor Telepon HRD</label>
                <div className="inputWithIconLeftWrapper">
                  <input
                    className="inputWithIconLeft"
                    type="number"
                    placeholder="81234567899"
                    onChange={(e) => setNomor_Hrd_Pasangan(e.target.value)}
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
                  onChange={(e) => setEmail_Hrd_Pasangan(e.target.value)}
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
                    onChange={(e) => setNomor_Atasan_Pasangan(e.target.value)}
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
                  onChange={(e) => setEmail_Atasan_Pasangan(e.target.value)}
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
                onClick={() => setStepDataDiri(4)}
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
