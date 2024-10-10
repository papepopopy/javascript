const test = {
    name: "홍길동",
    kor: 100,
    eng: 100,
    mat: 100,
    tot: function() {
        return this.kor + this.eng + this.mat
    },
    avg: function() {
        return(this.kor + this.eng + this.mat)/3
    },
    colorFun: function(){
        console.log(`결과값: 이름: ${this.name}, 총점: ${this.tot()}, 평균: ${this.avg()}`)
    }
}
test.colorFun()