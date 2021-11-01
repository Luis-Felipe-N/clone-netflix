import { useHistory } from 'react-router-dom'

import styles from '../styles/pages/perfil.module.scss'
import img from '../assets/image/1.png'
import { useState } from 'react'
import { Input } from '../components/Input'

export function Perfil() {
    // const [ ]
    const [ avatars, setAvatars ] = useState([
        {
            name: 'Luis',
            avatar: img
        },
        {
            name: 'Anna',
            avatar: img
        }
    ])

    const history = useHistory()

    const handleToggleUser = () => {
        // localStorage.set
    }

    return (
        <main className={styles.perfilContainer}>
            <section>
                <h1>Quem está assistindo?</h1>
                <div className={styles.perfils}>
                {avatars.map( user => {
                    return (
                        <div onClick={() => handleToggleUser()} className={styles.perfil}>
                        <img src={user.avatar} alt="dvs" />
                        <Input value={user.name}/>
                        {/* <input type value={user.name}/> */}
                    </div>
                    )
                })}
                    {/* <div onClick={() => handleToggleUser()} className={styles.perfil}>
                        <img src={img} alt="dvs" />
                        <input type value="Luis"/>
                    </div>
                    <div onClick={() => handleToggleUser()} className={styles.perfil}>
                        <img src={img} alt="dvs" />
                        <span>João</span>
                    </div> */}
                </div>
                <button onClick={() => history.push('/')} className={styles.btnOk}>OK</button>
            </section>
        </main>
    )
}