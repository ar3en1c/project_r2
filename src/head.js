import React, { useState } from "react";
import './head.scss';

const Category = ({ goBack }) => {
    return (
        <div className="catSFather">
            <div className="catFather">
                <div className="catUncle">
                    <div className="catChild">
                        اکشن
                    </div>
                    <div className="catChild">
                        جنایی
                    </div>
                    <div className="catChild">
                        درام
                    </div>
                    <div className="catChild">
                        عاشقانه
                    </div>
                    <div className="catChild">
                        کمدی
                    </div>
                    <div className="catChild">
                        ترسناک
                    </div>
                    <div className="catChild">
                        خانوادگی
                    </div>
                    <div className="catChild">
                        ماجراجویی
                    </div>
                </div>
                <button onClick={goBack} className="goback">بازگشت</button>
            </div>
        </div>
    );
};

const Header = () => {
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
            )}
            {showCategory && <Category goBack={handleGoBack} />}
        </>
    );
};

export default Header;
export { Category };
