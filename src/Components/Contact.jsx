import React from 'react'
import '../css/index.css';
import IconX from '../ELEMENTX/Ui/Icons/IconX';
import ButtonY from '../ELEMENTX/Ui/Buttons/ButtonY';
import ButtonX from '../ELEMENTX/Ui/Buttons/ButtonX';
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <motion.div
    initial={{ opacity: 0,  translateY : 200 }}
    animate={{ opacity: 1, translateY : 0}}
      transition={{ delay: 0,duration : 0.6}}
    >
    <div className='ct-ctn'>
      <div className="ct-title-ctn  lg-f">
            <div className="ct-title font-cl">GET IN TOUCH!</div>
            <div className="ct-desc font-cl">Get in touch with me to discuss what you want to know.</div>
        </div>
        <div className="ct-inp-ctn ">
           <div className="ct-info-ctn">
            <div className="ct-ph mb-[20px] lg-f text-[18px] ">+95 9794302034</div>
            <div className="ct-locate lg-f text-[18px]">South Okkalapa,Yangon</div>
            <div className='ct-locate lg-f text-[18px] font-[600]'> Myanmar</div>
           </div>
            <div className="ct-inp">
               <form action="">
                <div className="ct-inp-form">   
                <div className="ct-inp-ctn-form">
                    <input type="text" className='ct-input sec-f font-cl' placeholder='Name'/>
                </div>
                <div className="ct-inp-ctn-form">
                    <input type="email" className='ct-input sec-f font-cl' placeholder='Email'/>
                </div>
                <div className="ct-inp-ctn-form mt-[30px]">
                    <div className="sec-f text-[18px] font-cl font-[500]">Message</div>
                    <textarea type="" className=' ct-input-ta sec-f font-cl' placeholder='Ask anything you want to know...'></textarea>
                </div>
                      </div>
                      <ButtonX text={'submit'}/>
                </form>
            <div className="ct-social-ctn flex gap-[10px]">
                <IconX type='facebook' />
                <IconX type='instagram' />
                <IconX type='telegram' />
                <IconX type='tiktok' />
            </div>
            </div>
        </div>
    </div>
    </motion.div>
  )
}

export default Contact