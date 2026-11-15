
"use client" //이 컴포넌트를 브라우저에서 실행하겠다는 선언 

import { cn } from "cn"; // cn함수를 가져옴 
import { useEffect/*값이 변경된 뒤 실행할 코드 증록*/, useState /*갑이 바뀌면 화면애 다시 그림 */} from "react";

export default function UseEffectTest() {

    const [color/*현재 색상값*/, setColor/*color값을 변경하는 함수 */] = useState<string>("text-blue-500")//현재 색 
    // const [현재값, 값을바꾸는함수] = useState(초기값)  : 이런 형식으로 씀 
    const [number/*현재 숫자*/, setNumber/*숫자를 변경하려는 함수 */] = useState<number/*숫자타입이라는 뜻*/>(0/*초기값은 0*/)

    const increase = () => setNumber(number + 1)
    const decrease = () => setNumber(number - 1)
    const handleColorClick = () => setColor("text-red-500")

    // 마운트된 직 후 한 번 실행
    // useEffect(() => {
    //     console.log("useEffect 실행")
    // // }) //랜더링 될때 마다 똑같이 실행됨 -> 사이드 이펙트 발생 
    // }, []) 
    // 마운트 된 직 후 실행
    useEffect(() => {
        console.log("useEffect 실행")
    }, [color]) //하나의 컴포넌트에서 둘 이상 있으면 사이드 이펙트 생김 
                // color 값이 바뀔때마다 실행 
    return (
        <div className="w-125">     
            <h1 className={cn(color, "text-[30px] flex justify-center")}>{number}</h1>
            <div className="flex gap-2 mb-10">
                <button onClick={increase} className="w-50 h-10 bg-green-500">+</button>
                <button onClick={decrease} className="w-50 h-10 bg-green-500">-</button>
            </div>
            <button onClick={handleColorClick} className="w-50 h-10 bg-purple-500">컬러 변경</button>
        </div>
    );
}