import React from 'react'
import '../../css/index.css';
import { serviceCollection } from '../../features/imgSrc';
import CardZ from '../../ELEMENTX/Ui/Card/CardZ';
import {motion} from 'framer-motion'

const AboutP = () => {
  return (
    <motion.div
    initial={{ opacity: 0,  translateY : 200 }}
    animate={{ opacity: 1, translateY : 0}}
      transition={{ delay: 0,duration : 0.6}}
    >
    <div>
        <div className="big-bar"></div>
       <div className="ab-intro-ctn">
        <div className="ab-tit-ctn font-cl lg-f">WHAT MY WORK STANDS FOR</div>
<div className="ab-tit-dsc lg-f font-cl">As a freelance photographer, you all want to wonder what my exactly job is.My services are basically six categories.And yes ! I can perform and set up for your special frames.So let me see detail of your purposes!</div>
        </div>
        <div className="bar"></div>
      <div className="srv-two-ctn">
        {
          serviceCollection.map((Img,idx) => (
            <CardZ key={idx} img={Img.img} text={Img.text}/>
         
          ))
        }

        </div>
        <div className="bar"></div>
<div className="ab-fn-ctn">
<div className="abt-title-ctn flex items-center gap-[10px]">
    <div className="abt-line"></div>
    <div className="abt-title text-center text-[20px] font-[600] lg-f font-cl">ABOUT </div>
<div className="abt-line"></div>
    </div>
<div className="ab-person-ctn">
        <div className="ab-text lg-f font-cl">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </div>
        <img src={require('../../images/img1.jpg')} alt="" className="pic  ab-pimg" />
    </div>
</div>
    </div>
    </motion.div>
  )
}

export default AboutP