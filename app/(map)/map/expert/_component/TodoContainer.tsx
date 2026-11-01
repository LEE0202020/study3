import Todo from "./Todo"; // Todo.tsx 파일에서 Todo 컴포넌트를 가져옴 

export interface Todo {
    task: string;
    done: boolean;
}

export interface TodoContainerProps {
    todos: Todo[],
    toggleDone/*함수*/: (index: number) => void;
}

export default function TodoContainer(props: TodoContainerProps) {
    const {todos, toggleDone} = props       
    const todoList = todos.map((todo: Todo, i: number) => (
        <Todo key={i} index={i} todo={todo} toggleDone={toggleDone} />
    ))

    return (
        <ul>{todoList}</ul>
    );
}