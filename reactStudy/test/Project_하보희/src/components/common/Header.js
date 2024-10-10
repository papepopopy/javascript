import React, { useState } from "react";
import './assets/styles/Header.css'
import imgLogo from './assets/img/logo.svg';

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(null); //useState 초기화 => null

    //이벤트 헨들러 사용
    const handleMouseEnter = (index) => {
        setActiveMenu(index); //마우스 메뉴 선택 => 활성화
    }
    const handleMouseLeave = () => {
        setActiveMenu(null) //마우스 메뉴 선택x => 비활성화
    }

    return (
    <div className="header">
        <div className="container">
            <div className="logo">
                <img src={imgLogo} alt="logo" />
            </div>
            <ul className="navi" >
                <li 
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={handleMouseLeave}
                >
                    <a href="#" className="title">자료검색</a>
                    {/* 이벤트 핸들러 추가 / index값이 추가될때 active 상태 변환 */}
                    <ul className={`sub-menu ${activeMenu === 0 ? 'active' : ''}`}>
                        <li><a href="#">리스트1-1</a></li>
                        <li><a href="#">리스트1-2</a></li>
                        <li><a href="#">리스트1-3</a></li>
                        <li><a href="#">리스트1-4</a></li>
                    </ul>
                </li>
                <li 
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={handleMouseLeave}
                ><a href="#" className="title">신청·참여</a>
                    <ul className={`sub-menu ${activeMenu === 1 ? 'active' : ''}`}>
                        <li><a href="#">리스트2-1</a></li>
                        <li><a href="#">리스트2-2</a></li>
                        <li><a href="#">리스트2-3</a></li>
                        <li><a href="#">리스트2-4</a></li>
                    </ul>
                </li>
                <li 
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={handleMouseLeave}
                ><a href="#" className="title">도서관 소개</a>
                    <ul className={`sub-menu ${activeMenu === 2 ? 'active' : ''}`}>
                        <li><a href="#">리스트3-1</a></li>
                        <li><a href="#">리스트3-2</a></li>
                        <li><a href="#">리스트3-3</a></li>
                        <li><a href="#">리스트3-4</a></li>
                    </ul>
                </li>
                <li 
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={handleMouseLeave}
                ><a href="#" className="title">도서관 이용</a>
                    <ul className={`sub-menu ${activeMenu === 3 ? 'active' : ''}`}>
                        <li><a href="#">리스트4-1</a></li>
                        <li><a href="#">리스트4-2</a></li>
                        <li><a href="#">리스트4-3</a></li>
                        <li><a href="#">리스트4-4</a></li>
                    </ul>
                </li>
                <li 
                    onMouseEnter={() => handleMouseEnter(4)}
                    onMouseLeave={handleMouseLeave}
                ><a href="#" className="title">열린공간</a>
                    <ul className={`sub-menu ${activeMenu === 4 ? 'active' : ''}`}>
                        <li><a href="#">리스트4-1</a></li>
                        <li><a href="#">리스트4-2</a></li>
                        <li><a href="#">리스트4-3</a></li>
                        <li><a href="#">리스트4-4</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    )
}
export default React.memo(Header);