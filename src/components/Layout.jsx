
import Menu from "./Menu"
import { Outlet } from "react-router-dom"


function Layout() {
  return (
    <div>
        <header>
          <Menu />
        </header>

        <main className="m-5">
          <Outlet />
        </main>
    </div>
  )
}

export default Layout