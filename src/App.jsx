import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css'
import React from 'react'
import Moviebox from './Moviebox';
import Header from './Components/Header';

const API_URL= "https://api.themoviedb.org/3/movie/popular?api_key=f347b82f2740b900fa85cbaa3844492c";
function App() {

  const [movie, setMovie]= useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then(data => {
      console.log(data);
      setMovie(data.results);
    })
  }, [])
  

  return (
    <>
      <Header/>
      <div className='w-[950px] mx-[auto] py-[1em]'>
        <div className='md:grid ml-1 md:grid-cols-4 gap-[30px] justify-center'>
          {movie.map((movieReq) => 
          <Moviebox key={movieReq.id} {...movieReq}/>)}
        </div>
      </div>
    </>
  )
}

export default App