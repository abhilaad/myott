import Image from "next/image";
export default function Navbar() {
    return (
        <div style={{ display: "flex", width: "100%", justifyContent: "space-between", marginTop:"10px" }}>

            <div>
                Stage                
            </div>
            <div>
                <button style={{ width: "6rem", padding: "4px 10px", textAlign: "center", borderRadius: "10px" }}>
                    Haryanvi <i className="fa fa-angle-down"></i>
                </button>
                <span style={{ width: "3rem", padding: "4px 10px"}}><i className="fa fa-search" aria-hidden="true"></i></span>
            </div>
        </div>
    );
}