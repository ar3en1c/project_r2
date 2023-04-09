import React, { useState } from "react";
import './head.scss';
import './middle.scss';
import Category from './category';


const App = () => {
  const [showCategory, setShowCategory] = useState(false);

  const handleClickCategory = () => {
    setShowCategory(true);
  };

  const handleGoBack = () => {
    setShowCategory(false);
  };

  return (
    <>
      {!showCategory && (
        <>
          <Header handleClickCategory={handleClickCategory} />
          <Middle />
        </>
      )}
      {showCategory && (
        <Category goBack={handleGoBack} />
      )}
    </>
  );
};

const Header = ({ handleClickCategory }) => {
  return (
    <header className="head">
      <div className="hello">
        <div className="left-secctions">
          <div>جستجو</div>
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
  return (
    <div className="middle">
      my middle sections
    </div>
  );
};

export default App;
