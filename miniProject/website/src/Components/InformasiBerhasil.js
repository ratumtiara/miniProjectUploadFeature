import React, { useState, useEffect, useContext } from "react";
import { multiStepContext } from "../StepContext";

import "../Styles/Step.css";
import "../Styles/style.css";
import "../Styles/StepperBox.css";

export default function InformasiBerhasil() {
  const { setPage } = useContext(multiStepContext);

  return (
    <>
      <div className="wrapper">
        <div type="form" className="basicForm">
          <h2 className="titleOne">Alhamdulillah</h2>
          <h3 className="titleOne">
            Data Pengajuan KPR Anda Telah Kami Terima
          </h3>
          <p className="forKetRingkasan">
            Anda dapat melihat status pengajuan KPR Anda pada Halaman Profil.
            Informasi lebih lanjut dapat menghubugi SalaMuamalat 1500016.
          </p>

          <div className="firstPageButtonsWrapper">
            <div className="">
              <input
                className="transparentButton"
                type="submit"
                value="Home"
              ></input>
            </div>
            <div className="sliceForSecondPageButton">
              <input
                className="primaryButton"
                type="submit"
                value="Lihat Pengajuan"
              //   onClick={() => postDataForm()}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
