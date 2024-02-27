/* eslint-disable react/prop-types */
import { useState } from "react"

function Menu({ allfilms }) {

  const [page, setPage] = useState(1);

  
    const handleLoad = (newpage) =>{
      if(newpage > 0){
        setPage(newpage)
        allfilms(newpage)
      }
    }
  

  return (
    <div className="container rounded d-flex justify-content-center mt-5 border border-secondary p-3">
      <button onClick={ () => handleLoad( page - 1 )} className="btn btn-primary col-2 m-1 p-3">
        ANTERIOR
      </button>
      <button onClick={ () => handleLoad( page + 1 )} className="btn btn-danger col-2 m-1 p-3">
        SIGUIENTE
      </button>
    </div>
  )
}

export default Menu