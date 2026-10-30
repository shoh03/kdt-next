// const myTimeout = setTimeout(() => {}, 1000): 1000 -> 1초 뒤에 실행
// clearTimeout(myTimeout): myTimeout 종료
// const myInterval = setInterval(() => {}, 1000): 1000 -> 1초 마다 실행
// clearInterval(myInverval): Interval 종료
"use client"

import { useEffect, useState } from "react";

export default function page() {
    const [message, setMessage] = useState<string>("타이머 실행 결과")

    useEffect(() => {const timer = setTimeout(() => {
        console.log("호출됨")
        setMessage("3초 후 메세지 변경")
    }, 3000)

    return () => {
        clearTimeout(timer)
    }
    })

    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    return (
        <>
            <p>{message}</p>
            <input type="text" onChange={handleMessageChange}/>
        </>
    );
}