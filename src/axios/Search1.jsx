import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './../search.scss';
import { BASE_URL } from './base_url';
function Search1() {



    const [data, setData] = useState([]);
    const [match , setMatch] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/all-api.php`);
                /* const response = await axios.get('/all-api.php'); */
                console.log(response);
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        if (data.length === 0) {
            fetchData();
        }
    }, [data])
    const srch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        setMatch(data.filter(item => item[1].toLowerCase().includes(searchValue)));
        return match;
    }

    
    console.log(match);



    return (
        <>
            <div className="div-main">
                <div className="input">
                    <input type="text" onChange={srch} />
                </div>

            </div>


            <div className="middle">
                <>
                    {match.map((movie) =>
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


        </>
    )
}

export default Search1;