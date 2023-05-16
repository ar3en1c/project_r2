import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './movie.scss';
import "plyr-react/plyr.css"

function ShowMovie() {
    let { id } = useParams();
    const [data, setData] = useState([]);
    console.log(id);
    useEffect(() => {
        if (data.length === 0) {
            /* axios.get('http://localhost:7421/movie-api.php') */
            axios.get('/movie-api.php')
                .then(function (response) {
                    // handle success
                    console.log(response);
                    setData(response.data[id - 1]);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    }, [data, setData, id])
    console.log(data);


    return (
        <>
            <div className="mov-name">
                <div>{data[1]}</div>
            </div>
            <div className="mov-mov">
                <div id="movieplayer" className="movieplayer">
                    <video src={data[7]} controls></video>
                </div>
            </div>
        </>
    );
}

export default ShowMovie;
