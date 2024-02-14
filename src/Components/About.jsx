import React from 'react'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div className='abt-ctn'>
<motion.div
initial={{ opacity: 0,  translateY : 200 }}
animate={{ opacity: 1, translateY : 0}}
  transition={{ delay: 0,duration : 0.6}}
>
            <div className="abt-flx">
            <div className="abt-img-ctn">
                <img src={require('../images/img2.jpg')} alt="" className='abt-img pic'/>
            </div>
            <div className="abt-txt-ctn">
                <div className="abt-txt-1">
                    <div className="abtxt lg-f font-cl sm-txt">We are crafting</div>
                    <div className="abtxt lg-f font-cl big-txt">arts </div>
                    <div className="abtxt lg-f font-cl sm-txt">throung the lens</div>
                </div>
            </div>
        </div>
        </motion.div>
        <motion.div
initial={{ opacity: 0,  translateY : 200 }}
animate={{ opacity: 1, translateY : 0}}
  transition={{ delay: 0,duration : 0.6}}
>
    <div className="abt-flx abt-flx-rev">
        <div className="abt-txt-ctn">
                <div className="abt-txt-1">
                    <div className="abtxt lg-f font-cl sm-txt">WITH</div>
                    <div className="abtxt lg-f font-cl big-txt">03 </div>
                    <div className="abtxt lg-f font-cl sm-txt">YEARS OF</div>
                    <div className="abtxt lg-f font-cl sm-txt">DIGITAL EXPERIENCE</div>
                </div>
            </div>
            <div className="abt-img-ctn">
                <img src={require('../images/img3.jpg')} alt="" className='abt-img pic'/>
            </div>
            
        </div>
</motion.div>
        
        <div className="big-bar"></div>
        <motion.div
initial={{ opacity: 0,  translateY : 200 }}
animate={{ opacity: 1, translateY : 0}}
  transition={{ delay: 0,duration : 0.6}}
>
            <div className="abt-story">
    <div className="abt-title-ctn flex items-center gap-[10px]">
    <div className="abt-line"></div>
    <div className="abt-title text-center text-[20px] font-[600] lg-f font-cl">ABOUT </div>
<div className="abt-line"></div>
    </div>
    <div className="abt-parag lg-f font-cl">
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
    </div>
        </div>
        </motion.div>
            </div>
  )
}

export default About