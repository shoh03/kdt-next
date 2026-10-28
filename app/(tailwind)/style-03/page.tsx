// hover: 마우스를 올렸을 떄 
import { STYLE_03_CLASSES as S} from "./style-03.style"

export default function page() {
    return (
        <>
            <a href="#" className={S.a}>Hover 시 스타일 변경</a>
            {/* 버튼이 눌리면 배경 컬러를 그린, 글자색을 흰색으로 변경 */}
            <button className="active:bg-green-600 active:text-white">스타일 변경</button>
        </>
    );
}