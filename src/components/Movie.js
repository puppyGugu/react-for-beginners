import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, year, summary, genres}) {
    return (
        <Link to={`/movie/${id}`} className={styles.movie}>
            {/* <div className={styles.movie}> */}
                <img src={coverImg} alt={title} className={styles.movie__img}/>
                <div>
                    <h2 className={styles.movie__title}>
                        {/* <Link to={`/movie/${id}`}>{title}</Link> */}
                        <h4>{title}</h4>
                    </h2>
                    <h3 className={styles.movie__year}>{year}</h3>
                    <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                    <ul className={styles.movie__genres}>
                        {genres.map((g) => (
                            <li key={g}>{g}</li>
                        ))}
                    </ul>
                </div>
            {/* </div> */}
        </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie