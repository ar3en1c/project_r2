// eslint-disable-next-line no-unused-vars
import React from "react";
import './footer.scss';
import John from './img/icons8-john-wick-500.png';
import Johny from './img/johnydepp.jpg';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
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
                        <img src={John} alt="John-wick logo" />
                        <div>انتقام جویان</div>
                    </div>
                </div>
                <div className="f3fs">
                    <div className="f3fs-titr"><big>درباره ما</big></div>
                    <div className="f3fs-about">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </div>
                </div>
                <div className="f4fs">
                    <div className="f4fs-hd">
                        <img src={Johny} alt="Johny Depp" />
                    </div>
                </div>
                <div className="f5fs">
                    <div className="f5fs-copyright">
                        کلیه خدمات و مطالب ارائه شده دارای کپی رایت میباشد.
                    </div>
                    <div className="f5fs-logo">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-brand-telegram"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            {" "}
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
                            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />{" "}
                        </svg>
                        

                    </div>
                </div>
            </footer>
        );
    }
}


export default Footer;