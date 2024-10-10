import {useState} from "react"
// 자식 컴포넌트
function Viewer({number}) {
    return <div>
        {number%2 == 0 ? <h3>짝수</h3>:<h3>홀수</h3>}
    </div>
}

// 부모 컴포넌트
function BodyStateProp() {
    // 이벤트 헨들러 및 변수
    const [number, setNumber] = useState(0);
    const onDecrease = () => {
        setNumber(number-1)
    }
    const onIncrease = () => {
        setNumber(number+1)
    }

    return(
        <div>
            <h1>BodyStateProp</h1>
                <h3>number : {number}</h3>
                <Viewer number={number} />
            <hr />
            <div>
                <button onClick={onIncrease}>증가</button>
                <button onClick={onDecrease}>감소</button>
            </div>
        </div>
    )
}
export default BodyStateProp