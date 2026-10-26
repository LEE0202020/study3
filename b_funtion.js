"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function explFunction() { }
const explFunctionArrow = () => { };
// 정수 두개를 빋아서 콘솔에 
function explFunction01(num1, num2) {
    console.log(num1 + num2);
}
// console은 리턴 타입이 아님
function explFunction01() { }
(lastName, firstName) => lastName + firstName;
// Optional Paramiter
const funcWithOptional = (x, y, z) => {
    // 타입 검증 강제 (들어올지 안들어올지 모르기 때문에 )
    // 옵셔널 값은 검증을 강제한다 
    if (y === undefined) {
        return x;
    }
    if (z === undefined) {
        return x + y;
    }
    return x + y * z;
};
funcWithOptional(1);
funcWithOptional(1, 2);
funcWithOptional(1, 2, 3);
// Resr Parameter(...)
const functionWithParams = (...numbers) => numbers.reduce((acc, curr) => acc + curr);
console.log(functionWithParams(10, 20));
//# sourceMappingURL=b_funtion.js.map