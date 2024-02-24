
import Navbar from "./_components/_navbar/Navbar";
import { SlideShow } from "./_components/_carousalSection/SlideShow";
import { Categories } from "./_components/_rowSection/Categories";

async function getCarouselData (){
  const res = await fetch("https://dev-api.stage.in/v23/assignment/carousel-data")
  return res.json()
}

async function getRowData (){
  const res = await fetch("https://dev-api.stage.in/v23/assignment/row-data")  
  return res.json()
}

export default async function Home() {
  const cData = await getCarouselData()
  const rData = await getRowData()
  const {rootUrlHorizontal, rootUrlVertical} = {...rData?.data}
  
  return (
   <div style={{ width:"100%"}}>
    <Navbar />
    {/* below component to render Carousal data */}
    <SlideShow images={cData?.data?.carousel} rootUrlHorizontal={rootUrlHorizontal}/>
    {/* below component to render multiple row Data via infinite scrolling   */}
    <Categories rData={rData} rootUrlVertical={rootUrlVertical} rootUrlHorizontal={rootUrlHorizontal} />
   </div>
  );
}
