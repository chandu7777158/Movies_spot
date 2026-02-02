const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const languageCodes = {
    tollywood: 'te',
    bollywood: 'hi',
    kollywood: 'ta',
    mollywood: 'ml',
    sandalwood: 'kn'
};

export const getMovies = async (type) => {
    let url1 = "";
    let url2 = "";

    if (type === 'popular' || type === 'Home') {
        url1 = `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=4`;
        url2 = `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=`;
    } else {
        const code = languageCodes[type.toLowerCase()];
        url1 = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=${code}&page=1`;
        url2 = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=${code}&page=2`;
    }

    const [res1, res2] = await Promise.all([fetch(url1), fetch(url2)]);
    const data1 = await res1.json();
    const data2 = await res2.json();
    
    return [...(data1.results || []), ...(data2.results || [])].slice(0,36);
};

export const searchMovies = async (query) => {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results || [];
};