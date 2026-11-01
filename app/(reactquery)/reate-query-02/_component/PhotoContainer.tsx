"use client"

import { useQuery } from "@tanstack/react-query"
import { Cinzel } from "next/font/google"

export default function page() {
    const getPost = async () => {
        const response = await fetch ("https://jsonplaceholder.typicode.com/photos")
        if(!response.ok) {
            throw new  Ewrror("getPhotos fetching failed")
        }
        const datas = await response.json()
        return datas 
    }    

export default function Todoimg() {
    const {data, isLoading, error} = useQuery({
        queryFn: ,
        queryKey
    })
    return (
        <>
            
        </>
    );
}


