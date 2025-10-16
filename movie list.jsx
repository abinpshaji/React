import { useEffect, useState } from "react";
import MovieCard from "../movieCard"
import axios from "axios"
function MovieList(){
    const [movies,setMovies]=useState([])
    const [search,setValue]=useState("")
    const handleSearch=(e)=>{
        e.preventDefault()
        axios.get(`https://imdb.iamidiotareyoutoo.com/search?q=${search}`)
        .then((res)=>setMovies(res.data.description))
    }
    return(
        <div>
            <form onSubmit={handleSearch}>
            <input type="text" name="search" value={search} className="search-bar" onChange={(e)=>setValue(e.target.value)}/>
            <input type="submit" className="search-btn" value="Search"/>
            </form> 
            <h1 style={{textAlign:"center",color:"black"}}>Movies</h1>
            <div className="container">
            <div className="row m-5" id="movie-section">
           
            {
                movies.map((movie)=>(
                        < MovieCard key={movie["#IMDB_ID"]} title={movie["#TITLE"]} poster={movie["#IMG_POSTER"]} url={movie["#IMDB_URL"]}/>
                ))
            }
            </div>
           </div>  
        </div>
    )
}
export default MovieList;