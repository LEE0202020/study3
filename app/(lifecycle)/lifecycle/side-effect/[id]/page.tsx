//※권장하지 않음
// 😎링트 이동해도 Link 태그로이동 시킬 수 있는 방법  -> [id]/page 에서 작업 

interface Params { // Params라는 TypeScript 타입을 정의
    params: Promise<{id: string /*id는 문자열이다*/}> //나중에 받을 예정
}

export default async function page({params}: Params) {
                             //전달받은 값 중 params만 꺼내고, 형태는 위에서 정의한 Params를 따른다
    const {id} = await params; //Promise가 와료될 때까지 기다린 후 id를 꺼냄 
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, )
    const post = await response.json()

    return (
        <>
            <p>{post.id}</p>
            <p>{post.title}</p>
        </>
    );
}