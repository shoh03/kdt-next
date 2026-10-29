"use client"

import { useState } from "react";

interface Todo {
    task: string;
    done: boolean;
}

interface TodoProps {
    todo: Todo;
}


export default function Todos({todo}: TodoProps) {
    const {task, done} = todo

    const [did, setDid] = useState<boolean>(done)
    const handleDidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDid(e.target.checked)
    }


    return (
        <>
            <li>
                <p className={did ? "line-through" : ""}>{task}</p>
                <p>{`${did}`}</p>
                <input 
                type="checkbox" 
                checked={did}
                onChange={handleDidChange}
                />
            </li>
        </>
    );
}