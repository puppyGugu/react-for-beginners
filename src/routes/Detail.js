// import {useEffect} from "react";
// import {useParams} from "react-router-dom";

// function Detail() {
//     const {id} = useParams();
//     const getMovie = async() => {
//         const json = await(
//             await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
//         ).json();
//         console.log(json);
//     };
//     useEffect(() => {
//         getMovie();
//     }, []);
//     return (
//         <h1>Detail</h1>
//     );
// }

// export default Detail;





import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState({});
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        // console.log(json);
        setMovieDetail(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    // console.log(movieDetail);
    return (
        // <div className={styles.wrap}>
        <div className={loading ? styles.wrapLoading : styles.wrap}>
            {loading ? (
                <div className={styles.loader}>
                    <h1>Loading...</h1>
                </div>
            ) : (
                <>
                    <div className={styles.detailBox}>
                        <img className={styles.mainImg} src={movieDetail.large_cover_image}/>

                        <div className={styles.textBox}>
                            <h4>{movieDetail.title}</h4>
                            <p>{movieDetail.year}</p>
                            <span>like: {movieDetail.like_count}</span>
                            <ul>
                                {movieDetail.genres.map((g) => (
                                    <li key={g}>{g}</li>
                                ))}
                            </ul>
                            <p>{movieDetail.description_full.length > 1000 ? `${movieDetail.description_full.slice(0, 1000)}...` : movieDetail.description_full}</p>
                        </div>
                    </div>
                    <div className="youtubeEmdedBox">
                        <iframe className={styles.youtubeEmded} src={`https://www.youtube.com/embed/${movieDetail.yt_trailer_code}?mute=1&&autoplay=1`} title="YouTube video player"></iframe>
                    </div>
                </>
            )}
        </div>
    );
}

export default Detail;