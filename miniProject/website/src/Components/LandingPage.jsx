import React, { useState, useEffect } from "react";
import "../Styles/LandingPage.css";
import HeadingLanding from "../Components/HeadingLanding";
import Footer2 from "../Components/Footer2";
import Daftar from "../Components/Daftar";
import Masuk from "../Components/Masuk";
import useToken from "../Token/useToken";
import Footer from "../Components/Footer";

function LandingPage(props) {
  const [toggleDaftar, setToggleDaftar] = useState(false);
  const [toggleMasuk, setToggleMasuk] = useState(false);

  return (
    <>
      <HeadingLanding
        openModal={setToggleDaftar}
        openModalMasuk={setToggleMasuk}
      />
      <div>
        <div className="fotoawal">
          <img className="img4" src="./assets/Bitmap.png" />
          <img className="img5" src="./assets/kursi.png" />
        </div>
        <div className="caption">
          <div className="caption1">
            <p className="cap1">Wujudkan Hunian Impian Anda </p>
            <p className="cap2">dengan Pembiayaan Berbasis Syariah</p>
          </div>
          <p className="caption2">
            Terdapat dua pilihan akad yaitu Murabahah (Jual Beli) atau
            Musyarakah Mutanaqishah (Kerjasama Sewa).
          </p>
          <div className="buttonaj">
            <button className="ajukanSekarang2">Ajukan Sekarang</button>
          </div>
        </div>
        <h1 className="keuntungankpr">Keuntungan KPR iB Muamalat</h1>
        <img className="img3" src="./assets/image-3.png" />
        <img className="img2" src="./assets/image-2.png" />
        <img className="img1" src="./assets/image-1.png" />
        <div className="number1">1</div>
        <div className="number2">2</div>
        <div className="number3">3</div>
        <div className="number4">4</div>
        <div className="number5">5</div>
        <div className="number6">6</div>
        <div className="number7">7</div>
        <div className="number8">8</div>
        <div className="box">
          <div className="boxtext1">
            <h5 className="text">
              Berlaku untuk nasabah baru dan nasabah eksisting Bank Muamalat.
            </h5>
          </div>
          <div className="boxtext2">
            <h5 className="text">Sesuai dengan prinsip syariah.</h5>
          </div>

          <div className="boxtext3">
            <h5 className="text">
              Angsuran tetap hingga akhir pembiayaan sesuai perjanjian dengan
              akad Murabahah.
            </h5>
          </div>

          <div className="boxtext4">
            <h5 className="text">
              Bebas memilih skema dengan Angsuran Super Ringan atau Angsuran Fix
              & Fix.
            </h5>
          </div>

          <div className="boxtext5">
            <h5 className="text">
              Percepatan proses, persyaratan simpel, uang muka ringan untuk
              nasabah loyal.{" "}
            </h5>
          </div>

          <div className="boxtext6">
            <h5 className="text">Plafond pembiayaan lebih besar.</h5>
          </div>

          <div className="boxtext7">
            <h5 className="text">Jangka waktu pembiayaan maksimal 15 tahun.</h5>
          </div>

          <div className="boxtext8">
            <h5 className="text">
              Dapat diajukan dengan sumber penghasilan bersama atau joint
              income.
            </h5>
          </div>
        </div>

        <h1 className="syaratpembukaan">Syarat Pembukaan</h1>
        <div className="syarat">
          <ol type="1">
            <li>Nasabah perorangan</li>
            <li>Usia minimal 21 tahun saat pengajuan pembiayaan.</li>
            <li>
              Usia maksimal saat jatuh tempo pembiayaan bagi pegawai 55 tahun
              atau belum pensiun serta 60 tahun untuk wiraswasta.
            </li>
            <li>Tidak termasuk dalam Daftar Pembiayaan Bermasalah.</li>
            <li>Status karyawan:</li>
            <ol type="a">
              <li>Karyawan tetap (Minimal telah bekerja 1 tahun).</li>
              <li>Karyawan kontrak (Minimal telah bekerja 2 tahun).</li>
              <li>Wiraswasta atau Profesional.</li>
            </ol>
            <li>Pembiayaan dicover dengan asuransi jiwa.</li>
            <li>Fasilitas angsuran secara autodebet dari Tabungan Muamalat.</li>
            <li>Melengkapi persyaratan administratif pengajuan:</li>
            <ol type="a">
              <li>Formulir permohonan pembiayaan untuk individu</li>
              <li>Fotocopy KTP, KK, Surat Nikah (bila sudah menikah)</li>
              <li>Fotocopy NPWP</li>
              <li>
                Asli slip gaji & surat keterangan kerja (untuk pegawai/karyawan)
              </li>
              <li>
                Fotocopy mutasi rekening buku tabungan/statement giro 3 bulan
                terakhir
              </li>
              <li>Laporan keuangan atau laporan usaha (untuk wiraswasta)</li>
              <li>Fotocopy sertifikat, IMB dan PBB</li>
            </ol>
          </ol>
        </div>
        <div className="kotak">
          <div className="daftarkan">
            <p className="p1">Daftarkan Diri Anda Segera </p>
            <p className="p2">KPR iB Muamalat</p>
          </div>
          <button className="ajukanSekarang">Ajukan Sekarang</button>
        </div>
      </div>
      <Footer2 />
      {toggleDaftar ? <Daftar openModal={setToggleDaftar} /> : null}
      {toggleMasuk ? <Masuk openModalMasuk={setToggleMasuk} /> : null}
      
    </>
  );
}
export default LandingPage;
