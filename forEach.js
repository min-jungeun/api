const mydata = ["영어","중국어","일본어"];

mydata.forEach(function(value, i){
        console.log("forEach의 첫번째 매개인자 :", value);
        console.log("array문을 그대로가져다 씀 :", mydata[i])
})
for(i in mydata){
    console.log("for in문 :",mydata[i]);
}

const testdata = [
    ["네이버", "naver"],
    ["다음", "daum"],
    ["구글", "google"]
]

//1번문제 콘솔창에 daum이 출력되도록 한다.
console.log(testdata[1][1])
//2번문제 콘솔창에 네이버, 다음, 구글이 출력되도록 한다. (forEach사용하기)
testdata.forEach((v, i)=>{
    console.log(v[0])
})



// const testdataobj = [
//     {
//         nm : "네이버"
//     },
//     {
//         nm : "다음"
//     },
//     {
//         nm : "구글"
//     }
// ]

// testdataobj.forEach((v, i)=>{
//     console.log(v.nm)
//     console.log(v["nm"])
// })


const testdataobj = [
    {
        nm : "네이버",
        href: "http://www.naver.com",
        cls : "naver"
    },
    {
        nm : "다음",
        href: "http://www.daum.net",
        cls : "daum"
    },
    {
        nm : "구글",
        href: "http://www.google.com",
        cls : "google"
    }
]

testdataobj.forEach((v, i)=>{
    // console.log(`<li><a herf="${v.href}">${v["nm"]}</a></li>`)
    console.log(`<li class="${v.cls}"><a herf="${v.href}">${v["nm"]}</a></li>`)
})




function nomalfun(a, b ){
    //선언적 함수, 위치 상관 없이 늦게 들어와도 우선권을 줌
    //중요한 함수 선언할 때, 무거움
}

const nomalfun = (a, b)=>{
    //실행위치 엄청 중요 (정확한 자리에 넣어야함)
    //1회용 함수, 가볍다
}