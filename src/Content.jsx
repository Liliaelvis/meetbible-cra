import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';

const Home = lazy(() => import('./Home'))
const Bible = lazy(() => import('./Bible'))
const Forum = lazy(() => import('./Forum'))
const Preachings = lazy(() => import('./Preachings'))
const About = lazy(()=> import('./About'))
const Highlights = lazy(()=> import('./Highlights'))

function Content() {
    return (  
        <Suspense fallback={<CircularProgress />}>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/Bible" element={<Bible/>} />
                <Route exact path="/Forum" element={<Forum/>} />
                <Route exact path="/Preachings" element={<Preachings/>} />
                <Route exact path="/About" element={<About/>} />
                <Route exact path="/Forum/Hightlights" element={<Highlights/>} />
            </Routes>
        </Suspense>
    )
}

export default Content;
