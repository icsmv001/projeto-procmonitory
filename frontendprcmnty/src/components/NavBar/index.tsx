import ImgDsDark from "assets/img/ds-monitory.svg";
//import ImgDsDark from "assets/img/ds-dark.svg";


const NavBar = () => {
    return (
        
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
            <div className="container">

<text x="10" y="50" font-size="24" fill="black">PROC-MONITORY</text>

                <nav className="my-2 my-md-0 mr-md-3">
                    <img src={ImgDsDark} alt="PROC-MONITORY" width="120" />
                </nav>
            </div>
        </div>
    );
}

export default NavBar;
