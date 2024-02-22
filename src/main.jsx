/* eslint-disable no-unused-vars */
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import FilmDetail from './components/FilmDetail'
import Home from './components/Home'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} /> 
      </Route>
        <Route path='films/:id' element= {<FilmDetail />}/>

        <Route path='*' element={<Navigate to='/'/>} />
    </Routes>
  </BrowserRouter>
)
