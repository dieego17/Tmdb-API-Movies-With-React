import { useFilm } from "../services/hooks/useFilm" 
import CardFilm from './CardFilm'


function Home() {
  const films = useFilm()

  return (
    <section className="container border border-secondary rounded d-flex flex-wrap justify-content-center">
      {
        films ? films.map(film => (
          <CardFilm key={film.id} film={film} />
        )) : <p>Loading...</p>
      }
    </section>
  )
}

export default Home
