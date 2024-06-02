import React, { useEffect, useRef, useState } from 'react'
import hightlight from '../assests/hightlights1.avif'
import { FaChevronUp, FaChevronDown  } from "react-icons/fa";
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {AiFillStar} from 'react-icons/ai'
import DOMPurify from 'dompurify';
import { MdReviews } from 'react-icons/md';


// const width = "5rem"
const ratingAr=[1,2,3,4,5]
function DetailsProduct(){

  const navigate = useNavigate()
  const handleCart=()=>{
   navigate('/cart')
  }
  const [selectedImage, setSelectedImage] = useState("")
  let [searchParams, setSearchParams] = useSearchParams();
  const[productDeatails, setProductDetails] = useState()
  const [showVideo, setShowVideo] = useState(null)
  let productID = searchParams.get("id")
  const[review, setReview] = useState([])
  // console.log("productid", productID)

  useEffect(()=>{
    if(productID){
    axios({
      method: "GET",
      url:`https://academics.newtonschool.co/api/v1/ecommerce/product/${productID}`,
      

      headers:{
        projectID: "f104bi07c490"
      }
      }).then(res => {
        setProductDetails(res.data.data)
        setSelectedImage(res.data.data.displayImage)   
        // setRatings(res.data.data.ratings)   
      })
      .catch(e => {
      // console.error(e)
      })
    }
  },[productID])
// console.log("setRatings", setRatings)
// if(ratings) ratings=Math.round(ratings)
useEffect(()=>{
  if(productID){
  axios({
    method: "GET",
    url:`https://academics.newtonschool.co/api/v1/ecommerce/review/${productID}`,
    

    headers:{
      projectID: "f104bi07c490"
    }
    }).then(res => {
      setReview(res.data.data)   
      // setRatings(res.data.data.ratings)   
    })
    .catch(e => {
    console.error(e)
    })
  }
},[productID])
// console.log("texttt", review)


  const contentRef = useRef()

  const scrollRight = () => {
    contentRef.current.scrollTop += 50 ;
  }

  const scrollLeft = ()=>{
    contentRef.current.scrollTop -= 50 ;
  }
  
  const handleSliderImage =(url)=>{
     setSelectedImage(url)
     setShowVideo(null)
  }

  return (
    <> 
  <div className='flex gap-[3rem]'>
    <div className='min-w-[11rem] flex-col pl-[6rem] pt-[1.5rem] md:flex gap-3'  >
    <button className='text-white text-[28px]  ml-[23px]' onClick={scrollLeft}>
    <FaChevronUp />
    </button> 
   <div className='h-[20rem] w-[80px] overflow-scroll scrollbar-none transition-all' ref={contentRef}>
    {productDeatails?.images.map((url,index)=>{
          return(
            <div key={url} onClick={()=>handleSliderImage(url)}>
               <img className='size-[80px] pt-[14px] pb-[5px] focus:ring focus:border-[#12daa8]' src={url} alt='slider' ></img> 
                           
            </div>
          )
    })}
    <div  onClick={()=>{setShowVideo(productDeatails?.videos[0])}}>
        <img className='size-[80px] pt-[14px] pb-[5px]'  src={"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:No_image.png/Croma%20Assets/UI%20Assets/video_thumbnail.png"} alt='slider' ></img> 
                        
    </div>
    
  </div>
    <button className='text-white text-[28px]  ml-[23px]' onClick={scrollRight}>
    <FaChevronDown />
    </button>
    </div>

    <div className='h-[27rem] min-w-[20rem]'>
      {
        showVideo ?
      <video width="400" controls className='mt-[51px]'>
        <source src={showVideo} type="video/mp4" />
    </video>
      :
      <img className='object-contain h-[100%] w-[100%]' src={selectedImage} alt='normal'></img>
      }
        
    </div>
 
    <div className='mt-[3rem] w-[100%] mr-[6rem]'>
     <div className='text-white text-[25px] font-medium'>{productDeatails?.name}</div>
     <div className='text-[#12daa8] flex'>{Math.round(productDeatails?.ratings)}<AiFillStar className='mt-[4px]'/></div>
     <div className='text-white text-[27px] font-semibold'>{productDeatails?.price}</div>
     <hr className= "h-px my-8 bg-gray-700 border-0 dark:bg-gray-700"></hr>
     <div className='text-white ml-[6rem] text-[14px] font-medium mt-[-28px] pb-[10px]'>Save 9999, 35.00% Off</div>
     <div className='text-white ring ring-gray-700 outline-none rounded-[5px] '>
     <div className=' p-[15px] font-semibold'>Key Features </div>
     <div className=' font-semibold ml-[15px] pb-[8px]'>{productDeatails?.features.map((item, index)=>{
      return(
        <li key={item}>
          {item}
        </li>
      )
     })}</div>
     </div>
     </div>
     </div>
     <div className='ring ring-gray-700 outline-none rounded-[5px] mr-[5.7rem] p-[22px] mt-[2rem] ml-[4rem]'>
     <div className='text-white font-bold text-[20px] ml-[10px] '>Overview</div>
     <div
         dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(productDeatails?.description),
                      }}
         className='text-[white] mt-[15px] ml-[11px]'></div>
     {/* <div className='text-white '></div> */}
     </div>

     <div className='ring ring-gray-700 outline-none rounded-[5px] mr-[5.6rem] p-[22px] mt-[2rem] ml-[4rem]'>
     <div className='text-white font-bold text-[20px] ml-[10px] '>Reviews</div>
     {
      review.map((item, index)=>{
       return(
        <div  key={index} className='text-gray-400 text-lg  my-1 mt-[17px] ml-[11px]'>

        <div className='text-white font-bold text-[18px]' >{item?.user}</div>
        <div className='flex mt-[5px] ml-[-2px]'>
        {ratingAr.map((x)=>{
          let color = ''
          if(x <= (item?.ratings)) {
          color = 'text-[#12daa8]'
          }
        
        return(
           <AiFillStar className={color} key={x}/>
        )  
       })
          
        }
        <div className='text-white mt-[-5px] ml-[6px]'>{Math.floor(item?.ratings)}</div>
        </div>
     <div className='text-white text-[15px]'>{item?.text}</div>

     </div>
       )
      })
   
     }
     
     </div>

     <footer className='flex fixed bottom-0 bg-[#1b1a1a] mt-[20px] w-[100%]'>
      <div className='flex ml-[70px]'>
      <img className='size-[40px] mt-[10px] mr-[3.5px]' src={productDeatails?.displayImage} alt='image'></img>
     <div className=' text-white text-[16px] mt-[17px] mr-[10rem] font-medium'>{productDeatails?.name}</div>
     </div>
    <div className=' flex mt-[14px] mb-[8px]'>
     <button type="button" class="text-black pl-[45px] pr-[45px] bg-[#12daa8]  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Buy Now</button>
     <button type="button" class="text-white pl-[45px] pr-[45px] bg-[#272626] outline outline-white outline-1 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none" onClick={handleCart}>Add to Cart</button>
     </div>
     </footer>
     
    </>

  )
}

export default DetailsProduct