const API_KEY = "228bed259d0418089cf3bacd41a6c414"
const API_BASE = "https://api.themoviedb.org/3"


const fecthBase = async endPointer => {
    const response = await fetch(`${API_BASE}/${endPointer}`)
    const responseJson = await response.json()
    return responseJson
}


export default {
    getHomeList: async () => {
        return await [
            {
                slug: 'originals',
                title: 'Os originais da Netflix',
                item: await fecthBase(`discover/tv?with_network&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title:  'Recomendados para você',
                item: await fecthBase(`trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                item:  await fecthBase(`movie/top_rated?tlamnguage=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'ação',
                item: await fecthBase(`discover/movie?width_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                item: await fecthBase(`discover/movie?width_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                item: await fecthBase(`discover/movie?width_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documantary',
                title: 'Documentário',
                item: await fecthBase(`discover/movie?width_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    }
}