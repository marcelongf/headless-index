"use client";

import styles from '../page.module.css'
import axios from 'axios'

export default function Admin() {
    const handleChangeOrder = async () => {
        const { data } = await axios.put(`http://localhost:3001/api/sections`);
        console.log(data);
    }
    
    return (
        <main className={styles.main}>
            <button onClick={handleChangeOrder} >Mudar</button>
        </main>
    )
}