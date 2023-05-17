import React from "react";
import './head.scss';
import { Link } from "react-router-dom";

const Category = ({ goBack }) => {
    return (
        <div className="catSFather">
            <div className="catFather">
                <div className="catUncle">
                    <div className="catChild">
                        <Link className="Link" to={"/genras/action"} onClick={goBack}>
                            اکشن
                        </Link>
                    </div>
                    <div className="catChild">
                        <Link className="Link" to={"/genras/crime"} onClick={goBack}>
                            جنایی
                        </Link>
                    </div>
                    <div className="catChild">
                        <Link className="Link" to={"/genras/drama"} onClick={goBack}>
                            درام
                        </Link>
                    </div>
                    <div className="catChild">
                        <Link className="Link" to={"/genras/anime"} onClick={goBack}>
                            انیمه
                        </Link>
                    </div>
                    <div className="catChild">
                        <Link className="Link" to={"/genras/comedy"} onClick={goBack}>
                            کمدی
                        </Link>
                    </div>
                    <div className="catChild">
                        <Link className="Link" to={"/genras/sci-fi"} onClick={goBack}>
                            علمی تخیلی
                        </Link>
                    </div>
                    <div className="catChild">
                        <Link className="Link" to={"/genras/sports"} onClick={goBack}>
                            ورزشی
                        </Link>
                    </div>
                    <div className="catChild">
                        <Link className="Link" to={"/genras/advanture"} onClick={goBack}>
                            ماجراجویی
                        </Link>
                    </div>
                </div>
                <button onClick={goBack} className="goback">بازگشت</button>
            </div>
        </div>
    );
};

export default Category;
