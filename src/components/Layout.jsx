import { useFilm } from "../services/hooks/useFilm" 
import Home from "./Home"
import Menu from "./Menu"



function Layout() {
  const {films, allfilms} = useFilm()

  return (
    <div>
        <header>
          <Menu allfilms={allfilms} />
        </header>

        <main className="m-5">
          <Home films={films} />
        </main>
    </div>
  )
}

export default Layout