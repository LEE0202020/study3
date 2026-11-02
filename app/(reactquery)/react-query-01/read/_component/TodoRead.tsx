"use client"

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation"; // 현재 URL의 쿼리스트링을 읽는 Next.js 훅(?뒤에 붙는 값)
import { Todo } from "../../_component/TodoQueryContainer";
import Loading from "@/components/common/Loading";
import ErrorComponent from "@/components/common/ErrorComponent";

// 데이터 fetching 코드 완성하기
// 투두가 완성상태라면 게시글 제목의 색깔을 green으로 지정하기
const getTodos = async (id: string | null) => { // id는 두종류의 값이 들어올 수 있음. 
    if(!id) {   // ID가 없다면 API 요청을 보내지 않고 오류를 발생
        throw new Error("id is null")
    };
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    if(!response.ok) { // 서버 요청이 성공하지 않았는지 확인
        throw new Error("getTodos fetching failed")
    }
    const datas = await response.json()
    return datas
}

export default function TodoRead() {
    // useSearchParams: 리액트의 쿼리스트링을 가져오는 훅함수
    // .get(key)
    const searchParams = useSearchParams()
    const id = searchParams.get("id")
    
    const {data: todo, isLoading, error} = useQuery<Todo>({
        queryFn: () => getTodos(id),
        queryKey: ["todo", id]
    })

    if(isLoading) return <Loading />
    if(error) return <ErrorComponent />

    return (
        <>
            <h1 className={todo?.completed ? "text-green-500" : ""}>{todo?.title}</h1>
        </>
    );
}