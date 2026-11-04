// URL의 id 값을 받아서 해당 Todo를 API에서 조회하고, 완료된 Todo라면 제목을 초록색으로 보여주는 Next.js 클라이언트 컴포넌트
"use client"   // 이 파일을 클라이언트 컴포넌트로 지정

import { useQuery } from "@tanstack/react-query";                // useQuery Hook을 가져옴
import { useSearchParams } from "next/navigation";               // 현재 URL의 쿼리스트링을 읽는 Next.js 훅(?뒤에 붙는 값)
import { Todo } from "../../_component/TodoQueryContainer";      //Todo 타입을 가져옴 API 응답 데이터가 어떤 모양인지 TypeScript에 알려줌 
import Loading from "@/components/common/Loading";               //로딩 중일 때보여 줄 컴포넌트
import ErrorComponent from "@/components/common/ErrorComponent"; //에러가 발생했을 때 보여 줄 컴포넌트

// 데이터 fetching 코드 완성하기
// 투두가 완성상태라면 게시글 제목의 색깔을 green으로 지정하기
const getTodos = async (id: string | null) => { // id는 두종류의 값이 들어올 수 있음. 
    if(!id) {   // ID가 없다면 API 요청을 보내지 않고 오류를 발생
        throw new Error("id is null")
    };
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)//fetch로 API 요청을 보냄
    if(!response.ok) { // 서버 요청이 성공하지 않았는지 확인
        throw new Error("getTodos fetching failed")  //에러가 발생 했을때 에러가 어디에 나왔는지 적는게 좋음(권장) 
    }
    const datas = await response.json()
    return datas
}

export default function TodoRead() {
    // useSearchParams: 리액트의 쿼리스트링을 가져오는 훅함수
    // .get(key)
    const searchParams = useSearchParams()
    const id = searchParams.get("id")
    
    const {data: todo, isLoading, error} = useQuery<Todo>({ //React Query로 데이터를 요청
        queryFn: () => getTodos(id),    //데이터를 가져오는 함수
        queryKey: ["todo", id]          //React Query가 데이터를 구분하고 캐싱할 때 사용하는 고유 키
    })

    if(isLoading) return <Loading />
    if(error) return <ErrorComponent />

    return (
        <>
            <h1 className={todo?.completed ? "text-green-500" : ""}>{todo?.title}</h1>
        </>
    );
}