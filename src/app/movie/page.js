import React from 'react'
import Link from 'next/link';
import styles from "@/app/styles/common.module.css"
import MovieCard from '@/app/components/MovieCard';
const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));

    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '96e8194ffcmshdf8b34e07b05464p149f03jsn2582f01032e1',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;
    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((currElem) => {
                                return <MovieCard key={currElem.id} {...currElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Movie;