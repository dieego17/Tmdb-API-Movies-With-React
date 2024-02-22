
export const getAllFilms = async () =>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key={APIKEY}&append_to_response=videos,images`)
    const data = await response.json()

    return data.results
}