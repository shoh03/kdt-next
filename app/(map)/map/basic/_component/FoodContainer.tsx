import Food from "./Food"

export default function FoodContainer() {

        const foods = [
        {
            name: "샐러드 파스타",
            price: 15000
        },
        {
            name: "소고기",
            price: 50000
        },
        {
            name: "샌드위치",
            price: 5000
        },
        {
            name: "김치찌개",
            price: 100000
        },
        {
            name: "차돌리오올리오",
            price: 20000
        }
    ]
    // Next의 규칙: DOM에 직접 접근하지 마라
    // map
    // Food 컴포넌트로 리스트 props로 분리하기
    const foodList = foods.map((food, i) => (
        <Food key={i} food={food} />
    ))

    return (
        <>
            <ul>{foodList}</ul>
        </>
    );
}