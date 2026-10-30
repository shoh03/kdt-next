import { useQuery } from "@tanstack/react-query"
import { Photo } from "../../_component/PhotoContainer"
import Image from "next/image"
import { Router } from "lucide-react"
import { useRouter } from "next/router"
import Loading from "@/components/common/Loading"

interface PhotoReadProps {
    id: string
}

const getPhoto = async (id: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    const photo = await response.json()
    return photo
}

export default function PhotoRead({id}: PhotoReadProps) {

    const {data: photo, isLoading, error} = useQuery<Photo>({
        queryFn: () => getPhoto(id),
        queryKey: ["photo", id]
    })

    const router = useRouter()

    if(isLoading) return <Loading />

    return (
        <>
            <button 
                className="w-50 h-10 bg-blue-500 cursor-pointer"
                onClick={() => router.push("/react-query-02")}
            >뒤로가기</button>
            <p>제목: {photo?.title}</p>
            <Image
                className="bg-gray-100"
                src={photo?.url!}
                alt="이미지"
                width={50}
                height={50}
            />
        </>
    );
}   