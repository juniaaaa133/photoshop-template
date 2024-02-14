import React, { createContext, useState } from 'react'
import GalleryX from '../ELEMENTX/Ui/Gallery/GalleryX'
import '../css/index.css';
import BadgeX from '../ELEMENTX/Ui/Badge/BadgeX';
import GalleryY from '../ELEMENTX/Ui/Gallery/GalleryY';
import GalleryV from '../ELEMENTX/Ui/Gallery/GalleryV';
import { imageCollection } from '../features/imgSrc';
import ButtonX from '../ELEMENTX/Ui/Buttons/ButtonX';
import { useNavigate } from 'react-router';
import {motion} from 'framer-motion'

const Work = () => {

  let navigate = useNavigate();

let Nav = (path) => navigate(path);

  return (
<motion.div
initial={{ opacity: 0,  translateY : 200 }}
animate={{ opacity: 1, translateY : 0}}
  transition={{ delay: 0,duration : 0.6}}
>
<div className='work-ctn'>
<div className="abt-title-ctn flex items-center gap-[10px]">
    <div className="abt-line"></div>
    <div className="abt-title text-center text-[20px] font-[600] lg-f font-cl">MY WORK </div>
<div className="abt-line"></div>
    </div> 

   <div className="wk-badge-ctn mt-[-80px]">
      <BadgeX txt={'fashion'}/>
      <BadgeX txt={'classic'}/>
      <BadgeX txt={'Travel'}/>
      <BadgeX txt={'Wedding'}/>
      <BadgeX txt={'Nature'}/>
    </div>

<div className="wk-gl-main-ctn">
<div className="wk-gl-ctn">
<GalleryX style={'mt-[108px]'} badge={'classic'} imgPath={'img4.jpg'}/>
<GalleryX badge={'classic'} imgPath={'img4.jpg'}/>
</div>
<div className="wk-gl-ctn">
<GalleryX style={'mt-[108px]'} badge={'classic'} imgPath={'img4.jpg'}/>
<GalleryX badge={'classic'} imgPath={'img4.jpg'}/>
</div>
</div>
<div className="mega-bar"></div>
     </div>
   <div className="wk-al-main-ctn">
{
        imageCollection.map((data,idx) => (
          <GalleryY  img={data.img} id={data.id} key={idx}/>
        ))
      }

    </div>
   <div onClick={()=>Nav('/projects')} className="wk-btn-ctn mx-auto w-fit h-fit mt-[60px]">
    <ButtonX text={'see more work'}/>
    </div>
</motion.div>
  )
}

export default Work