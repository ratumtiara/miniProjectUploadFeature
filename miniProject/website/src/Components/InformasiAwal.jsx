import React, { useState } from "react";
import HeadingUtama from './HeadingUtama'
import '../Styles/style.css'
import '../Styles/InformasiAwal.css'

function InformasiAwal() {
    const [nasabah, setNasabah] = useState(false)

    const isNasabah = () => {
        setNasabah(true)
    }
    const isNotNasabah = () => {
        setNasabah(false)
    }
    return (
        <>
            <HeadingUtama />
            <div>
                <div className="containerinfo">
                    <h3 className="titleTwo" style={{ marginTop: "165px", marginLeft: "100px", color: "#500878", lineHeight: "32px" }}>Apakah Anda nasabah Bank Muamalat?</h3>


                    <label className="radioContainerInformation" style={{ marginLeft: "80px", height: "9vh", width: "35vw", display: "flex", borderRadius: "8px", position: "relative" }}>
                        <label className="radioLabel" style={{ marginTop: "1vh", width: "30vw" }}> Tidak, saya bukan nasabah Bank Muamalat </label>
                        <input
                            onChange={() => isNotNasabah()}
                            value="nonNasabah"
                            type="radio"
                            name="radio"
                        ></input>
                        <span className="checkmark"></span>
                    </label>

                    <label className="radioContainerInformation" style={{ marginLeft: "80px", height: "9vh", width: "35vw", display: "flex", borderRadius: "8px", position: "relative" }}>
                        <label className="radioLabel" > Ya, saya nasabah Bank Muamalat </label>
                        <input
                            onChange={() => isNasabah()}
                            type="radio"
                            name="radio"
                            value="nasabah"
                            style={{ width: "55vw" }}
                        ></input>
                        <span className="checkmark"></span>
                    </label>
                    {
                        nasabah ?
                            <>
                                <label className="basicLabel" style={{ marginLeft: "80px" }}>Nomor Rekening Bank Muamalat</label>
                                <input
                                    className="basicInput"
                                    placeholder="0890108090"
                                    type="number"
                                    min="0"
                                    style={{ marginLeft: "80px", height: "4vw", width: "30.7vw" }}
                                ></input>
                            </>

                            : null
                    }
                    <img src="./assets/image-5.png" />
                    <input
                        className="primaryButton"
                        type="submit"
                        value="Lanjut"
                        style={{ marginLeft: "400px" }}
                    ></input>

                </div>


            </div>
        </>
    )
}

export default InformasiAwal