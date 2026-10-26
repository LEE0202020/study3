type MyObject = {
    att1: string,
    att2: number,
    someArrayFunc: () => void,
    someFunc: (num1: number, num2: number) => number
}

const explObject: MyObject = {
    att1: "string value",
    att2: 20.123,
    someArrayFunc: () => console.log("와 마지막 시간이다~"),
    someFunc: function(num1: number, num2: number){
        return num1 + num2
    }
}

// key를 제한시키고 싶을 때
// |: or
type ExampleIndex = "a" | "b" | "c"

const myObject01: {[k in ExampleIndex]: string} = {
    a: "홍길동",
    b: "장보고",
    c: "이순신",
}



// 확장형 문법
// 유저의 타입 붙이기
type UserGeo = {
    lat: number,
    func: () => number[]
}

type UserAddress = {
    street: string,
    city: string,
    zipcode: number,
    geo: UserGeo
}

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: UserAddress
}

const user: User = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        city: "Gwenborough",
        zipcode: 92998-3874,
        geo: {
            lat: -37.3159,
            func: () => { return [1,2,3] }
        }
    }
}
