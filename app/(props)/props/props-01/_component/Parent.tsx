import child from "./Child";

export default function Parent() {

    const name: string = "홍길동"
    const name: string = "010-1234-5678"
    return (
        <>
            부모 태그
            <Child name = {name} phone={phone}/>
        </>
    );
}