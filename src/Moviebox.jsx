import React from 'react'

const API_IMG="https://image.tmdb.org/t/p/w500/";

function Moviebox({original_title, poster_path, vote_average, release_date, overview}) {
  return (
    <div className=''>
        <img src={API_IMG+poster_path} className='' alt="" />
        <h3>{original_title}</h3>
        <button>View more</button>
        {/* <p>{overview}</p> */}
    </div>
  )
}

export default Moviebox