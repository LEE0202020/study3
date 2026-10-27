function explFunction(){}
const explFunctionArrow = () => {}

// 정수 두개를 빋아서 콘솔에 
function explFunction01(num1: number, num2: number): void{// 소관호 뒤에있는데 리턴 타입 
    console.log(num1 + num2)
}
// console은 리턴 타입이 아님

function explFunction01 = (lastName: string, firstName: string) : string => lastName + firstName


// Optional Paramiter
const funcWithOptional = (x: number, y?: number, z?: number): number => {
// 타입 검증 강제 (들어올지 안들어올지 모르기 때문에 )
// 옵셔널 값은 검증을 강제한다 
    if(y===undefined){
        return x
    }
    if(z === undefined){
        return x + y
    }

    return x + y * z 
}

funcWithOptional(1)
funcWithOptional(1, 2)
funcWithOptional(1, 2, 3)




// Resr Parameter(...)
const functionWithParams = (...numbers: number[]) : number => numbers.reduce((acc, curr) => acc + curr) 
console.log(functionWithParams(10, 20))






