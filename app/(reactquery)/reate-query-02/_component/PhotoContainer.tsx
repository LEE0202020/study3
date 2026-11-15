"use cilent"

import ErrorComponent from "@/components/common/ErrorComponent";
import Loading from "@/components/common/Loading";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation"; 

export interface Photo {
    albumId:        number;
    id:             number;
    title:          string;
    url:            string;
    thumbnalURL:    string;

}

const getPhoto = async (): Promise<Photo[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos")
    if(!response.ok) {
        throw new Error("getPhotos fetching failed")
    }    
    const datas = await response.json()
    return datas
}

export default function PhotoContainer() {
    const {data, isLoading, error} = useQuery <Photo[]> ({
        queryFn: getPhotos,
        queryKey: ["photos"]
    })

    const router = useRouter()

    const photos: Photo[] | undefined = data?.slice(0, 20)
    const photoList = photos?.map(({id, title, url}:Photo) => (
        <li
            key={id} className="flex items-center gap-1 cunsor-pointer"
            onClick={() => {router.push(`/reate-query-02/${id}`)}}
        >
            <Image 
                className="bg-gray-100"
                src={url}
                alt="프로필 이미지"
                width={50}
                height={50}
            />
            <p>{title}</p>
        </li>
    ))

    if(isLoading) return <Loading />
    if(error) return <ErrorComponent />
    return (
        <>
            <h1>사진 리스트</h1>
            <ul>{photoList}</ul>
        </>
    );
}