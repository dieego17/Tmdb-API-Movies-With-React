export const getOneFilm = async (id) => {
    const result = await fetch(`https://api.themoviedb.org/3/movie/${id}?&api_key=97daf32dbb3f7697b912a983027c8006`);
    const film = await result.json();
    return film;
};

