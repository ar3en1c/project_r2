import React, { useState } from "react";
import './../head.scss';
import './../middle.scss';
import Category from './../category';
import axios from "axios";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import ShowMovie from "./ShowMovie";
import Series from "./Series";
import Showseries from "./Showseries";
import Movie from "./Movie";
import All from "./All";
import Search from "./Search";
import Search1 from "./Search1";
import { BASE_URL } from './base_url';

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
          <Menu handleClickCategory={handleClickCategory}/>
          <Routes>
            <Route element={<Middle />} path="/" />
            <Route element={<Movie />} path="/films" />
            <Route element={<ShowMovie />} path="/movie/:id" />
            <Route element={<Series />} path="/series" />
            <Route element={<Showseries />} path="/series/:id" />
            <Route element={<All />} path="/all/:id" />
            <Route element={<Search />} path="/genras/:gn" />
            <Route element={<Search1 />} path="/search" />
          </Routes>
        </>
      )}
      {choise === 1 && (
        <>
          <Routes>
            <Route element={<Category goBack={handleGoBack} />} path="*" />
          </Routes>
        </>
      )}
    </div>
  );
};

const Header = ({ handleClickCategory }) => {
  return (
    <header className="head">
      <div className="hello">
        <div className="left-secctions">
          <NavLink to={'/search'}>جستجو</NavLink>
          {/* <div>پروفایل</div> */}
        </div>
        <div className="right-secctions">
          <div className="logo">لوگو</div>
          <NavLink to={'/'} className="Link"><div>خانه</div></NavLink>
          <NavLink to={'/films'} className="Link"><div>فیلم ها</div></NavLink>
          <NavLink to={'/series'} className="Link"><div>سریال ها</div></NavLink>
          <div id="category" onClick={handleClickCategory}>دسته بندی</div>
        </div>
      </div>
    </header>
  );
};

const Hambrguer = ({ ope , setope , handleClickCategory}) => {
  console.log(ope);
  return (
    <>
      <div className="ham1" style={ope ? { display: "flex" } : { display: "none" }}>
        <NavLink to={'/'} className="Link" onClick={() => {setope(false) ; window.scrollTo(0,0);}}><div>خانه</div></NavLink>
        <NavLink to={'/films'} className="Link" onClick={() => {setope(false) ; window.scrollTo(0,0);}}><div>فیلم ها</div></NavLink>
        <NavLink to={'/series'} className="Link" onClick={() => {setope(false) ; window.scrollTo(0,0);}}><div>سریال ها</div></NavLink>
        <div id="category" onClick={() => {setope(false) ; window.scrollTo(0,0); handleClickCategory();}}>دسته بندی</div>
        <NavLink to={'/search'} className="Link" onClick={() => {setope(false) ; window.scrollTo(0,200);}}>جستجو</NavLink>
      </div>
    </>
  )
}
const Menu = ({handleClickCategory}) => {
  const [ope, setOpe] = useState(false);
  return (
    <>
      <div className="menu1" style={!ope ? { backgroundColor: "rgba(184, 134, 11, 0.6)", color: "white" } : { backgroundColor: "rgba(255, 255, 255, 0.8)", color: "rgba(184, 134, 11, 1)" }} onClick={() => setOpe(!ope)}>
        <div>
          {!ope ? "بازکردن منو" : "بستن منو"}
        </div>
      </div>
      <Hambrguer ope={ope} setope={setOpe} handleClickCategory={handleClickCategory}/>
    </>
  )
}

const Middle = () => {
  const [data, setData] = useState(res);
  /* dar await neveshte shode chon ke behemon error promise barmigardond va ba in kar sabr mikonim ta etelata daryaft beshavad */
  React.useEffect(() => {
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
  }, [data, setData]);


  console.log(data);


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
};

export default App;
