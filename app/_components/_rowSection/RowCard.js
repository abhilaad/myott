import React from 'react'
import Image from 'next/image'
import "./RowCard.css"

const RowCard = ({item, rowBaseUrl,horizontalBaseUrl, index, childIndex}) => {
    // calculating image properties responsively
    const imageWidth = typeof window !== "undefined" && window.innerWidth<1024 ? 150 : 250
    const imageHeight = typeof window !== "undefined" && window.innerWidth<1024 ? 250 : 150
    const imageSrc = typeof window !== "undefined" && window.innerWidth<1024 ? horizontalBaseUrl + "/" + item?.horizontal : rowBaseUrl + "/"+item?.vertical
  return (
    <div className='rowCardContainer' style={{position:"relative"}}>
      {index===0 && <div style={{position:"absolute",bottom:"40px", left:"3px",width:"15px", height:"30px", fontSize:"65px", fontWeight:800}}>{childIndex+1}</div>}
        <Image 
        src={imageSrc}
        alt={item?.vertical}
        width={imageWidth}
        height={imageHeight}
        style={{borderRadius: "10px"}}
        placeholder="blur"
        blurDataURL='/placeholder.jpg'
        />
    </div>
  )
}

export default RowCard