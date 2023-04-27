// import Button from "./Button";
// import styles from "./App.module.css";
// import {useState, useEffect} from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

// function App() {
//   return (
//     <div>
//       <h1 className={styles.title}>Welcome back!!!</h1>
//       <Button text={"Continue"}/>
//     </div>
//   );
// }

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);
//   useEffect(() => {
//     console.log("I run only once.");
//   }, []);
//   useEffect(() => {
//     // if(keyword !== "" && keyword.length > 5) {
//       console.log("I run when 'keyword' changes.");
//     // }
//   }, [keyword]);
//   useEffect(() => {
//     console.log("I run when 'counter' changes.");
//   }, [counter]);
//   useEffect(() => {
//     console.log("I run when keyword changes & counter change");
//   }, [keyword, counter]);
//   return (
//     <div>
//       <input
//         value={keyword}
//         onChange={onChange}
//         type="text"
//         placeholder="Search here..."
//       />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

// function Hello() {
//   function byFn() {
//     console.log("bye :(");
//   }
//   function hiFn() {
//     console.log("created :)");
//     return byFn;
//   }
//   useEffect(hiFn, [])
//   useEffect(() => {
//     console.log("hi :)");
//     return () => console.log("bye :(");
//   }, [])
//   // useEffect(() => {
//   //   console.log("created :)");
//   //   return () => console.log("destroyed :(");
//   // }, []);
//   return (
//     <h1>Hello</h1>
//   )
// }

// function App() {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing((prev) => !prev);
//   return (
//     <div>
//       {showing ? <Hello/> : null}
//       <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
//     </div>
//   );
// }

// function App() {
//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]);
//   const onChange = (event) => setToDo(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if(toDo === "") {
//       return;
//     }
//     setToDos(currentArray => [toDo, ...currentArray]);
//     setToDo("");
//   };
//   console.log(toDos);
//   return (
//     <div>
//       <h1>My To Dos ({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChange}
//           value={toDo}
//           type="text"
//           placeholder="Write your to do..."
//         />
//         <button>Add To Do</button>
//       </form>
//       <hr/>
//       <ul>
//         {toDos.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then(response => response.json())
//       .then((json) => {
//         setCoins(json)
//         setLoading(false);
//       });
//   }, []);
//   return (
//     <div>
//       <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
//       {loading ? (
//         <string>Loading...</string>
//       ) : (
//         <select>
//         {coins.map((coin) => (
//           <option>
//             {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
//           </option>
//         ))}
//       </select>
//       )}
//     </div>
//   );
// }

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
//   const getMovies = async() => {
//     // const response = await fetch(
//     //   `https://yts.mx/api/v2/list_movies/json?minimum_ration=8.5&sort_by=year`
//     // );
//     // const json = await response.json();
//     // setMovies(json.data.movies);
//     // setLoading(false);

//     const json = await (
//       await fetch(
//         `https://yts.mx/api/v2/list_movies/json?minimum_ration=8.8&sort_by=year`
//       )
//     ).json();
//     setMovies(json.data.movies);
//     setLoading(false);
//   };
//   useEffect(() => {
//     getMovies()
//   }, []);
//   // useEffect(() => {
//     // fetch(
//     //   `https://yts.mx/api/v2/list_movies/json?minimum_ration=8.5&sort_by=year`
//     // )
//     // .then((response) => response.json())
//     // .then(json => {
//     //   setMovies(json.data.movies)
//     //   setLoading(false);
//     // });
//   // }, [])

//   console.log(movies);
//   return (
//     <div>
//       {loading ? (
//           <h1>Loading...</h1>
//       ) : (
//           <div>
//           {movies.map(movie => (
//               <Movie
//               key={movie.id}
//               coverImg={movie.medium_cover_image}
//               title={movie.title}
//               summary={movie.summary}
//               genres={movie.genres}
//               />
//           ))}
//           </div>
//       )}
//     </div>
//   );
// }

function App() {
  return (
    <Routes>
      <Route path="/hello" element={
        <h1>Hello</h1>
      }/>
      <Route path="/movie/:id" element={<Detail/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
}

export default App;