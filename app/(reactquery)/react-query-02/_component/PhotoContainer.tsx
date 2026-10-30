// import { useQuery } from "@tanstack/react-query";
// import ImageComponent from "./ImageComponent";

// export interface ImageType{
//     albumId: number;
//     id: number;
//     title: string;
//     url: string;
//     thumbnailUrl: string;
// }


// const getDatas = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/photos")
//     const datas = await response.json()
//     return datas
// }

// export default function PhotoContainer() {
//     const {data, isLoading, error} = useQuery<ImageType[]>({
//         queryKey: ["images"],
//         queryFn: getDatas
//     })

//     const imageList = data?.map((image: ImageType, i: number) => (
//         <ImageComponent key={i} image={image} />
//     ))

//     return (
//         <>
            
//         </>
//     );
// }

"use client"

import ErrorComponent from "@/components/common/ErrorComponent"
import Loading from "@/components/common/Loading"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image";
import { useRouter } from "next/navigation";

export interface Photo{
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}


const getPhotos = async (): Promise<Photo[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos")
    if(!response.ok) {
        throw new Error("getPhotos fetching failed")
    }
    const datas = await response.json()
    return datas
}

export default function PhotoContainer() {

    const {data, isLoading, error} = useQuery<Photo[]>({
        queryFn: getPhotos,
        queryKey: ["photos"]
    })

    const router = useRouter()
    // router.push()
    // router.replace()

    const photos: Photo[] | undefined = data?.slice(0,20)
    const photoList = photos?.map(({id, title, url}: Photo) => (
        <li 
            key={id} className="flex items-center gap-1 cursor-pointer"
            onClick={() => {router.push(`/react-query-02/${id}`)}}
        >
            <Image
                className="bg-gray-100"
                src={url}
                alt="프로필이미지"
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