export const instant = false   //instant라는 이름의 값ㅇㄹ 외부로 내보냄 

import { Suspense } from "react";              //Suspense(안ㄷ쪽 컴포넌트가 데이터를 기다리는 동안 다른 화면을 보여주는 기능) 가져옴 
import TodoRead from "./_component/TodoRead";  //TodoRead(할 일 상세내용 보여주는)컴토넌트 가져옴 
import Loading from "@/components/common/Loading"; // Loading(로딩준 보여줄)컴포넌트 가져옴 
interface Params { 
    params: Promise<{id: string}>
} //페이지가 받는 값의 형태를 TypeScript로 정의함 

export default async function page({params}: Params) { // 전달받은 값중 params먼 꺼냄 
    const {id} = await params; // params가 준비가 될때까지 기다린 후. 그 안에 id를 꺼냄 

    return (
        <Suspense fallback={<Loading />}> {/* TodoRead가 데이터를 기다리는 동안 보여중 화면을 설정함 => TodoRead가 아직 준비가 안됬다면 <Loading />을 보여달라는 의미 */} 
            <TodoRead id={id} />{/*TodoRead 컴포넌트에 현재 url에서 꺼낸 id를 전달함*/}
        </Suspense>
    );
}