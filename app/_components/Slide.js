"use client"
import "./Slide.css"
import Image from "next/image";
export const Slide = ({ image_url, caption, active }) => {    
    return (
      <div className={`slide ${active ? "active" : ""}`}>
        <Image src={image_url} alt={caption} className="imageWidth" width={700} height={400} />
        <span>{caption}</span>
      </div>
    );
  };