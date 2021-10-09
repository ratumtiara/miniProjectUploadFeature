import Footer from "./Footer"
import HeadingUtama from "./HeadingUtama"
import "../Styles/Profile.css"

function ProfilePengajuan() {
    return (
        <>
            <HeadingUtama />
            <div id="titleWrapper">
                <div id="title">
                    <h3 id="h3Title">Profile</h3>
                    <div id="profileButtonWrapper">
                        <input
                            className="profileButtonDisable"
                            type="submit"
                            value="Pengajuan Saya"
                            disabled
                        ></input>
                        <input
                            className="profileButton"
                            type="submit"
                            value="Formulir Tersimpan"
                            disabled
                        ></input>
                    </div>

                </div>
            </div>


            <div className="wrapper">
                <div className="basicForm">
                    <h2 className="titleOne">Pengajuan Saya</h2>
                    <hr className="divider" />
                    <div className="fileUploadWrapper">
                        <div className="uploadFileTitleWrapper">
                            <label className="uploadFileTitle">
                                IDFORM202110701
                            </label>
                            <label className="uploadFileDescription">
                                Pengisian Terakhir 01-07-2021 10:00
                            </label>
                        </div>

                        <h5 id="keterangan">Sedang Proses Penilaian</h5>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProfilePengajuan