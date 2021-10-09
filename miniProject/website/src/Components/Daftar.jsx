import React, { useState, useEffect, useContext } from "react";
import "../Styles/Daftar.css";

import axios from "axios";

function Daftar(props) {
  const { openModal } = props;

  function closeModal() {
    openModal(false);
  }

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postDataForm = () => {
    axios({
      url: "http://localhost:4000/api/user/daftar",
      method: "POST",
      data: {
        nama,
        email,
        password,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="containerModal">
      <label onClick={closeModal} className="x">
        x
      </label>
      <h2>Daftar</h2>
      <form className="form">
        <div>
          <label htmlFor="idnama" className="namaLengkap">
            Nama Lengkap
          </label>
          <input
            className="inputnama"
            id="idnama"
            required={true}
            placeholder="Masukkan Nama Lengkap"
            type="text"
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="idemail" className="email">
            Email
          </label>
          <input
            className="inputemail"
            id="idemail"
            required={true}
            placeholder="Masukkan Email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="idpw" className="password">
            Password
          </label>
          <input
            className="inputpassword"
            id="idpw"
            required={true}
            placeholder="Masukkan Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="idpw2" className="password2">
            Ulangi Password
          </label>
          <input
            className="inputpassword2"
            id="idpw2"
            required={true}
            placeholder="Masukkan Password"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="masuk" onClick={() => postDataForm()}>
          Daftar
        </button>
        <label className="sudahpunya">Sudah Punya Akun? Masuk</label>
      </form>
    </div>
  );
}

export default Daftar;
