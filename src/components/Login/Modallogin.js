import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
// import { createPortal } from 'react-dom'


const Modallogin = ({closeModallogin}) => {

  const navigate = useNavigate()

  const handleLoginForm = () => {
    navigate('/loginform')
  }

  const handleCreateAccount = () => {
      navigate('/createAccount')
  }

  return(
    <>
    <div className='fixed left-0 bottom-0 right-0 top-0 bg-[#2f2f2f] opacity-[0.9]' onClick={closeModallogin}></div>
    <div className='fixed top-[20%] left-[31%] w-[39%] translate-[-50%, 50%] rounded-sm bg-[#161616] text-center text-[#fdfdfd] '>
    <div className='absolute right-0 pr-[7px] pt-[5px] text-[20px]' onClick={closeModallogin}><RxCross2 /></div>
    <div className='pt-[10px]'>
        <button className='mt-[22px] mb-[9px] rounded-l-[3px] pt-[8px] pb-[5px] pr-[15%] pl-[15%] text-[13px] outline outline-[0.5px] outline-[#b9b9b9]' onClick={() =>{
          handleLoginForm()
          closeModallogin()
          }}>LogIn</button>
        <button className='mt-[22px] mb-[9px] rounded-r-[3px] pt-[8px] pb-[5px] pr-[13%] pl-[13%] text-[13px] outline outline-[0.5px] outline-[#b9b9b9]' onClick={() =>{
          handleCreateAccount()
          closeModallogin()
        }}>Create Account</button>
    </div>
    <div className='text-[15px] mb-[18px]'>Please enter your EmailID</div>
    <input className='w-[72%] pb-[3px] pr-[3px] text-[20px] bg-[#201f1f] outline outline-[2px] outline-[#b9b9b9] rounded-[2.5px] pt-[4px]' placeholder='Enter your EmailID'></input>
    <div class="items-center mb-4 mt-[15px]">
    <input
              id="helper-checkbox-1"
              aria-describedby="helper-checkbox-text-1"
              type="checkbox"
              value=""
              className="w-4 h-4 accent-[#12daa8] bg-[#161616] border-gray-300 focus:ring-transparent "
       />
   <label class="ms-2 text-[13px] font-medium mt-[13px]">Keep me signed in</label>
  </div>
    <button className='bg-[#12daa8] font-semibold text-[black] text-[13px] pr-[32%] pl-[32%] pt-[8px] pb-[8px] mb-[28px] rounded-[4px]'>Continue</button>
</div>
</>
//  document.getElementById("Modallogin")
  )
}

export default Modallogin