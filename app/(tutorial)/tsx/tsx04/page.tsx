import HgComponent from "./_component/HgComponent";
import ShComponent from "./_component/ShComponent";

// 컴포넌트 분리
// 1. 컴포넌트는 반드시 닫는 태그가 존재해야한다.
// 2. 앞글자가 대문자로 시작한다.
// 3. atomic Design Pattern은 _component, _function과 같이 공용 함수 및 컴포넌트를 분리하는 것을 말한다.(해당 파일 내에서만 쓸 거라는 뜻)
export default function page() {
    return (
        <>
            <HgComponent />
            <ShComponent />
        </>
    );
}
// _폴더이름: 라우트로 인식되지 않음.