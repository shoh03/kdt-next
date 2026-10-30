import Image from "next/image";
import catSrc from "@/public/assets/images/react-query-02/cat.jpg"

// "https://jsonplaceholder.typicode.com/photos"에서 데이터를 패칭하고
// 20개만 잘라서 화면에 이미지 태그를 활용해서 
// 카카오 프렌즈샵처럼 좌우 배치로 10행 2열 출력하기
// ex) Image태그 title

const url = "@/public/assets/images/react-query-02/cat.jpg"

export default function page() {
    return (
        <>
            {/* "/": resource의 "/"의 경로는 public 경로를 의미함.(app 경로 X) */}
            <Image 
                src={"/assets/images/react-query-02/cat.jpg"}
                alt="애옹" 
                width={600}
                height={300}
                // priority: 지연모드 방지(이 파일을 최우선으로 읽어라)
                priority
            // placeholder: 로딩 중 블러처리"
            />

            <Image 
                src={"/assets/images/react-query-02/cat.jpg"}
                alt="애옹" 
                width={600}
                height={300}
                className="bg-gray-800"
            // placeholder: 로딩 중 블러처리
            />

            <Image 
                src={catSrc}
                alt="애옹" 
                width={600}
                height={300}
                // placeholder: 로딩 중 블러처리
                placeholder="blur"
            />  
        </>
    );
}