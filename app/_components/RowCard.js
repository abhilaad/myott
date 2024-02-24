import React from 'react'
import Image from 'next/image'

const RowCard = ({item, rowBaseUrl}) => {
  return (
    <div style={{width:"100%",height:"100%", margin: "5px", padding: "0px 10px"}}>
        <Image 
        src={rowBaseUrl + "/" + item?.vertical}
        alt={item?.vertical}
        width={window.innerWidth<1024 ? 150 : 250}
        height={window.innerWidth<1024 ? 250 : 150}
        style={{borderRadius: "10px"}}
        />
    </div>
  )
}

export default RowCard