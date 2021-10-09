import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Route } from "react-router";
import "../Styles/Masuk.css";

import InformasiAwal from "./InformasiAwal";

function Masuk(props) {
  const { openModalMasuk } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function closeModalMasuk() {
    openModalMasuk(false);
  }

  const adminLogin = (e) => {
    e.preventDefault();
    let style = e.target.style;
    style["box-shadow"] = "none";
    setTimeout(() => {
      style["box-shadow"] = "3px 3px 5px rgb(80, 80, 80)";
    }, 100);

    axios({
      url: "http://localhost:4000/api/user/masuk",
      method: "POST",
      data: {
        email,
        password,
      },
    })
      .then((response) => {
        localStorage.setItem("UserId", response.data.UserId);
        localStorage.setItem("token", response.data.token);
        window.location.reload();
        e.preventDefault();
        <InformasiAwal />;
      })
      .catch((err) => {
        console.log(err);
        window.location.reload();
      });
  };

  return (
    <div className="containermasuk">
      <label onClick={closeModalMasuk} className="x">
        x
      </label>
      <h2>Masuk</h2>
      <form className="formmasuk">
        <div>
          <label className="email2">Email</label>
          <input
            className="inputemail2"
            placeholder="Masukkan Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="password3">Password</label>
          <input
            className="inputpassword3"
            type="password"
            placeholder="Masukkan Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <label className="forgetpw">Forget Password?</label>
        <button className="masuk2" onClick={adminLogin}>
          Masuk
        </button>
        <label className="daftar">Daftar Sekarang</label>
      </form>
    </div>
  );
}

export default Masuk;
