import { useParams , Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Search() {
    let { gn } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.post('http://localhost:7421/cat-api.php', {
            Category: gn
        })
            .then((Response) => {
                setData(Response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    })


    return (
        <div className="middle">
            <>
                {data.map((movie) =>
                (
                    <Link className="link-width" key={movie[0]} to={`/all/${movie[0]}`}>
                        <div className="movie-card" style={{ backgroundImage: `url(${movie[3]})` }}>
                            <div className="movie-card-top">
                                <div style={{ width: "100%", float: "left" }}>
                                    <div className="raiting">{movie[2]}</div>
                                    <div className="year">{movie[5]}</div>
                                </div>
                                <div style={{ width: "100%", float: "left" }}>
                                    <div className="genras">{movie[4]}</div>
                                </div>
                            </div>
                            <div className="movie-card-bottom"><span className="movie-card-bottom-text">{movie[1]}</span></div>
                        </div>
                    </Link>
                ))}
            </>
        </div>
    );
}

export default Search;