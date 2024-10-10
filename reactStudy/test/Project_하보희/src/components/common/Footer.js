import React from "react";
import './assets/styles/Footer.css';
import imgLogo from './assets/img/logo-f.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <img src={imgLogo} alt="logo" />
                <div className="footer-inof">
                    <div className="text">(46949) 부산광역시 사상구 사상로310번길 33(덕포동) TEL 051-310-5400 FAX 051-310-5429 E-MAIL
                        busanlib@korea.kr<br />
                        COPYRIGHT © BUSAN METROPOLITAN LIBRARY. ALL RIGHTS RESERVED.</div>
                    <ul>
                        <li><a href="#">개인정보처리방침</a></li>
                        <li><a href="#">이용약관</a></li>
                        <li><a href="#">저작권보호정책</a></li>
                        <li><a href="#">키보드보안프로그램설치안내</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default React.memo(Footer)