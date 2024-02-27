/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"; 

function CardFilmDetail({ film }) {
  return (
    <section className="container w-75 mt-4 p-3 border border-secondary rounded" key={film.id}>
      <div className="d-flex col-12">
        <article className="col-4 p-4">
          <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} className="w-100" alt="" />
        </article>
        <aside className="col-8 p-4">
          <p>
            <span className="text-danger">Título: </span>{film.title}
          </p>
          <p>
            <span className="text-danger">Fecha: </span>{film.release_date}
          </p>
          <p>
            <span className="text-danger">Puntuación: </span>{film.vote_count}
          </p>
          <p>
            <span className="text-danger">Puntuación Media: </span>{film.vote_average}
          </p>
          <p>
            <span className="text-danger">Resumen: </span>{film.overview}
          </p>
          <p>
            {film.homepage !== "" ? (
              <p>
                <span className="text-danger">Web: </span>
                <a href={film.homepage}>{film.homepage}</a>
              </p>
            ) : (
              ""
            )}
          </p>




          
        </aside>
      </div>
      <Link to={'/'}>
          <button className="btn btn-danger col-12">Volver</button>
      </Link>
    </section>
  )
}

export default CardFilmDetail