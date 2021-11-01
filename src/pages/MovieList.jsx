import styles from '../styles/components/movieList.module.scss'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useRef, useState } from 'react'
import { useEffect } from 'react'

export function MovieList({movieList}) {
    const [ active, setActive ] = useState(0)
    const slideRef = useRef()

    useEffect(() => {
        console.log(window.innerWidth, slideRef.current.getBoundingClientRect().width)
        console.log(active)
        slideRef.current.style.transform = `translateX(${-(active * 100)}%)`
    },[active])

    const handleSlideBack = () => {
        if ( active ) {
            setActive(active - 1)
        }
    }


    const handleSlideNext = () => {

        setActive(active + 1)
    }

    return (
        <section className={styles.movieListContainer}>
            <h3>{movieList.title}</h3>
                <button onClick={handleSlideBack} className={styles.movieList__back }><IoIosArrowBack/></button>

                <div  className={styles.containerSlide} >
                    <div ref={slideRef}>
                        {movieList.item.results?.map( movie => (
                            <article key={movie.id}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="Imagem do card" />
                                <div className={styles.info}>
                                    <div className={styles.rowTwo}>
                                        <span className={styles.popularity}>{Math.floor(movie.vote_average * 10)}% relevante</span>
                                        <span className={styles.old}>16 </span>
                                        <span>2 Temporadas</span>
                                    </div>
                                    <div className={styles.genres}>
                                        <span>Empolgantes</span>
                                        <span>Ação</span>
                                        <span>Mistério</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <button onClick={handleSlideNext} className={styles.movieList__next}><IoIosArrowForward/></button>
        </section>
    )
}