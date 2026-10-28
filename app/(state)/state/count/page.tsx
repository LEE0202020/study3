"use client"
import { useState } from "react"

import default function page() {
    // number(변수), setNumber(함수) = useState(0) 
    const [number, setNumber] = useState<number>(0)
// }number을 바꿀 수 있는건 setNumber 밖에 없음 


export default function page() {
    let number = 0
    const increate = () => number += 1
    const decreate = () => number -= 1

    return (
        <>
            <button
                className="w-25 h-12 bg-blue-500 action:bg-blue-700"
                onClick={decreate}
            >-1</button>
            <h1>{number}</h1>
            <button
                className="w-25 h-12 bg-blue"
            >+1</button>
        </>
    );
}