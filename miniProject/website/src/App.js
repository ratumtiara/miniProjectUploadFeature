import React, { useContext } from "react";
import "./App.css";
import "./Styles/Step.css";

import LandingPage from "./Components/LandingPage";
import Daftar from "./Components/Daftar";
import Masuk from "./Components/Masuk";

import DataPengajuan from "./Components/DataPengajuan";
import DataAgunan from "./Components/DataAgunan";

import DataDirinKel from "./Components/DataDirinKel";
import DataDiriPasangan from "./Components/DataDiriPasangan";
import DataDiriKerabat from "./Components/DataDiriKerabat";

import DataPekerjaan from "./Components/DataPekerjaan";
import DataPekerjaanPasangan from "./Components/DataPekerjaanPasangan";

import DataPembiayaan from "./Components/DataPembiayaan";
import Properti from "./Components/Properti";
import TakeOver from "./Components/TakeOver";
import PembiayaanKBP from "./Components/PembiayaanKBP";
import UploadDokumen from "./Components/UploadDokumen";
import RingkasanPemohon from "./Components/RingkasanPemohon";
import Ringkasan from "./Components/Ringkasan";
import InformasiBerhasil from "./Components/InformasiBerhasil";

import { Stepper, StepLabel, Step } from "@material-ui/core";
import { multiStepContext } from "./StepContext";
import Footer from "./Components/Footer";
import HeadingUtama from "./Components/HeadingUtama";
import { StepperButton } from "./Components/Button";
// import getMuiTheme from "material-ui/styles/getMuiTheme";
// import DisplayData from "./Components/DisplayData";

import Profile from "./Components/Profile";
import InformasiAwal from "./Components/InformasiAwal";

function App() {
  const { page, setPage } = useContext(multiStepContext);

  let token = localStorage.getItem("token");

  if (token) {
    token = true;
  } else {
    token = false;
  }

  if (!token) {
    return <LandingPage />;
  } else if (token) {

    // return <Profile />;

    function showPage(page) {
      switch (page) {
        case 1:
          return <PagePengajuanDiri />;
        // return <FormUploadDoc />;
        case 2:
          return <FormUploadDoc />;
        case 3:
          return <FormRingkasanPemohon />;
        case 3.1:
          return <FormRingkasan />;
      }
      return <InformasiBerhasil />;
    }

    const PagePengajuanDiri = () => {
      const { stepDataDiri } = useContext(multiStepContext);

      function showStep(step) {
        switch (step) {
          case 1:
            return <DataPengajuan />;
          case 1.1:
            return <Properti />;
          case 1.2:
            return <TakeOver />;
          case 1.3:
            return <PembiayaanKBP />;
          case 2:
            return <DataAgunan />;
          case 3:
            return <DataDirinKel />;
          case 3.1:
            return <DataDiriPasangan />;
          case 3.2:
            return <DataDiriKerabat />;
          case 4:
            return <DataPekerjaan />;
          case 4.1:
            return <DataPekerjaanPasangan />;
          case 5:
            return <DataPembiayaan />;
        }
      }

      return (
        <>
          <div className="center-stepper">
            <Stepper
              style={{ width: "60vw", background: "#FBFBFB" }}
              activeStep={stepDataDiri - 1}
              orientation="horizontal"
              alternativeLabel
            >
              <Step>
                <StepLabel>Data Pengajuan</StepLabel>
              </Step>
              <Step>
                <StepLabel>Data Agunan</StepLabel>
              </Step>
              <Step>
                <StepLabel>Data Diri dan Keluarga</StepLabel>
              </Step>
              <Step>
                <StepLabel>Data Pekerjaan</StepLabel>
              </Step>
              <Step>
                <StepLabel>Data Pembiayaan</StepLabel>
              </Step>
            </Stepper>
          </div>
          {showStep(stepDataDiri)}
        </>
      );
    };

    const FormUploadDoc = () => {
      return <UploadDokumen />;
    };

    return (
      <div className="App">
        <HeadingUtama />
        <div className="App-header">
          <div style={{ width: "60%", textAlign: "left" }}>
            <h3 id="h3Title">Pengajuan KPR Bank Muamalat</h3>
          </div>
          <div
            id="boxStepperWrapper"
            style={{
              display: page === 4 ? "none" : "flex",
            }}
          >
            <StepperButton
              title="Pengisian Data"
              idPage={1}
              currentPage={page}
              onClick={() => setPage(1)}
            />
            <StepperButton
              title="Upload Dokumen"
              idPage={2}
              currentPage={page}
              onClick={() => setPage(2)}
            />
            <StepperButton
              title="Ringkasan"
              idPage={3}
              currentPage={page}
              onClick={() => setPage(3)}
            />
          </div>
          {showPage(page)}
        </div>
        <Footer />
      </div>
    );
  }
}

const FormRingkasan = () => {
  return <Ringkasan />;
};

const FormRingkasanPemohon = () => {
  return <RingkasanPemohon />;
};

export default App;
