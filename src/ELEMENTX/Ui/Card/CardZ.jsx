import React from 'react'
import '../../BUILD.css'

const CardZ = ({img,text}) => {
  return (
    <div className='cz-ctn'>
      <div className="cz-layer"></div>
        <div className="cz-txt sec-f text-[20px] font-[500] font-cl">{text.toUpperCase()}</div>
<img src={require(`../../../images/${img}`)} className='mega-trans cz-img pic' alt="" />
    </div>
  )
}

export default CardZ