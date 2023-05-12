import React, { useState } from "react";
import './head.scss';
import './middle.scss';
import Category from './category';

let choise = 0;

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
  return (
    <div className="middle">
      my middle sections
    </div>
  );
};

export default App;
