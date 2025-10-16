import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
function MovieCard(props) {
  return (
        <div className="card" style={{width:"18rem",height:""}}>
        <img src={props.poster} className="card-img-top" alt=""></img>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text"></p>
            <a href={props.url} className="btn btn-primary">View Trailer</a>
        </div>
        </div>
  )
}

export default MovieCard;