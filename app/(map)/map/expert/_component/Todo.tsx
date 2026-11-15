// Todo는 타입으로 들고 와야되기 때문에 type키워드을 씀 
import type { Todo } from "./TodoContainer";

interface todoProps {
    index: number;
    todo: Todo;
    toggleDone: (index: number) => void;
}

// 할 일 목록 상태 관리 
// 해당 목록을 화면에 리스트로 출력하고 할 일 앞에 체크박스를 클릭하면 
// done true라면 checkbox가 체크된다.
// done이 true또는 false로 변경된다.
// done이 true라면 line-through 스타일을 적용하기


export default function Todo({todo, index, toggleDone}: todoProps) {
    const {task, done} = todo

    return (
        <li>
            {/* /* 인덱스 , 함수사용 안됨 , 익명함수 => 인덱스와 함께 같이 넘겨라 */ }
                                        {/* onChange 상태를 변경할 수 있는 핸들러를 만들어야됨  */}
            <input type="checkbox" checked={done} onChange={() => {toggleDone(index)}} />
            <span className={done ? "line-through" : ""}>{task}</span>
        </li>
    );
}