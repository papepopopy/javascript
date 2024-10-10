// const [상태변수, set함수] = useState(초기값)
import { useState } from "react"

function BodyState() {
    const name = "길순이"

    // 변수
    const [count, setCount] = useState(0)
    const onIncrease = () => {
        setCount(count+1)
    }
    // setCount함수를 이용하여 값을 바꿀수 있다.

    // const onIncrease = () => {
    //     console.log("1씩 증가")
    // }

    const [text, setText] = useState("")
    const inputOnChange = (e) => {
        setText(e.target.value)
        // console.log("change..")
        console.log(e.target.value)
    }

    // 날짜 변경시
    const [date, setDate] = useState("")
    const dateOnChange = (e) => {
        // console.log("date change...")
        setDate(e.target.value)
        console.log(e.target.value)
    }

    // select
    const [option, setOption] = useState("")
    const selectOnChange = (e) => {
        // console.log("select...")
        setOption(e.target.value)
        console.log(e.target.value)
    }


    // textarea
    const [text2, setText2] = useState("")
    const textareaOnChange = (e) => {
        setText2(e.target.value)
        console.log(e.target.value)
    }


    return(
        <div>
            <div>
                <h2>이름 : {name}</h2>
                <hr />
                <h1>useState로 관리하는 count변수</h1>
                <h2>{count}</h2>
                <button onClick={onIncrease}>1씩 증가</button>

                <hr />
                <input onChange = {inputOnChange} />
                <div>{text}</div>
                <hr />
                <input type="date" value="{date}" onChange={dateOnChange} />
                <hr />
                <select value={option} onChange={selectOnChange}>
                    <option key="1번">
                        1번
                    </option>
                    <option key="2번">
                        2번
                    </option>
                    <option key="3번">
                        3번
                    </option>
                </select>

                <hr />
                <textarea value={text2} onChange={textareaOnChange}></textarea>
            </div>
        </div>
    )
}
export default BodyState