// https://jsonplaceholder.typicode.com/users
"use client"
import { getDatas, User } from "@/api/user/user.api";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";




const url = "https://jsonplaceholder.typicode.com/users"

export default function UserContainer() {

    const {data: users, isLoading, refetch, error} = useQuery<User[]>({
        queryKey: ["users"],
        queryFn: () => getDatas(url)
    })

    // const router = useRouter()

    const userNameList = users?.map(({id, name}) => (
        <li 
            key={id}
            onClick={() => {router.push(`/react-query-03/${id}`)}}
        >
            {name}
        </li>
    ))

    return (
        <>
            <ul>{userNameList}</ul>
        </>
    );
}