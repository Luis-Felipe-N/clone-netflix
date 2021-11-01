import logoNetflix from '../assets/image/logo.png'
import img1 from '../assets/image/1.png'
import img2 from '../assets/image/2.png'
import img3 from '../assets/image/3.png'
import img4 from '../assets/image/4.png'

import styles from '../styles/components/header.module.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function Header() {
    const [ openOptionsUser, setOpenOptionsUser ] = useState(false)
    const [ avatars, setAvatars ] = useState([
        {
            name: 'Luis',
            avatar: img1
        },
        {
            name: 'Anna',
            avatar: img2
        }
    ])

    // useEffect(() => {
    //     const imgAvatarLocalStorage = localStorage.getItem('img')
    //     if ( imgAvatarLocalStorage ) {
    //         setAvatar(imgAvatarLocalStorage)
    //     } else {
    //         localStorage.setItem('img', img1)
    //         setAvatar(img1)
    //     }
    // }, [])


    // useEffect(() => {
    //     console.log(avatar)
    // } , [avatar])


    function handleOpenOptionsUser() {
        setOpenOptionsUser(!openOptionsUser)
    }

    // function handleToggleAvatar(img) {
    //     localStorage.setItem('img', img)
    //     setAvatar(img)
    // }
    
    return (
        <header className={styles.headerContainer}>
            <div className={styles.logo}>
                <img src={logoNetflix} />
            </div>

            <nav>
                <a className={styles.active} href="#">Início</a>
                <a href="#">Séries</a>
                <a href="#">Filmes</a>
                <a href="#">Bombando</a>
                <a href="#">Minha Lista</a>
            </nav>

            <div className={styles.options}>
                <div className={styles.search}>
                    <input type="text" placeholder="Título, pessoas e gêneros" />
                </div>
                <a className={styles.infantil} href="#">Infantil</a>
                <button onClick={handleOpenOptionsUser} className={styles.user}>
                    <img src={img1} alt="Imagem do usuário" />
                </button>  
                <div className={openOptionsUser ? `${styles.optionsUser} ${styles.active}` : styles.optionsUser}>
                    {
                        avatars.map( ({name, avatar}) => {
                            return (<button>
                                <img src={avatar} alt="Imagem do usuário" />
                                <span>{name}</span>
                            </button>)
                        })
                    }
                    <Link className={styles.gerenciarPerfil} to="/perfil">
                        <a>Gereciar Perfil</a>
                    </Link>
                </div>
            </div>
        </header>
    )
}