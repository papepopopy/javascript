import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Body(props) {
    props = { name: "홍길동", location: "부산" }
    return (
        <div className="slider">
            <ul className="slide-list">
                <li className="slide">
                    <img src="img/visual_img01.jpg" alt=""/>
                </li>
                <li className="slide">
                    <img src="img/visual_img02.jpg" alt=""/>
                </li>
                <li className="slide">
                    <img src="img/visual_img01.jpg" alt=""/>
                </li>
            </ul>
            <img className="slider-title" src="img/title.png" alt=""/>
            <span className="search">
                <button className="search-btn">
                    <img src="img/btnS.png" alt=""/>
                </button>
                <input type="text" name="text" value="찾으시는 도서의 정보를 입력하세요." />
            </span>
            <div className="lBtn">
                <img src="img/btnL.png" alt=""/>
            </div>
            <div className="rBtn">
                <img src="img/btnR.png" alt=""/>
            </div>

            <div className="container">
                {/* 공지사항 / 행사안내 */}
                <div className="content">
                    <div className="shortcut">
                        <div className="shortcut-navi">
                            <h2 className="notice-tit active">공지사항</h2>
                            <h2 className="gallery-tit">행사안내</h2>
                        </div>
                        <div className="shortcut-box">
                            <div className="notice active">
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
                            <div className="gallery">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <span className="img" alt="">1</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="img" alt="">2</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="img" alt="">3</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="photonews">
                        <h2>포토뉴스</h2>
                        <img src="img/photonews.jpg" alt=""/>
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
    );
}
export default Body;
