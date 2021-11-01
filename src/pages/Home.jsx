import { useEffect, useState } from "react";

import { Header } from "../components/Header";
import { MovieList } from "./MovieList";

import tmdb from '../service/tmdb'

import styles from '../styles/pages/home.module.scss'

import { FaPlay } from 'react-icons/fa'
import { IoMdInformationCircleOutline } from 'react-icons/io'


export function Home() {
    const [ movies, setMovies ] = useState(false)
    const [ movieHero, setMovieHero ] = useState(false)


    useEffect(() => {
        const getMovies = async () => {
            setMovies(await tmdb.getHomeList())
        }
        
        getMovies()
        
    }, [])
    
    useEffect(() => {
        
        if (movies) {
            setMovieHero(movies[0].item.results[Math.floor(Math.random() * movies[0].item.results.length)])
        }

    }, [movies])
    return (
        <>
        <Header />

        <main>
                { movieHero && (
                    <section className={styles.hero} style={{background: `url(https://image.tmdb.org/t/p/original${movieHero.backdrop_path})  no-repeat center/cover`}}>
                            <div>
                            <h1>{movieHero.name}</h1>
                            <div className={styles.btns}>
                                <button> <FaPlay size="15px" /> Assistir</button>
                                <button> < IoMdInformationCircleOutline size="20px"/>Mais informação</button>
                            </div>     
                            </div>
                    </section>
                )}
            <section>
                { movies && movies.map(movieList => (
                    <MovieList key={movieList.slug} movieList={movieList} />
                ))}
            </section>
        </main>
        </>
    )
}