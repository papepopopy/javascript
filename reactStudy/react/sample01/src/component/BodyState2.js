import userEvent from "@testing-library/user-event";
import { useState } from "react";

function BodyState2() {
    // const [name, setName] = useState("")
    // const [gender, setGender] = useState("")
    // const [birth, setBirth] = useState("")
    // const [bio, setBio] = useState("")

    // 객체 변수 변경
    const [state, setState] = useState({
        name: "홍길동",
        gender: "",
        birth: "",
        bio: ""
    })

    // console.log(state.name, state["name"])

    // const onChangeName = (e) => {
    //     setName(e.target.value)
    //     console.log(value)
    // }
    // const onChangeGender = (e) => {
    //     setGender(e.target.value)
    //     console.log(gender)
    // }
    // const onChangeBirth = (e) => {
    //     setBirth(e.target.value)
    //     console.log(e.target.value)
    // }
    // const onChangeBio = (e) => {
    //     setBio(e.target.value)
    //     console.log(e.target.value)
    // }

    // const handleOnChange = (e) => {
    //     setState({
    //         ...state, // 현재 상태의 속성을 펼친다(스프레드 연산자)
    //         [e.target.name]: e.target.value// 특정 속성을 업데이트한다
    //     })
    //     console.log(state)
    // }

    const handleOnChange = (e) => {
        setState((s) => {
            return {
                ...state, // 현재 상태의 속성을 펼친다(스프레드 연산자)
                [e.target.name]: e.target.value// 특정 속성을 업데이트한다
            }
        })
    }
    
    return(
        <div>
            <div>
                <input name="name" value={state.name} onChange={handleOnChange} placeholder="이름" />
                <div>이벤트 발생{state.name}</div>
            </div>
            <div>
                <select name="gender" value={state.gender} onChange={handleOnChange}>
                    <option key = {""}></option>
                    <option key = {"남성"}>남성</option>
                    <option key = {"여성"}>여성</option>
                </select>
            </div>
            <div>
                <input name="birth" type="date" value={state.birth} onChange={handleOnChange} />
            </div>
            <div>
                <textarea name="bio" value={state.bio} onChange={handleOnChange}>
                </textarea>
            </div>
        </div>
    )
}
export default BodyState2;