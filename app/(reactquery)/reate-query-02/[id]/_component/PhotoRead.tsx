"use client"

import { useQuery } from "@tanstack/react-query";
import { Photo } from "../../_component/PhotoContainer";
import Loading from "@/components/common/Loading";
import ErrorComponent from "@/components/common/ErrorComponent";
import Image from "next/image";
import { useRouter } from "next/router";

interface PhotoReadProps {
    id: string;
}

const getPhoto = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    const photo = await response.json()
    return photo
}

export default function PhotoRead((id): PhotoReadProps) {

    const {data: photo, isLoading, error } = useQuery<Photo>({
        queryFn: () => getPhoto(id),
        queryKey: ["photo", id],

    })
    return (
        <>
            Enter
        </>
    );
}