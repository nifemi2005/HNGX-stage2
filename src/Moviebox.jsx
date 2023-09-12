import React from 'react'

const API_IMG="https://image.tmdb.org/t/p/w500/";

function Moviebox({original_title, poster_path, vote_average, release_date, overview}) {
  return (
    <div>
        <h3>{original_title}</h3>
        <img src={API_IMG+poster_path} alt="" />
        <p> {overview} </p>
    </div>
  )
}

export default Moviebox