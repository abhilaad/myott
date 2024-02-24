import React from 'react'
import Image from 'next/image'
import "./RowCard.css"

const RowCard = ({item, rowBaseUrl,horizontalBaseUrl}) => {
    // calculating image properties responsively
    const imageWidth = typeof window !== "undefined" && window.innerWidth<1024 ? 150 : 250
    const imageHeight = typeof window !== "undefined" && window.innerWidth<1024 ? 250 : 150
    const imageSrc = typeof window !== "undefined" && window.innerWidth<1024 ? horizontalBaseUrl + "/" + item?.horizontal : rowBaseUrl + "/"+item?.vertical
  return (
    <div className='rowCardContainer'>
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