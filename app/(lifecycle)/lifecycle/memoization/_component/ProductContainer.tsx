"use client"

import { useCallback, useMemo, useState } from "react";
import Amount from "./Amount";

export default function ProductContainer() {

    console.log("부모 랜다링")
    const [like, setLike] = useState<number>(0)
    const [amount, setAmount] = useState<number>(1)
    const [coupon, setCoupon] = useState<number>(0)

    const totalPrice = useMemo(() => {
        console.log("해비연산")
        return amount * 12500 - coupon * 1000
    }, [amount, coupon])
    // [] 안에 있는 값들이 바뀔 때마다 리랜더링, []을 비워놓으면 최초 랜더링만 함.


    // 실무에서는 부모에서 자식에게 props로 넘겨줄때 사용
    const handleAddAmountClick = useCallback(() => setAmount((prev) => prev + 1), [])
    const handleSubtractAmountClick = useCallback(() => setAmount((prev) => prev - 1), [])
    const handleAddCouponClick = useCallback(() => setCoupon((prev) => prev + 1), [])
    const handleSubtractCouponClick = useCallback(() => setCoupon((prev) => prev - 1), [])

    return (
        <>
            <div className="w-125 h-87.5 mx-auto my-5">
                <div className="border border-gray-300 p-7.5">
                    <p>[책]여름과 루비</p>
                    <p>총 가격: {totalPrice}</p>
                    <button 
                        className="p-2 bg-blue-500 rounded m-2 text-white" 
                        onClick={() => setLike(like + 1)}
                    >좋아요 {like}</button>
                </div>

                <Amount
                    amount={amount}
                    coupon={coupon}
                    handleAddAmountClick = {handleAddAmountClick}
                    handleSubtractAmountClick = {handleSubtractAmountClick}
                    handleAddCouponClick = {handleAddCouponClick}
                    handleSubtractCouponClick = {handleSubtractCouponClick}
                />
            </div>
        </>
    );
}