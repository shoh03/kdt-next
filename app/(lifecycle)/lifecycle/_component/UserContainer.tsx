// "https://jsonplaceholder.typicode.com/users"
// 데이터를 fetching하고, 각각 유저 데이터를 컴포넌트로 분리하여 화면에 이름만 출력하기

"use client"

import { Suspense, use, useEffect, useState } from "react";
import User from "./User";  
import Loading from "@/components/common/Loading";

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

const getDatas = async (url: string): Promise<User[]> => {
    const response = await fetch(url)
    const datas = await response.json()
    return datas
}

const userPromise = getDatas("https://jsonplaceholder.typicode.com/users")


export default function UserContainer() {
    // const [users, setUsers] = useState<User[]>([])


    
    // useEffect(() => {
        //     getDatas("https://jsonplaceholder.typicode.com/users")
        //         .then(setUsers)
        // }, [])
        
    const users = use<User[]>(userPromise)
    const userList = users.map((user: User, i) => (
        <User key={i} user={user}/>
    ))

    return (
        <Suspense fallback={<Loading />}>
            <ul>{userList}</ul>
        </Suspense>
    );
}