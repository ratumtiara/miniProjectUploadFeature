import React, { useState, useEffect, useContext } from "react";
import { multiStepContext } from "../StepContext";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import "../Styles/Step.css";
import "../Styles/style.css";
import "../Styles/StepperBox.css";

export default function UploadDokumen() {
  const { setPage } = useContext(multiStepContext);
  const [isDisabled, setDisabled] = useState(false);

  // const history = useHistory();

  // const handleRoute = () => {
  //   history.push("/InformasiBerhasil");
  // };

  function alert() {
    swal({
      title: "Are you sure want to submit this KPR form?",
      text: "Once submited, you will not be able to recover this imaginary file!",
      buttons: {
        cancel: "No",
        confirm: { text: "Yes", className: "btnActive" },
      },
      // dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Yeay! Your file has been submited!", {
          icon: "success",
        });
        setPage(4);
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  }

  return (
    <>
      <div className="wrapper">
        <div type="form" className="basicForm">
          <h2 className="titleOne">Ringkasan</h2>
          <hr className="divider"></hr>
          <h3 className="titleTwo">Pernyataan</h3>
          <p className="forKetRingkasan">
            Sehubungan dengan data atau informasi serta dokumen yang saya
            berikan dengan ini saya selaku pemohon kredit menyatakan sebagai
            berikut:
            <p className="forKetRingkasan">
              Apabila kemudian hari terdapat data, informasi, dokumen, identitas
              diri, keterangan atau sehubungan dengan Formulir Aplikasi ini
              tidak benar, maka saya bersedia untuk mempertanggungjawabkannya
              sesuai dengan ketentuan hukum yang berlaku. Dengan ini saya
              memberikan kuasa kepada Bank Muamalat untuk melakukan pemeriksaan
              terhadap kebenaran data/informasi serta dokumen-dokumen yang saya
              serahkandari sumber maupun denga ncara yang dianggap baik dan
              perlu oleh Bank Muamalat, termasuk pengecekan terhadap kebenaran
              rekening terkait, dan membebaskan Bank Muamalat dari segala
              tuntutan dari pihak manapun sehubungan pemeriksaan tersebut. Bank
              Muamalat berhak dan berwenang untuk menolak atau menyetujui
              seluruh atau sebagian dari jumlah yang saya mohon berdasarkan
              verifikasi dan analisa Bank Muamalat.{" "}
            </p>
            Bank Muamalat berhak melakukan penilaian atas tanah dan bangunan
            yang akan dijaminkan dengan atau tanpa bantuan dari perusahaan
            penilai independen yang ditunjuk oleh Bank Muamalat dan untuk
            keperluan tersebut saya mengikatkan diri untuk membayar seluruh
            biaya yang berkaitan dengan penilaian ruma tersebut meskipun
            permohonan pembiayaan saya tidak disetujui oleh Bank Muamalat atau
            terjadi pembatalan permohonan pembiayaan atas permintaan saya. Saya
            akan menyediakan seluruh biaya-biaya prarealisasi di rekening
            pribadi atas nama saya yang ada di Bank Muamalat. Semua Dokumen yang
            telah diserahkan dan dibiayai penilaian agunan yang telah disetor
            melalui Bank Muamalat tidak akan saya tarik kembali. Seluruh
            fasilitas pembiayaan Bank Muamalat dilaporkan ke dalam Sistem
            Layanan Informasi Keuangan (SLIK). Saya menyatakan bersedia dan akan
            mentaati segala persyaratan dan ketentuan yang berlaku di Bank
            Muamalat, ketentuan dari Regulator maupun ketentuan
            perundang-undangan yang berlaku. Saya bersedia menerima penawaran
            produk lainnya dari Bank Muamalat.
          </p>
          <input
            type="checkbox"
            id="termsChkbx"
            onChange={() => setDisabled(!isDisabled)}
          />
          <p
            className="forKetRingkasan"
            style={{ marginLeft: "25px", marginTop: "-4.8%" }}
          >
            Semua informasi dan dokumen yang saya lampirkan dalam permohonan ini
            adalah benar dan apabila terdapat perubahan data dalam aplikasi,
            saya wajib segera memberikan informasi terbaru kepada Bank Muamalat.
          </p>

          <div className="firstPageButtonsWrapper">
            <div className="">
              <input
                className="transparentButton"
                type="submit"
                value="Simpan Draft"
              ></input>
            </div>
            <div className="sliceForSecondPageButton">
              <input
                className="secondaryButton"
                type="submit"
                value="Kembali"
                onClick={() => setPage(3)}
              ></input>
              <input
                type="submit"
                value="Ajukan KPR"
                className={
                  isDisabled ? "primaryButton" : "buttonInActiveRingkasan"
                }
                disabled={isDisabled ? "" : "disabled"}
                onClick={() => alert()}
              // onClick={handleRoute}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
