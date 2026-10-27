// 컴포넌트
// tsx
// 1. 앞글자가 대문자로 시작한다 
// 2. DOM Tree 1개로 구성되어 있다
// 3. return 문에서는 tsx문법이 사용되며, html 문법과 비슷하지만 다르다 
// 4. tsx문법에서 변수 또는 js문법을 사용하고 싶다면 , {}로 감싸야 한다 
export default function page(){
    const user = {
        name: "홍길동", 
        age: 20, 
        address: "서울시 강남"
    }
    return (
        <>
            <p>이름: {user.name}</p>
            <p>나이:{user.age}</p>
            <p>주소:{user.address}</p>
        </>
    )
}