import React from 'react'
import RowCard from './RowCard'

export const RowDisplay = ({ rowData, rowBaseUrl, horizontalBaseUrl, index }) => {
    const sectionName = "Section"
    const noData = "No Data Avaiable"
    return (
        <>
            <div className={'rowDisplayContainer'}>
                <div className='rowTitle'>
                    {sectionName} {index+1}
                </div>
                <div className={"pDiv1"}>
                    {rowData?.length > 0 ? <>
                        {rowData?.map((item) => {
                            return (
                                <RowCard item={item} key={item?._id + "r"} rowBaseUrl={rowBaseUrl} horizontalBaseUrl={horizontalBaseUrl} />
                            );
                        })}
                    </> : <div>{noData}</div>
                    }
                </div>
            </div>
        </>
    )
}