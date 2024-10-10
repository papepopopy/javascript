/*
// 1.
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((resp) => resp.json()) //json구조로 변환
    .then((data) => console.log(data))
*/
// 2.
const getData = async () => {
    try {
        // const resp = await fetch("https://jsonplaceholder.typicode.com/posts")
        const resp = await fetch("https://jsonplaceholder.typicode.com/users")
        console.log("resp =>" + resp) //
    
        const data = await resp.json() //json 구조로 전환
        // console.log(data)
        // data.forEach(post => {
        data.forEach(item => {
            // console.log(post.id)
            // console.log(post.userId)
    
            // console.log(item)
            for(let key in item) {
                // console.log(key, item[key])
                // console.log(`${key} => ${item[key]}`)
                
                // 객체를 풀어주는 과정
                if (typeof item[key] === "object") {// value = object
                    console.log(`${key}값은 data가 아닌 객체입니다.`) 
    
                    let item2 = item[key] // address 객체 찾기
                    // console.log(key)
                    
                    for(let key2 in item2) {
                        console.log(`${key}:${key2} => ${item2[key2]}`)  //geo 객체 찾기

                        if(typeof item2[key2] === "object") {
                            let item3 = item2[key2]
                            for(let key3 in item3)
                                console.log(`${key2}:${key3} => ${item3[key3]}`)
                        }
                    }
    
                } else { // value = data
                    console.log(`${key} => ${item[key]}`)
                }
            }
            
        });
    } catch(e) {
        console.log(`error: ${e}`)
    }
}

getData() //함수 실행