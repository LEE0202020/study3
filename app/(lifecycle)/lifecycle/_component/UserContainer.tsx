// "https://jsonplaceholder.typicode.com/users"
// 데이터를 fetching하고, 각각 유저 데이터를 컴포넌트로 분리하여 화면에 이름만 출력하기
"use client"

import { useEffect, useState } from "react";

// 새로 고침 버튼 추가하기
export interface User {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}

export default function UserContainer() {
    const [users, setUsers] = useState<User[]>([])
    const getDatas = async (): Promise<User[]> => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const datas: User[] = await response.json()
        return datas
    }   

    useEffect(() => {
        getDatas()
            .then(setUsers)
    }, [])

    // console.log(users)
    const userList = users.map((user:User) => (
        <User user={user} />
    ))

    return (
        <>
            
            {/* 비동기는 가져오는데 시간이 필요(로딩중) */}
            <ul>{userList}</ul>
        </>
    );
}