import React, { useState, useEffect, useContext } from "react";
import { multiStepContext } from "../StepContext";

import "../Styles/HeadingUtama.css";
import Profile from "./Profile";


function HeadingUtama() {
  const { stepDataProfile } = useContext(multiStepContext);

  const goToProfile = () => {
    return <Profile />
    console.log("masuk");
  }

  return (
    <div>
      <header id="headerUtama">
        <div id="headerWrapper">
          <div className="logoUtama">
            <img src="./assets/BMI.png" />
          </div>
          <nav id="navigasiUtama">
            <li>
              <a className="formPengajuan" href="#">
                Form Pengajuan
              </a>
            </li>
            <li>
              <a className="profile" type="submit">
                Profile
              </a>
            </li>
          </nav>
        </div>
      </header>
    </div>
  );
}
export default HeadingUtama;
