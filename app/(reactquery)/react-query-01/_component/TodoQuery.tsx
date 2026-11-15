
import Link from "next/link"   //Next.js의 Link(다른 페잊로 이동할 때 쓰는 태그)를 가져옴 
import { Todo } from "./TodoQueryContainer";  //다른 파일에 정의된 Todo(할 일 데이터가 어떤파일인지 적어둔 타입)타입을 가져옴 

interface TodoQueryProp {  // 이 컴포넌트가받을 props의 형태 정함 
    todo: Todo              // todo란ㄴ 이름으로 Todo의 형태의 데이터 하나를 받아야됨  
}

export default function TodoQuery({todo}: TodoQueryProp) {
    const {id, title, completed, userId}/*Todo 안에 있는 값을 꺼내서 변수로 만듬*/ = todo 
    return (
        <Link href={`/react-query-01/${id}`}>{title}</Link> // 제목을 화면에 표시
    );
}
