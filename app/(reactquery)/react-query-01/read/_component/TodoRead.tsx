"use client"

import { useSearchParams } from "next/navigation";

//

export default function TodoRead() {
    // useSearchParams: 리엑트의 쿼리스트링을 가져오는 훅함수
    // .get(key) 
    const searchParams = useSearchParams()
    const id = searchParams.get("id")
    // console.log("id", id)

    return (
        <>
            <
                className="text-2xl font-bold">Todo Read</className>
        </>
    );
}