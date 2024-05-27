import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import Tvshows from './components/Tvshows'
import People from './components/People'
import About from './components/About'
import Contact from './components/Contact'
import Moviedetails from './components/Moviedetails'
import Tvdetails from './components/Tvdetails'
import Persondetails from './components/Persondetails'
import Trailer from './components/partials/Trailer'
import Notfound from './components/Notfound'

function App() {
  return (
    <div className=' bg-[#1F1E24] w-screen h-screen flex'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/movies' element={<Movie/>}/>
            <Route path="/movie/details/:id" element={<Moviedetails/>}>
              <Route path='/movie/details/:id/trailer' element={<Trailer/>}/>

            </Route>
        
        <Route path='/tvshows' element={<Tvshows/>}/>
             <Route path='/tv/details/:id' element={<Tvdetails/>}>
             <Route path='/tv/details/:id/trailer' element={<Trailer/>}/>
             </Route>

            <Route path='/people' element={<People/>}/>
             <Route path='/people/details/:id' element={<Persondetails/>}/>
             

        <Route path='about' element={<About/>}/>
        <Route path='/get-in-touch' element={<Contact/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </div>
  )
}

export default App
