
import Navbar from "./_components/Navbar";
import { SlideShow } from "./_components/SlideShow";
import { Categories } from "./_components/Categories";

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
  const {rootUrlHorizontal, rootUrlVertical} = rData?.data
  
  const imageData = cData?.data?.carousel?.map((item)=>{    
    return {
      image_url: rootUrlHorizontal+ "/"+item?.ratio1,
      caption: item?.ratio1
    }
  })
  
  return (
   <div style={{ width:"100%"}}>
    <Navbar />
    <SlideShow images={imageData} />   
    <Categories rData={rData} rootUrlVertical={rootUrlVertical} />    

   </div>
  );
}
