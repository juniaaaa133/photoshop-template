import React from 'react'
import GalleryV from '../../ELEMENTX/Ui/Gallery/GalleryV';
import Home from '../../Pages/home/Home';
import Index from '../Layout';
import { useRoutes } from 'react-router';
import ContactP from '../../Pages/contact/ContactP';
import ProjectP from '../../Pages/projects/ProjectP';
import AboutP from '../../Pages/about/AboutP';

const MyPages = () => {
    let MyRouter = useRoutes([
        {
            path: '/',
            element : <Index/>,
            children : [
                {
                    element: <Home/>,
                    index : true,
                },
                {
                    path : '/imageView/:imageId',
                    element: <GalleryV/>,
                },
                {
                    path: '/contact',
                    element: <ContactP/>
                },
                {
                    path: '/projects',
                    element: <ProjectP/>
                },
                {
                    path: '/about',
                    element: <AboutP/>
                },
            ]
        }
    ])
  return MyRouter;
}

export default MyPages