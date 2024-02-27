import { useEffect, useState } from "react";
import { getAllFilms } from "../getPeliculas";

export const useFilm = () =>{

    const [films, setFilm] = useState([])

    const allfilms = async (page) => {
        const data = await getAllFilms(page)
        setFilm(data); 
    };

    useEffect(() =>{
        allfilms();
    }, []);

    return {films, allfilms}
}

