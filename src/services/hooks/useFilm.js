import { useEffect, useState } from "react";
import { getAllFilms } from "../getPeliculas";

export const useFilm = () =>{

    const [film, setFilm] = useState()

    const allfilms = async () => {
        const data = await getAllFilms()
        setFilm(data); 
    };

    useEffect(() =>{
        allfilms();
    }, []);

    return film 
}

