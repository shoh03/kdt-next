import { useRouter } from "next/router";

export interface User {
    id:       string;
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

export const getDatas = async (url: string) => {
    const response = await fetch(url)
    if(!response.ok) {
        throw new Error("getDatas fetching failed")
    }
    const datas = await response.json()
    return datas
}

export const getData = async (url: string, id: string) => {
    const response = await fetch(`${url}/${id}`)
    if(!response.ok) {
        throw new Error("getData fetching failed")
    }
    const data = await response.json()
    return data
}