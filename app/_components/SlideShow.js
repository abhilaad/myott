"use client"
import React, {useEffect, useState} from 'react'
import "./SlideShow.css";
import { Slide } from './Slide';

export const SlideShow = ({ images }) => {
    const [active, setActive] = useState(0);

    useEffect(()=>{
        let id = setInterval(()=>{
            setActive((prev)=>{
                return (prev + 1) % images.length;
            })
        },3000)
        return ()=> clearInterval(id)
    },[images.length])

    return (
      <div className="slideshow">
        {images.map((e, i) => (
          <Slide {...e} key={e.caption} active={i === active} />
        ))}
        <div className="bulleted-navigation">
          {images.map((e, i) => (
            <div
              className={`dot ${i === active ? "active" : ""}`}
              key={e.caption}
              onClick={() => {                
                setActive(i)
              }}
            />
          ))}
        </div>        
      </div>
    );
  };
