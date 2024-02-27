export const getAllFilms = async (page = 1) =>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}&api_key=97daf32dbb3f7697b912a983027c8006&append_to_response=videos,images`)
    const data = await response.json()
    
    return data.results
}