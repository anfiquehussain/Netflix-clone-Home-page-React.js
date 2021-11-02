import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../Constents/constent'
import './banner.css'



function Banner() {


    const rndInt = Math.floor(Math.random() * 20) + 1
    // console.log(rndInt)

    const [movie, setMovie] = useState()

    useEffect(() => {
           axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {

            // console.log(response.data.results[rndInt])
            // console.log(response.data.results)
            setMovie(response.data.results[rndInt])
        })

    }, [])
    return (
        <div 
         style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:''})`}}
        className='banner'>
            <div className="content">
                <h1 className='title'>{movie ? movie.name||movie.title:""}</h1>
                <h4 className='rating_banner'>⭐️{movie ? movie.vote_average:''}/10</h4>
                <div className='banner_btns'>
                    <button className='btn'>Paly</button>
                    <button className='btn'>+My List</button>
                </div>
                <h1 className='discription_banner'>{movie? movie.overview : ''}</h1>

            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}
export default Banner
