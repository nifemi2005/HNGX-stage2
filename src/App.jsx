import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css'
import React from 'react'
import Moviebox from './Moviebox';

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
    <div>
      {movie.map((movieReq) => 
      <Moviebox key={movieReq.id} {...movieReq}/>)}
    </div>
  )
}

export default App