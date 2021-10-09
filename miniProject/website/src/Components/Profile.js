import Footer from "./Footer"
import HeadingUtama from "./HeadingUtama"
import "../Styles/Profile.css"
import Footer2 from "./Footer2"
import Footer3 from "./Footer3"

function Profile() {
    return (
        <>
            <HeadingUtama />
            <div id="titleWrapper">
                <div id="title">
                    <h3 id="h3Title">Profile</h3>
                    <div id="profileButtonWrapper">
                        <input
                            className="profileButton"
                            type="submit"
                            value="Pengajuan Saya"
                        ></input>
                        <input
                            className="profileButtonDisable"
                            type="submit"
                            value="Formulir Tersimpan"
                            disabled
                        ></input>
                    </div>

                </div>
            </div>


            <div className="wrapper">
                <div className="basicForm">
                    <h2 className="titleOne">Formulir Tersimpan</h2>
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

                        <label className="uploadButton" for="mutasi">
                            Edit
                        </label>
                        <input id="mutasi" style={{ display: "none" }}></input>
                    </div>
                </div>
            </div>
            <Footer3 />
        </>
    )
}

export default Profile