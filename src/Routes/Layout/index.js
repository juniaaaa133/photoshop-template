import React from 'react'
import Navb from '../../Pages/nav/Navb'
import { Outlet } from 'react-router'
import FooterX from '../../ELEMENTX/Ui/Footer/FooterX'

const Index = () => {
  return (
    <>
    <Navb/>
    <Outlet/>
    <FooterX/>
    </>
    
  )
}

export default Index