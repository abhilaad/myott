import "./Slide.css"
import Image from "next/image";
export const Slide = ({ data, active, baseUrl }) => {   
    const imageUrl =  typeof window !== "undefined" && window.innerWidth < 1024 ? baseUrl+ "/"+data?.ratio2 : baseUrl+ "/"+data?.ratio3
        
    return (
      <div className={`slide  ${active ? "active" : ""}`}>       
        <Image src={imageUrl} alt={"photo"} layout="fill" />                
      </div>
    );
  };