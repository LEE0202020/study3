// 함축형 문법 (inplicit type assertion)
// 값을 통해 타입을 알려주는 종적 바이딩 문법
let strImpl = "string value" // string
let numImpl = 10             // number
let boolImpl = true          //boolean
let arrayImpl = [1, 2, 3, 4] //number[] :number array

// 다른타입을 넣을 시 오류 
// strImpl = 10 //숫자는 못들어감 
strImpl = "abc" // 

// 설명형 문법(explicit type annotation)✨
let strExpl: "string value"
let numExpl: 52.1234
let boolExpl: true
let strArrExpl: string[] = ["a", "b", "c"]

// strArrExpl.push(10)
strArrExpl.push("d")
