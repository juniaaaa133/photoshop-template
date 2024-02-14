import React from 'react'
import '../css/index.css';
import CardZ from '../ELEMENTX/Ui/Card/CardZ';
import { serviceCollection } from '../features/imgSrc';
import {motion} from 'framer-motion'

const Service = () => {

  return (
    <motion.div
    initial={{ opacity: 0,  translateY : 200 }}
    animate={{ opacity: 1, translateY : 0}}
      transition={{ delay: 0,duration : 0.6}}
    >
    <div>
       <div className="srv-one-ctn">
            <div className="srv-title lg-f font-cl">WHAT I DO</div>
            <div className="srv-desc lg-f font-cl">What makes a great photography website? It should do one thing above all else: put your photos front and center. This makes a huge difference, whether you’re a wedding, landscape, or business photographer. The ideal photography website should reflect both you and your work.So here is your chance to be a part of perfect virtual world.</div>
        </div>
        <div className="bar"></div>
       <div className="srv-two-ctn">
        {
          serviceCollection.map((Img,idx) => (
            <CardZ key={idx} img={Img.img} text={Img.text}/>
         
          ))
        }

        </div>
    </div>
    </motion.div>
  )
}

export default Service