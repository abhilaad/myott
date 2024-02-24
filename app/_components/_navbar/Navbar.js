import "./Navbar.css"
export default function Navbar() {
    const title = "Stage"
    const buttonTtile = "Haryanvi"
    return (
        <div className="navContainer">
            <div className="navTitle">
                {title}                
            </div>
            <div>
                <button className="navButton">
                    {buttonTtile} <i className="fa fa-angle-down"></i>
                </button>
                <span className="navSearch"><i className="fa fa-search" aria-hidden="true"></i></span>
            </div>
        </div>
    );
}