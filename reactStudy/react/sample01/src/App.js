import './App.css';
// import Header from "/javaStudy/reactStudy/react/sample01/component/Header.js"
import Header from "./component/Header.js"
import Footer from './component/Footer.js'
import Body from './component/Body.js'
import BodyEvent from './component/BodyEvent.js'
import BodyState from './component/BodyState.js';
import BodyState2 from './component/BodyState2.js';
import BodyStateProp from "./component/BodyStateProp.js";
import BodyRef from "./component/BodyRef.js";

function ChildComp() {
  return <div>Child component</div>
}

function App() {
  const name = "홍길동"
  const BodyProp = {
    // <Body {...BodyProp} /> 객체와 같은 여러개의 데이터을 보낼 때 

    name: "홍길순",
    location: "부산",
    // favorList: ["파스타", "빵", "떡볶이"]
  }
  return (
    <div className="App">
      <Header />
      {/* <Body name={name} location={"부산"}/> */}
      {/* <Body {...BodyProp} /> */}
      <Body>
        <ChildComp />
      </Body>
      <hr />
      <BodyEvent />
      <hr />
      <BodyState />
      <hr />
      <BodyState2 />
      <hr />
      <BodyStateProp />
      <hr />
      <BodyRef />
      <Footer/>
    </div>
  );
}

export default App;
