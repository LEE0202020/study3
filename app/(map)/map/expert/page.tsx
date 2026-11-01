"use client"

import { useState } from "react";
import TodoContainer from "./_component/TodoContainer";

export default function page() {

    // 할 일 목록 상태 관리
    // 해당 목록을 화면에 리스트로 출력하고 할 일 앞에 체크박스를 클릭하면
    // done true라면 checkbox가 체크된다.
    // done이 true또는 false로 변경된다.
    // done이 true라면 line-through 스타일을 적용하기
    const [todos, setTodos] = useState([   // useState() : 이렇게 감싸야 상태관리됨 
        {
            task: "Next.ts 공부하기!",
            done: false
        },
        {
            task: "저녁 먹기",
            done: false
        },
        {
            task: "코딩 공부하기",
            done: true
        }
    ])

    const toggleDone = (index: number) => {
        setTodos(  //setTodos로 toggleDone을 바꿔야됨 : 다 검사해서 하나만 바꿔야욈 
            todos.map(
                // todo와 index값을 같이 넘김   // todo를 가지고 와서 done에 있는 값을 todo의 done을 반대로 바꿈
                (todo, i) => i === index ? {...todo, done: !todo.done} : todo// 인덱스 값이 어떤건지 비교해서 검사해야됨 
            )  // 리턴이 없는 함숭는 void임 
        )
    }

    return (
        <>
            <TodoContainer todos={todos} toggleDone={toggleDone} />
        </>
    );
}