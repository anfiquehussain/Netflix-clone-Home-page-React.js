import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import Youtube from 'react-youtube'
import { imageUrl,API_KEY } from '../../Constents/constent'
import axios from '../../axios'



function Rowpost(props) {
    const [movies, setmovies] = useState([])
    const [Urlid, setUrlid] = useState('')
    useEffect(() => {
        axios.get(props.url).then(response => {
            console.log(response.data)
            console.log(props.url)
            setmovies(response.data.results)


        })
    }, [])


    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handleMovie =(id)=>{
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(res=>{
             console.log(res.data)
            if(res.data.results.length!=0){
                setUrlid(res.data.results[0] || res.data.results[1] )
            }else{
                console.log('Array empty')
            }
        })
        console.log(id)

      }

    return (
        <div className='row'>
            <h1 className='toptitlecard'>{props.title}</h1>
            <div className='posters'>
                {movies.map((obj) => {
                    return (
                        <div>
                            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'posterImg'} src={`${imageUrl + obj.backdrop_path}`} alt="" />
                            <h3 className={props.isSmall ? 'smalltitle' : 'orgTitle'}>{`${obj.title || obj.name}   ⭐️${obj.vote_average}/10`}</h3>
                        </div>
                    )
                }
                )}

            </div>
            {Urlid &&  <Youtube opts={opts} videoId={Urlid.key}/>}
        </div>
    )
}
export default Rowpost
