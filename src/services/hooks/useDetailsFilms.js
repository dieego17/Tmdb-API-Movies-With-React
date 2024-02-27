import { useEffect, useState } from 'react'
import { getOneFilm } from '../getOneFilm' 

export const useDetailsFilms = (param) =>{
    const [films, setFilms] = useState([])

    const loadFilms = async () =>{
        const oneFilm = await getOneFilm(param)
        setFilms(oneFilm)
    }

    useEffect(() =>{
        loadFilms()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [param]);

    return films
}