

function BodyEvent() {
    function handleOnClick() {
        alert("버튼을 클릭하셨습니담ㅎ 🤦‍♀️")
    }
    function handleOnclick2(e) {
        console.log(e.target.name)
    }
    return(
        <div>
            <button onClick={handleOnClick}>Event</button>
            <button name="A버튼" onClick={handleOnclick2}>A 버튼</button>
            <button name="B버튼" onClick={handleOnclick2}>B 버튼</button>
        </div>
    )
}

export default BodyEvent;


// 초반 설정
// function BodyEvent() {
//     return(
//         <div>
//             <h1>Event</h1>
//         </div>
//     )
// }

// export default BodyEvent;