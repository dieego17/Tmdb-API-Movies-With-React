/* eslint-disable react/prop-types */
import { Link } from "react-router-dom" 

function CardFilm({ film }) {

  return (
    <article className="card card-body bg-dark m-4 rounded border border-secondary col-2" >
        <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} className="card-img-top" alt="" />
        <div className="m-2 d-flex justify-content-center flex-column align-items-center">
          <h5 className="card-title" style={{color: 'white'}}>{film.title}</h5>
          <p className="card-text" style={{color: 'white'}}>{film.release_date}</p>
        </div>
        <Link className="btn btn-danger" to={`/films/${film.id}`}>
          MÁS DETALLES
        </Link>
    </article>
  )
}

export default CardFilm