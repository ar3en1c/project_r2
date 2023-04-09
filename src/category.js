import React from "react";
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

export default Category;
