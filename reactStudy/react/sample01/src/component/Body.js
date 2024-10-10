// import React from "react"
import "./Body.css"
// function Body(props) {
// function Body({name, location, favorList}) {
// ChildComp 컴포넌트는 childeren 프로퍼티로 전달
function Body({children}){
    console.log("children : ", children)

    // 구조분해 할당
    // const {name, location} = props; // 2개 이상을 같이 배당할때 사용한다.

    // console.log(props)
    return (
        <div className="body">
            {/* <h1 style={{backgroundColor: "red", color: "blue"}} lassName = "Body">Body</h1> */}
            {/* <h1 className="content">이름 : {props.name}, 거주지 : {props.location}</h1> */}
            {/* <h1 className="content">이름 : {name}, 거주지 : {location}</h1> */}
            <br />
            {/* <p>{favorList[0]},{favorList[1]},{favorList[2]}</p> */}
            {/* <p>{favorList.length}개의 음식을 좋아합니다.</p> */}

            <div>{children}</div>


            {/* {
                favorList.map((data) => {
                    return <span>{data}</span>
                })
            } */}
        </div>
    )


    // const number = 1
    // const a = 10
    // const b = 10
    // const name = "홍길동"
    // const age = 10
    // const boolA = true
    // const boolB = false

    // const objA = {
    //     name: "길순이",
    //     age: 18,
    //     address: "부산"
    // }
    // const num10 = 19
    // const num11 = 20
    // const num20 = 200
    // return (
        // if (num20%2 === 0) {
        //     // return "<div>짝수</div>"
        //     return (<div>짝수</div>)
        // } else {
        //     return (
        //         // <div className = "Body">
        //         <>
        //         <div>홀수</div>
        //         //태그가 없음
        //         {/* <React.Fragment> */}
        //             <h3>body</h3>
        //             <h2>number={number}</h2>
        //             <br />
        //             <h3>a={a},b={b}, a+b={a+b}</h3>

        //             <hr />
        //             <div>
        //                 <span>
        //                     이름 : {name}
        //                 </span>
        //                 <br />
        //                 <span>
        //                     나이 : {age}
        //                 </span>
        //             </div>
        //             <hr />
        //             <p>boolean</p>
        //             <div>
        //                 {String(5>2)}
        //                 {String(5>3)}
        //                 {String(5>2&&5>3)}
        //                 {String(boolA && boolB)}
        //             </div>
        //             <div>
        //                 {objA.name},{objA.age},{objA.address}
        //             </div>
        //             <div>
        //                 <h3>
        //                     {num10}은(는) {num10%2 === 0 ? "짝수":"홀수"}
        //                     <br/>
        //                     {num11}은(는) {num11%2 === 0 ? "짝수":"홀수"}
        //                 </h3>
        //             </div>
        //         </>
        //         // </React.Fragment>
        //         // </div>
        //     )
        // }
    // );
}
// props 기본값
// Body.defaultProps = {
//     favorList: []
// }

export default Body;