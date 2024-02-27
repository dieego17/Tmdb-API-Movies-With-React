import { useParams } from "react-router-dom";
import { useDetailsFilms } from "../services/hooks/useDetailsFilms"
import CardFilmDetail from "./CardFilmDetail";


function FilmDetail() {

  const params = useParams()
  const param = params.id;
  const film = useDetailsFilms(param)

  return (
    <>
      {
        film && <CardFilmDetail key={film.id} film={film} />
      }
    </>
  )
}

export default FilmDetail