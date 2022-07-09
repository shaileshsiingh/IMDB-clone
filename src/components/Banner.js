import React, {useState,useEffect} from 'react';
import Banner from '../images/image2.jpg'
import axios from 'axios'


function banner() {
  const [movie, setMovie] = useState({})
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=a84535ec8d1f22fcc9b5ae9482922734").then((res)=>
    {
      console.table(res.data.results)
    setMovie(res.data.results[0]);
  }
  )
  },[])

  return (
    <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[90vh] bg-center bg-cover flex items-end justify-center`}>
      <div className='text-xl md:text-3xl text-white 
      p-4 bg-gray-900 bg-opacity-50  w-full flex justify-center'>
        {movie.title}
      </div>
    </div>
  )
}

export default banner