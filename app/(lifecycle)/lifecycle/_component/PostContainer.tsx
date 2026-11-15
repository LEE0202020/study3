// "https://jsonplaceholder.typicode.com/users"
// 데이터를 fetching하고, 각각 유저 데이터를 컴포넌트로 분리하여 화면에 이름만 출력하기
"use client"

import { Suspense/*데이터를 기다리는 동안 로딩 화면을 보여줌*/, use/*끝날 때까지 기다렸다가 결과를 꺼내는 함수*/, useEffect, useState } from "react";
import User from "./User";
import Loading from "@/components/common/Loading"; // 로딩중에 보여줄 컴포넌트 
import Link from "next/link"; //이동용 링크 

export interface Post { // 데이터의 모양을 typescript로 설명 
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}

const getDatas = async (): Promise<Post[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const datas: Post[] = await response.json()// json()으로 javascript데이터로 바꾸고 dtasㅇ 저징 
    return datas //가져온 게시글 배열를 함수밖으로 돌려줌  
}   
const postPromise = getDatas() /*나중에 받을 데이터 (대기중)*/

export default function PostContainer() {
    const posts = use<Post[]>(postPromise) //Promise가 완료될 때 까지 기다린 뒤 완료된 결과를 posts에 넣음 
    const postList = posts.map((post: Post, i) => (
        // <a key={i} href={`/lifecycle/side-effect/${post.id}`}>{post.title}</a>       == 컴포넌트 
        // 페이지 이동시 Link 태그(※필수). (a태그를 쓰면 깜빡임 발생하기 때문에 Next/Link태그로 써야 됨 )
        <Link key={i} href={`/lifecycle/side-effect/${post.id}`}>{post.title}</Link>
    ))              //게시글 제목{post.title}을 누르면 링크{`/lifecycle/side-effect/${post.id}`}로 이동

    // 😎링트 이동해도 Link 태그로이동 시킬 수 있는 방법  -> [id]/page 에서 작업 

    return (
        <Suspense fallback={<Loading />}>
            <ul>{postList}</ul>
        </Suspense>
    );
}