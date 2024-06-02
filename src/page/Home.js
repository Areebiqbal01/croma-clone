import React, { useEffect, useState } from 'react'
import { IoPencil } from 'react-icons/io5'
import { MdLocationOn } from 'react-icons/md'
import { Link } from 'react-router-dom'
import headerImage from "../assests/headerImage.png"
import headerImageMobile from "../assests/headerImageMobile.png"
import offer1 from '../assests/offer1.png'
import offer1Mobile from '../assests/offer1Mobile.png'
import Box from '../components/Box'
import SliderAuto from '../components/SliderAuto'
import { accessoriesData } from '../data/accessories.js'
import Card from '../components/Card'

import toptrend from '../assests/toptrend.png'
import mobiles from '../assests/mobiles.png'
import television from '../assests/television.png'
import laptop from '../assests/laptop.png'
import headphones from '../assests/headphones.png'
import hometheatres from '../assests/hometheatres.png'
import AC from '../assests/AC.png'
import refrigerator from '../assests/refrigerator.png'
import washingM from "../assests/washingmachine.png"
import tab from "../assests/tablet.png"
import speaker from "../assests/speakers.png"
import wear from '../assests/wearable.png'
import kitchenappliance from '../assests/kitchenappliances.png'
import grooming from '../assests/grooming.png'
import waterpurifiers from '../assests/waterpurifiers.png'

import hightlight from '../assests/hightlights1.avif'
import hightlight2 from '../assests/hightlights2.avif'
import hightlight3 from '../assests/hightlights3.avif'
import hightlight4 from '../assests/hightlight4.avif'
import hightlight5 from '../assests/hightlight5.avif'
import hightlight6 from '../assests/hightlight6.avif'
import hightlight7 from '../assests/hightlight7.avif'
import hightlight8 from '../assests/hightlight8.webp'
import hightlight9 from '../assests/hightlight9.avif'
import hightlight10 from '../assests/hightlight10.avif'
import hightlight11 from '../assests/hightlight11.avif'

import newatcroma1 from '../assests/newatcroma1.avif'
import newatcroma2 from '../assests/newatcroma2.avif'
import newatcroma3 from '../assests/newatcroma3.avif'
import newatcroma4 from '../assests/newatcroma4.avif'
import newatcroma5 from '../assests/newatcroma5.avif'
import newatcroma6 from '../assests/newatcroma6.avif'
import newatcroma7 from '../assests/newatcroma7.avif'
import newatcroma8 from '../assests/newatcroma8.avif'
import newatcroma9 from '../assests/newatcroma9.avif'
import newatcroma10 from '../assests/newatcroma10.avif'
import newatcroma11 from '../assests/newatcroma11.avif'
import newatcroma12 from '../assests/newatcroma12.avif'
import { DealOfTheDay } from '../data/DealOfTheday.js'
import axios from 'axios'

const Home = () => {
     const [state, setState] = useState({
          DealOfTheDayData:[],
          TopTrendingDeal:[]
     })
     useEffect(()=>{
         let promises=[ axios({
          method: "GET",
          url:'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?sort={"price":-1}',
          headers:{
            projectID: "f104bi07c490"
          }
          }),
          axios({
               method: "GET",
               url:'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?sort={"rating":-1}',
               headers:{
                 projectID: "f104bi07c490"
               }
               })]
          Promise.all(promises).then(res => {
          if(res.length > 0){
             setState(s=>({...s, DealOfTheDayData: res[0].data.data, TopTrendingDeal: res[1].data.data}))
             
          }
                    // console.log("res", res)
          })
        
         
        },[])
     
        const [airConditioners, setairConditioners] = useState([])
        const [televisions, setTelevisions] = useState([])
        const [kitchenappliances, setKitchenappliances] = useState([])

       
     useEffect(()=>{

          axios({
            method: "GET",
            url:'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"ac"}',

            headers:{
              projectID: "f104bi07c490"
            }
            }).then(res => {
               setairConditioners(res.data.data)
          //   console.log("res", res)
            })
            .catch(e => {
            console.error(e)
            })

            axios({
               method: "GET",
               url:'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"kitchenappliances"}',
   
               headers:{
                 projectID: "f104bi07c490"
               }
               }).then(res => {
                  setKitchenappliances(res.data.data)
             //   console.log("des", res)
               })
               .catch(e => {
               console.error(e)
               })

               axios({
                    method: "GET",
                    url:'https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"tv"}',
        
                    headers:{
                      projectID: "f104bi07c490"
                    }
                    }).then(res => {
                       setTelevisions(res.data.data)
                  //   console.log("des", res)
                    })
                    .catch(e => {
                    console.error(e)
                    })
        },[])

   
  
     return (
    <div className='text-white'>
         <div className='flex items-center gap-2 md:hidden 10 bg-black text-white'>
                <MdLocationOn className='text-xl'/>
                <p className='whitespace-nowrap text-sm'>Mumbai, 400049</p>
                <IoPencil className='text-xs'/>
         </div>
       
         <div>
             <img src={headerImage} alt='cover here' className='hidden md:block'/>
             <img src={headerImageMobile} alt='cover mobile' className='block md:hidden'/>
         </div>
      
        <Box>
          <div className='p-5 rounded-md overflow-hidden'>
             <Link to=""><img src={offer1} alt='offer' className='rounded-md overflow-hidden hidden md:block'/></Link>
             <Link to=""><img src={offer1Mobile} alt='offer Mobile' className='rounded-md overflow-hidden block md:hidden'/></Link>
          </div>
            
          <SliderAuto width={125}>
            <div className='flex gap-3 md:gap-6'>
               <img src={toptrend} className='w-14 md:min-w-[125px]' alt='trending'/>
               <img src={mobiles} className='w-14 md:min-w-[125px]' alt='mobiles'/>
               <img src={television} className='w-14 md:min-w-[125px]' alt='television'/>
               <img src={laptop} className='w-14 md:min-w-[125px]' alt='laptop'/>
               <img src={headphones} className='w-14 md:min-w-[125px]' alt='headphones'/>
               <img src={AC} className='w-14 md:min-w-[125px]' alt='AC'/>
               <img src={hometheatres} className='w-14 md:min-w-[125px]' alt='hometheatres'/>
               <img src={refrigerator} className='w-14 md:min-w-[125px]' alt='refrigerator'/>
                
            </div>

            <div className='flex'>
                <img src={washingM} className='w-14 md:min-w-[125px]' alt='washingmachine'/>
                <img src={tab} className='w-14 md:min-w-[125px]' alt='tablet'/>
                <img src={speaker} className='w-14 md:min-w-[125px]' alt='speakers'/>
                <img src={wear} className='w-14 md:min-w-[125px]' alt='wearable'/>
                <img src={kitchenappliance} className='w-14 md:min-w-[125px]' alt='kitchenappliances'/>
                <img src={grooming} className='w-14 md:min-w-[125px]' alt='grooming'/>
                <img src={waterpurifiers} className='w-14 md:min-w-[125px]' alt='waterpurifiers'/>
                
            </div>
         </SliderAuto>


            {/* {DealOfTheDay} */}
            <h2 className='font-medium text-2xl my-5'>Deals Of The Day</h2>
            <div>
                    <SliderAuto width={285}>
                         {
                              state.DealOfTheDayData?.map((el) =>{
                                  // console.log("el", el)
                                   return(
                                      <Card
                                      key = {el.id}
                                      id = {el.id}
                                   //    title = {el.brand}
                                      name = {el.name}
                                      img = {el.displayImage}
                                      pricesell = {el.price}
                                      pricedis = {"99999"}
                                      rating = {el.ratings}
                                      />
                                   )
                              })
                         }
                    </SliderAuto>
               </div>
                 


             {/* {Highlights} */}
             <h2 className='font-medium text-2xl my-5'>Highlights</h2>
             <div className='md:px-5 flex justify-between gap-3 my-5 overflow-scroll scrollbar-none'>
                 <img src={hightlight} className='h-44 md:h-60 rounded-lg' alt='hightlight1'/>
                 <img src={hightlight2} className='h-44 md:h-60 rounded-lg' alt='hightlight2'/>
                 <img src={hightlight3} className='h-44 md:h-60 rounded-lg' alt='hightlight3'/>
             </div>

             <SliderAuto width={380} isflex='flex'>
                  <img src={hightlight4} className='h-44 md:h-60 rounded-lg' alt='hightlight4'/>
                  <img src={hightlight5} className='h-44 md:h-60 rounded-lg' alt='hightlight5'/>
                  <img src={hightlight6} className='h-44 md:h-60 rounded-lg' alt='hightlight6'/>
                  <img src={hightlight7} className='h-44 md:h-60 rounded-lg' alt='hightlight7'/>
             </SliderAuto>

             <SliderAuto width={380} isflex='flex'>
                  <img src={hightlight8} className='h-44 md:h-60 rounded-lg' alt='hightlight4'/>
                  <img src={hightlight9} className='h-44 md:h-60 rounded-lg' alt='hightlight5'/>
                  <img src={hightlight10} className='h-44 md:h-60 rounded-lg' alt='hightlight6'/>
                  <img src={hightlight11} className='h-44 md:h-60 rounded-lg' alt='hightlight7'/>
             </SliderAuto>


                {/* {Top Trending Deals} */}
             <h2 className='font-medium text-2xl my-5'>Top Trending Deals</h2>
             <div>
                    <SliderAuto width={285}>
                         {
                              state.TopTrendingDeal?.map((el) =>{
                                   
                                   return(
                                      <Card
                                      key = {el.id}
                                      id = {el.id}
                                   //    title = {el.brand}
                                      name = {el.name}
                                      img = {el.displayImage}
                                      pricesell = {el.price}
                                      pricedis = {9999}
                                      rating = {el.ratings}

                                      />
                                   )
                              })
                         }
                    </SliderAuto>
               </div>
              





             {/* New at croma */}
             <h2 className='font-medium text-2xl my-5'>New at croma</h2>
             <div className='flex gap-4'>
                  <img src={newatcroma1} className='w-1/2 rounded-lg' alt='newatcroma1'/>
                  <img src={newatcroma2} className='w-1/2 rounded-lg' alt='newatcroma2'/>
             </div>

             <SliderAuto width={245} isflex="flex">
                   <img src={newatcroma3} className='h-44 md:h-60 rounded-lg' alt=''/> 
                   <img src={newatcroma4} className='h-44 md:h-60 rounded-lg' alt=''/> 
                   <img src={newatcroma5} className='h-44 md:h-60 rounded-lg' alt=''/> 
                   <img src={newatcroma6} className='h-44 md:h-60 rounded-lg' alt=''/> 
                   <img src={newatcroma7} className='h-44 md:h-60 rounded-lg' alt=''/> 
                   <img src={newatcroma8} className='h-44 md:h-60 rounded-lg' alt=''/> 
                   <img src={newatcroma9} className='h-44 md:h-60 rounded-lg' alt=''/> 
                   <img src={newatcroma10} className='h-44 md:h-60 rounded-lg' alt=''/> 
                   <img src={newatcroma11} className='h-44 md:h-60 rounded-lg' alt=''/> 
                   <img src={newatcroma12} className='h-44 md:h-60 rounded-lg' alt=''/> 
                     
             </SliderAuto>

             {/* {Ac} */}
             <h2 className='font-medium text-2xl my-5'>Air Conditioners</h2>
               <div>
                    <SliderAuto width={285}>
                         {
                              airConditioners?.map((el) =>{
                                   
                                   return(
                                      <Card
                                      key = {el.id}
                                      id = {el.id}
                                   //    title = {el.title}
                                      name = {el.name}
                                      img = {el.displayImage}
                                      pricesell = {el.price}
                                      pricedis = {"9999"}
                                      rating = {el.ratings}

                                      />
                                   )
                              })
                         }
                    </SliderAuto>
               </div>

                {/* {Televisions} */}
             <h2 className='font-medium text-2xl my-5'>Televisions</h2>
               <div>
                    <SliderAuto width={285}>
                         {
                              televisions?.map((el) =>{
                                   
                                   return(
                                      <Card
                                      key = {el.id}
                                      id = {el.id}
                                   //    title = {el.title}
                                      name = {el.name}
                                      img = {el.displayImage}
                                      pricesell = {el.price}
                                      pricedis = {"9999"}
                                      rating = {el.ratings}

                                      />
                                   )
                              })
                         }
                    </SliderAuto>
               </div>
                 

                 {/* {kitchenappliances} */}
                  <h2 className='font-medium text-2xl my-5'>Kitchen Appliances</h2>
               <div>
                    <SliderAuto width={285}>
                         {
                              kitchenappliances?.map((el) =>{
                                   
                                   return(
                                      <Card
                                      key = {el.id}
                                      id = {el.id}
                                   //    title = {el.title}
                                      name = {el.name}
                                      img = {el.displayImage}
                                      pricesell = {el.price}
                                      pricedis = {"9999"}
                                      rating = {el.ratings}

                                      />
                                   )
                              })
                         }
                    </SliderAuto>
               </div>

             
                 
               {/* Accessories under 999 */}
               <h2 className='font-medium text-2xl my-5'>Accessories under 999</h2>
               <div>
                    <SliderAuto width={285}>
                         {
                              accessoriesData?.map((el) =>{
                                   
                                   return(
                                      <Card
                                      key = {el.id}
                                      id = {el.id}
                                      title = {el.title}
                                      img = {el.img}
                                      pricesell = {el.priceSell}
                                      pricedis = {el.priceDisc}
                                      />
                                   )
                              })
                         }
                    </SliderAuto>
               </div>
                 


        </Box>
        

    </div>
  )
}

export default Home