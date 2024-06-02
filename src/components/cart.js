import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const ratingAr = [1, 2, 3, 4, 5]
function Cart() {
  return (
    <div className='flex bg-white pb-[15%]'>

      <div className='bg-[#f3f3f3] flex md:flex min-w-[40rem] pl-[2rem] mt-[15%] mr-[7%] pt-[1.5rem] gap-[6%] ml-[7%]'>
        <div className='pt-[2%]'>
          <div className='pt-[4%] pr-[5%] pl-[2.5%]'>photo</div>
        </div>
        <div>
        <div className='pt-[2.5%] pb-[13px] font-semibold'>Name</div>
        <div className='flex flex-row pb-[17px]'>
          {ratingAr.map((x) => {
            let color = ''
            if (x <= (x?.ratings)) {
              color = 'text-[#12daa8]'
            }

            return (
              <AiFillStar className={color} key={x} />
            )
          })}
        </div>   
        <div className='pt-[18%]'>
          <button class="mr-[15px] pr-[31px] pl-[31px] bg-transparent hover:bg-[#12daa8] text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
            Move to Wishlist
          </button>
          <button class="bg-transparent hover:bg-[#12daa8] text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
            Remove
          </button>
        </div>
      </div>
      <div className=''>
        <div className='pl-[7rem] font-bold'>₹paisa</div>
      </div>
      </div>

      <div className='text-[black] bg-[#f3f3f3] pl-[10px] w-[100%] mr-[6rem] mt-[15%]'>
        <div className='text-[18px] text-[#0e0d0d] font-bold mb-[5px]'>Order Summary</div>
        <div className='mb-[4px]'>Original Price</div>
        <div className='mb-[4px]'>Savings</div>
        <div className='mb-[4px]'>Delivery</div>
        <div className='mb-[4px]'>Total</div>
        <div className=''><button className='bg-[#12daa8] mt-[9px] mr-[4px] pr-[12rem] pl-[11rem] pt-[5px] pb-[5px] mb-[25px] rounded-[4px]'>Checkout</button></div>
      </div>
    </div>
  )
}

export default Cart