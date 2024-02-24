'use client'
 
export default function Error({
  error,
  reset,
}) {
  return (
    <div style={{display: "flex", height: "100vh", width:"100vw", justifyContent: "center", alignItems: "center", fontSize: "24px", fontWeight:"600"}}>
      <h2>Something went wrong!</h2>      
    </div>
  )
}