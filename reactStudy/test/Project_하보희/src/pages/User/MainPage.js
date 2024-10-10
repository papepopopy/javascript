import React, { useState } from "react"
import './common/css/Main.css'

const MainPage = () => {

    const [activeBtn, setActiveBtn] = useState("notice");
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNoticeClick = () => {
        setActiveBtn("notice");
        console.log("클릭");
    }
    const handleGalleryClick = () => {
        setActiveBtn("gallery");
        console.log("클릭");
    }

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1)%3);
        console.log("슬라이드 다음 페이지")
    }
    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + 3)%3);
        console.log("슬라이드 이전 페이지")
    }

    return (
    <div className="body">
        <div className="slider">
            <ul className="slide-list" 
                style={{transform:`translateX(-${currentSlide*1240}px)`}}
            >
                <li className="slide">
                    <img src="img/visual_img01.jpg" />
                </li>
                <li className="slide">
                    <img src="img/visual_img02.jpg" />
                </li>
                <li className="slide">
                    <img src="img/visual_img01.jpg" />
                </li>
            </ul>
            <img className="slider-title" src="img/title.png" />
                <span className="search">
                    <button className="search-btn"><img src="img/btnS.png" /></button>
                    <input type="text" name="text" placeholder="찾으시는 도서의 정보를 입력하세요." />
                </span>
                <div onClick={handlePrevSlide} className="lBtn"><img src="img/btnL.png" alt="이전 버튼" /></div>
                <div onClick={handleNextSlide} className="rBtn"><img src="img/btnR.png" alt="이전 버튼" /></div>
        </div>
        <div className="container">
            {/* 공지사항 / 행사안내 */}
            <div className="content">
                <div className="shortcut">
                    <div className="shortcut-navi">
                        <h2 
                            onClick={handleNoticeClick}
                            className={`notice-tit ${activeBtn === 'notice' ? 'active':''}`}>공지사항</h2>
                        <h2 
                            onClick={handleGalleryClick}
                            className={`gallery-tit ${activeBtn === 'gallery' ? 'active':''}`}>행사안내</h2>
                    </div>
                    <div className="shortcut-box">
                        <div className={`notice ${activeBtn === 'notice' ? 'active':''}`}>
                            <ul>
                                <li>
                                    <a href="#">
                                        디지털 인문학과 네트워크 분석 교육생 모집 안내
                                        <span>2024-06-01</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        국립중앙도서관 - [청년 디지털 봉사단 '잇(IT)다' 5기] - 최종 합격자 발표
                                        <span>2024-05-23</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        국립중앙도서관 권리자 불명 저작물 공고
                                        <span>2024-05-20</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        위키미디어 - 옛한글 문헌 전자화 프로젝트 봉사자 모집 공고
                                        <span>2024-04-02</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        2024년 국립중앙도서관 청년 디지털 봉사단 '잇(IT)다: 5기 모집 안내
                                        <span>2024-03-11</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        국립중앙도서관 - [청년 디지털 봉사단 '잇(IT)다' 4기] -최종 합격자 발표
                                        <span>2024-03-08</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={`gallery ${activeBtn === 'gallery' ? 'active':''}`}>
                            <ul>
                                <li>
                                    <a href="#">
                                        <span className="img">1</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="img">2</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="img">3</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="photonews">
                    <h2>포토뉴스</h2>
                    <img src="img/photonews.jpg" />
                    <p>누르갈리 아르스타노프 주한 카자흐스탄 대사 예방</p>
                    <span>2024.02.05</span>
                </div>
            </div>
            <ul className="quick-menu">
                <li>
                    <a href="#">
                        디지털 도서관 예약
                    </a>
                </li>
                <li>
                    <a href="#">
                        자료 당일신청
                    </a>
                </li>
                <li>
                    <a href="#">
                        온라인 견학
                    </a>
                </li>
                <li>
                    <a href="#">
                        이용자 교육
                    </a>
                </li>
                <li>
                    <a href="#">
                        찾아오시는 길
                    </a>
                </li>
                <li>
                    <a href="#">
                        소장자료
                    </a>
                </li>
            </ul>
        </div>
    </div>
    )
}
export default MainPage;