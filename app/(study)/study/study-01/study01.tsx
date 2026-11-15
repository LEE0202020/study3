"use client"

import { useState } from "react"

export default function Page() {
  // number 상태 만들기
    const [number, setNumber] = useState(0)

  // increase 함수 만들기
    const increase = () => {
        setNumber(number + 1)
    }
    const decrease = () => {
        if (number ===0) 
        return;
        setNumber(number - 1)
    }
    const reset = () => {
        setNumber(0)
    }

  return (
    <>
      {number}    
      {number >= 5 ? "5이상입니다." : "5미만입니다. "}
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
      <button onClick={reset}>리셋</button>
    </>
  )
}