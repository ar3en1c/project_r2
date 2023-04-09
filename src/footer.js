// eslint-disable-next-line no-unused-vars
import React from "react";
import './footer.scss'
import John from './img/icons8-john-wick-500.png'

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="f1fs">
                    <div className="f1fs-child">
                        اپلیکیشن ها
                    </div>
                    <div className="f1fs-child">
                        فرصت های شغلی
                    </div>
                    <div className="f1fs-child">
                        تبلیغات
                    </div>
                    <div className="f1fs-child">
                        خرید اشتراک
                    </div>
                    <div className="f1fs-child">
                        هدیه
                    </div>
                    <div className="f1fs-child">
                        سوالات متداول
                    </div>
                    <div className="f1fs-child">
                        تماس با ما
                    </div>
                    <div className="f1fs-child">
                        درباره ما
                    </div>
                </div>
                <div className="f2fs">
                    <div className="f2fs-logo">
                        <img src={John} alt="John-wick logo"/>
                        <div>انتقام جویان</div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Footer;