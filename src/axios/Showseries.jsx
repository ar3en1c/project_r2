import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './../movie.scss';

function Showseries() {
    let { id } = useParams();
    const [data, setData] = useState([]);
    console.log(id);
    useEffect(() => {
        if (data.length === 0) {
            axios.get('http://localhost:7421/series-api.php')
                /* axios.get('/series-api.php') */
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
            <div className="description">
                <div className="cover">
                    <img src={data[3]} alt={data[1]} />
                </div>
                <div className="texting">
                    <div className="name">{data[1]}</div>
                    <div className="num">
                        <div className="raiting">{data[2]}</div>
                        <div className="year">{data[5]}</div>
                    </div>
                    <div className="genras">{data[4]}</div>
                    <div className="summery">{data[6]}</div>
                </div>
            </div>
        </>
    );
}

export default Showseries;