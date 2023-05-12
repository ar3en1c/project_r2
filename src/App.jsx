import React, { useState } from "react";
import './head.scss';
import './middle.scss';
import Category from './category';
import axios from "axios";

let choise = 0;
let res = [];
const App = () => {
  const [etefaghat, setEtefaghat] = useState(choose2());

  const handleClickCategory = () => {
    choise = 1;
    setEtefaghat(choose2());
  };

  const handleGoBack = () => {
    choise = 0;
    setEtefaghat(choose2());
  };

  function choose2() {
    if (choise === 0) {
      return 'header-middle';
    } else if (choise === 1) {
      return 'category';
    }
  }

  return (
    <div className={etefaghat}>
      {choise === 0 && (
        <>
          <Header handleClickCategory={handleClickCategory} />
          <Middle />
        </>
      )}
      {choise === 1 && <Category goBack={handleGoBack} />}
    </div>
  );
};

const Header = ({ handleClickCategory }) => {
  return (
    <header className="head">
      <div className="hello">
        <div className="left-secctions">
          <div id="srch">جستجو</div>
          <div>پروفایل</div>
        </div>
        <div className="right-secctions">
          <div style={{ fontSize: '25px', fontFamily: 'arial', paddingTop: '15px' }}>لوگو</div>
          <div>خانه</div>
          <div>فیلم ها</div>
          <div>سریال ها</div>
          <div id="category" onClick={handleClickCategory}>دسته بندی</div>
        </div>
      </div>
    </header>
  );
};

const Middle = () => {
  const [data, setData] = useState(res);
  React.useEffect(
    () => {
      if (data.length === 0) {
        axios.get('http://localhost:7421/api.php')
          .then(function (response) {
            // handle success
            console.log(response);
            res = response.data;
            setData(res);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      }
    }, [data]
  );

  console.log(data);

  return (
    <div className="middle">
      <>
        {data.map((movie) =>
        (
          <div key={movie[0]} className="movie-card" style={{ backgroundImage: `url(${movie[3]})` }}>
            <div className="movie-card-top">
              <div style={{width : "100%" , float: "left"}}>
                <div className="raiting">{movie[2]}</div>
                <div className="year">{movie[5]}</div>
              </div>
              <div style={{width : "100%" , float: "left"}}>
                <div className="genras">{movie[4]}</div>
              </div>
            </div>
            <div className="movie-card-bottom"><span className="movie-card-bottom-text">{movie[1]}</span></div>
          </div>
        ))}
      </>
    </div>
  );
};

export default App;
