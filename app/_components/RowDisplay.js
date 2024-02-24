"use client"
import React, { useEffect, useState } from 'react'
import RowCard from './RowCard'

export const RowDisplay = ({ rowData, rowBaseUrl, index }) => {
    console.log("abhii row", rowData)
    return (
        <>
            <div className={'rowDisplayContainer'}>
                <div className='rowTitle' style={{padding: "20px 0px", fontWeight:700, fontSize: "24px"}}>
                    Section {index+1}
                </div>
                <div className={"pDiv1"}>
                    {rowData?.length > 0 ? <>
                        {rowData?.map((item) => {
                            return (
                                <RowCard item={item} key={item?._id + "r"} rowBaseUrl={rowBaseUrl} />
                            );
                        })}
                    </> : <div>No Data Avaiable</div>
                    }
                </div>
            </div>
        </>
    )
}