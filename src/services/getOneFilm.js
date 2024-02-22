export const getOneFilm = async (id) => {
    const result = await fetch(`https://api.themoviedb.org/3/movie/${id}?&api_key={APIKEY}`);
    const film = await result.json();
    return film;
};

