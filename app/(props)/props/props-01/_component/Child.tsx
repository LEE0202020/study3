// props란?
// -하나의 컴포넌트에서 다른 컴포넌트로 데이터를 전달하는데 사용합니다
// 부모 컴포넌트에서 자식 컴포넌트에게 값을 전달하고, 
// Prrops의 타입을 컴토넌트 위에 선언하는것이 관례입니다

interface ChildProps {
    name: string;
    phone: string;
}

// export default function Child(props) {
export default function Child({name, phone}: ChildProps) {
    // console.log("props", props)

    return (
        <>
            자식 컴포넌트 
            <p>{name}</p>
            <p>{phone}</p>
        </>
    );
}