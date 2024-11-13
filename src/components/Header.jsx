import LogoKreasi from "../LOGO KREASI.jpg"

const Logo = {
    nama: "Rumah Kreasi",
    imageUrl: "",
    imageSize: 150,
};

function Header() {
    return(
        <div className="header">
            <div className="header-logo">
                <img 
                className="App-logo"
                src={LogoKreasi}
                alt={"kreasi" + Logo.nama}
                style={{width: Logo.imageSize, height: Logo.imageSize}}
                />
                <h3>{Logo.nama}</h3>
            </div>
            <div>
                <h1>KREASI PRODUCTION PERCETAKAN </h1>
                <h2>Rumah Kreasi </h2>
            </div>
        </div>
    );
}

export default Header;