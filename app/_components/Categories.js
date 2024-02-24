"use client"
import React, { useEffect, useState, useRef } from 'react'
import { RowDisplay } from './RowDisplay'

export const Categories = ({rData,rootUrlVertical}) => {
    const [loading, setLoading] = useState(true)
    const [page,setPage] = useState(1)
    const [lastElement, setLastElement] = useState(null)
    const [categoryData, setCategoryData] = useState([])
    console.log("Abhx page", page, "cat data", categoryData)

    let observer = useRef(null)   
    useEffect(()=>{
        setLoading(false)
        observer.current = new IntersectionObserver((entries)=>{
            const first = entries[0]
            
            if(first.isIntersecting){                                          
                setPage((prev)=> prev+1)
            }
        })
    },[]) 

    const callPage = ()=>{
        let arr = [1,2,3]
        setCategoryData((prev)=> prev.concat(arr))        
    }

    useEffect(()=>{
        if(page<6){            
            callPage()
        }
    },[page])

    useEffect(()=>{
        const currentElement = lastElement
        const currentObserver = observer.current
        
        if(currentElement){
            currentObserver?.observe(currentElement)
        }
        return ()=>{
            if(currentElement){
                currentObserver?.unobserve(currentElement)
            }
        }
    },[lastElement])
  return (
    <div>
        {loading && <div>Loading...</div>}
        {categoryData?.map((item,index)=>{
            if(index === categoryData?.length - 1){
                return (<div key={index+"c"} ref={setLastElement}>
                    <RowDisplay rowData={rData?.data?.rowData} rowBaseUrl={rootUrlVertical} index={index} />
                </div>)
            }
            else{
                return (<RowDisplay key={index+"c"} rowData={rData?.data?.rowData} rowBaseUrl={rootUrlVertical} index={index} />)
            }
        })}
    </div>
  )
}
