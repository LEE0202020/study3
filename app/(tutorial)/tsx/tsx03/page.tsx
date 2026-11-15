// age 상수로 나이를 설정한다(임의)
// 19세 이상 성인이라면 "입장 가능"
// 성인이 아니라면 "입장 불가"
// 성인과 관계 없이 age가 짝수라면 "당첨"을 출력
import { ReactNode } from "react";
import { JSX } from "react/jsx-runtime";

export default function page() {

    const age: number = 15;
    const [pass, notPass, lucky, unLucky]: string[] = ["입장 가능", "입장 불가", "당첨", "꽝"]
    const isAdult:  boolean = age >= 19;
    const isEven: boolean = age % 2 === 0

    const passComponentb: ReactNode = (<span>{pass}</span>)
    const notpassComponentb: JSX.Element= (<span>{notPass}</span>)
    const luckyComponentb = (<span>{lucky}</span>)
    const unluckyComponentb = (<span>{unLucky}</span>)
    
    const enter = isAdult ? passComponentb : notpassComponentb
    const win = isEven ? luckyComponentb : unluckyComponentb
    const result: string = `당신의 나이는 ${age}살이므로, ${enter}하고, ${win}입니다`

    return (
        <>
            {result}
        </>
    );
}