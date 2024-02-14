import React, { useState } from 'react'
import '../../css/index.css'
import '../../ELEMENTX/abstract/abstract.css'
import { NavLink } from 'react-router-dom';
const Navb = () => {

    let [isClosed,setIsClosed] =  useState(true);

  return (
 <>
    <div className='fixed top-[33px] z-40 right-[30px]'>
        <div onClick={()=>setIsClosed(!isClosed)} className="nav-ctn-bubble lg-f text-[14px] font-[500] overflow-hidden w-[51px] h-[51px] rounded-full bg-main bcu">
            {
                isClosed == true ?
                <div className="nav-enter-txt absolute m-auto top-0 left-0 right-0 bottom-0 w-fit h-fit trans ">MENU</div>
                                :
                <div className="nav-close-txt absolute m-auto top-0 left-0 right-0 bottom-0 w-fit h-fit trans ">CLOSE</div>
            }
        </div>
    </div>
    <div className={`${isClosed == true ? 'menu-div-ctn' : 'menu-div-ctn-op'} z-30 mega-trans bg-sec`}>
   {
    isClosed == false ? 
   <div className="menu-Op">
     <div className="trans menu-op lg-f text-[16px] font-cl font-[500]">
    <div className="menu-ctn">
        <div className="nav-line mega-trans"></div>
                    <NavLink onClick={()=>setIsClosed(true)}  to='/' >HOME</NavLink>
                    <div className="nav-line mega-trans"></div>
</div>        
<div className="menu-ctn">
        <div className="nav-line mega-trans"></div>
                    <NavLink onClick={()=>setIsClosed(true)} to='/about' >ABOUT</NavLink>
                    <div className="nav-line mega-trans"></div>
</div> 
<div className="menu-ctn">
        <div className="nav-line mega-trans"></div>
                    <NavLink onClick={()=>setIsClosed(true)} to='/projects' >PROJECTS</NavLink>
                    <div className="nav-line mega-trans"></div>
</div> 
<div className="menu-ctn">
        <div className="nav-line mega-trans"></div>
                    <NavLink onClick={()=>setIsClosed(true)} to='/contact' >CONTACT</NavLink>
                    <div className="nav-line mega-trans"></div>
</div> 
        </div>
        <div className="logo text-[14px] font-[400] lg-f  fixed right-0 left-0 m-auto w-fit h-fit bottom-[30px] flex items-center gap-[10px]"><div>ICONIC</div><div className='logo-line'></div><div>PRESENT</div></div>
   </div>
        :
            <div className="trans menu-cl lg-f text-[14px] font-cl font-[500]">
    
            </div>
   }
    </div>
 </>
  )
}

export default Navb