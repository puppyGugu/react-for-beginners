import {useState, useEffect} from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const json = await (
            await fetch(
            `https://yts.mx/api/v2/list_movies/json?minimum_ration=8.8&sort_by=year`
            )
        ).json();
        // setMovies(json.data.movies);

        // json 첫번째 데이터 img 엑박 제외 처리
        const firstDelete = json.data.movies;
        firstDelete.shift()
        setMovies(firstDelete);

        setLoading(false);
    };
    useEffect(() => {
        getMovies()
    }, []);
    // movies.shift()

    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <h1>Loading...</h1>
                </div>
            ) : (
                <div className={styles.movies}>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;