// eslint-disable-next-line no-unused-vars
import React from "react";
import './head.scss';
let header = () => {
    return (
        <header className="head">
            <div className="hello">
                <div className="left-secctions">
                    <div>جستجو</div>
                    <div>پروفایل</div>
                </div>
                <div className="right-secctions">
                    <div style={{fontSize : '25px' , fontFamily: 'arial' , paddingTop: '15px'}}>لوگو</div>
                    <div>خانه</div>
                    <div>فیلم ها</div>
                    <div>سریال ها</div>
                    <div>دسته بندی</div>
                </div>
            </div>
        </header>
    )
}

export default header;
