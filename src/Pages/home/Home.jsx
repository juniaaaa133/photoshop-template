import React from 'react'
import '../../css/index.css'
import ButtonX from '../../ELEMENTX/Ui/Buttons/ButtonX';
import ButtonY from '../../ELEMENTX/Ui/Buttons/ButtonY';
import About from '../../Components/About';
import Work from '../../Components/Work';
import Service from '../../Components/Service';
import Contact from '../../Components/Contact';
import { useNavigate } from 'react-router';
import {motion} from 'framer-motion'

const Home = () => {

let navigate = useNavigate();

let Nav = (path) => navigate(path);

  return (
<>
<div className='sec-ctn'>
      <div className="hm-layer bg-main"></div>
      <div className="hm-logo-txt">
        <div className="hm-logotxt-name lg-f font-cl">Wiliam Jack</div>
        <div className="hm-logotxt-line badge-cl"></div>
      </div>
      <motion.div
initial={{ opacity: 0,  translateY : 200 }}
animate={{ opacity: 1, translateY : 0}}
  transition={{ delay: 0,duration : 0.6}}
>
        <div className="hm-title-ly font-cl">
        <div className="hmt big-txt lg-f">Capture</div>
        <div className="hmt sm-txt lg-f">a new world</div>
        <div className="hmt big-txt lg-f">Frame </div>
        <div className="hmt sm-txt lg-f">a new moment</div>
    <div onClick={()=>Nav('/contact')} className="hm-btn-ctn">
              <ButtonY  text={'contact me'}/>
    </div>
      </div>
      </motion.div>
        <div className="sec sec1"></div>
        <div className="sec sec2 relative">
          <div className="hm-img-layer absolute w-[100%] h-[100%] top-0"></div>
          <img src={require('../../images/img1.jpg')} className='pic w-full h-full hm-img' alt="" />
        </div>
    </div>

    <About/>
    <div className='big-bar'></div>
 <Work/>
 <div className="big-bar"></div>
 <Service/>
<div className="big-bar"></div>
<Contact/>
</>
  )
}

export default Home