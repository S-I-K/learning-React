import { useEffect, useState } from 'react';
import Movie from '../component/Movie';
import styles from './Home.module.css';


export default function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies= async()=>{
        const json = await (
            await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year')
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
        }

    useEffect(()=>{
        getMovies();
    }, []);


    return (
        <div className={styles.main}>
            <div className={styles.container}>
                {loading ? <div className={styles.loading}>Loading ...</div> : 
                <div> { movies.map((movie) => (

                    <Movie key={movie.id} movie={movie} />

                ))}</div>
                }
            </div>
        </div>
    );
}