/* eslint-disable react/prop-types */
import CardFilm from './CardFilm'


function Home({ films }) {

  return (
    <section className="container border border-secondary rounded d-flex flex-wrap justify-content-center">
      {
        films.map(film => (
          <CardFilm key={film.id} film={film} />
        ))
      }

    </section>
  )
}

export default Home
