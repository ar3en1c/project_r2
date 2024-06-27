import { useState , useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './../middle.scss';

function Series() {
    const [data, setData] = useState([]);
    /* dar await neveshte shode chon ke behemon error promise barmigardond va ba in kar sabr mikonim ta etelata daryaft beshavad */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:7421/series-api.php');
                /* const response = await axios.get('/series-api.php'); */
                console.log(response);
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        if (data.length === 0) {
            fetchData();
        }
    }, [data, setData]);


    console.log(data);

    return (
        <div className="middle">
            <>
                {data.map((movie) =>
                (
                    <Link className="link-width" key={movie[0]} to={`/series/${movie[0]}`}>
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

export default Series;