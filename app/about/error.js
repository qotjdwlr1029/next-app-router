'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AboutError( { error, reset } ){

    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.replace('/')
        },5000)
    },[])

    return(
        <div>
            <h1>오류가 발생했습니다.</h1>
            <h1>5초 후에 메인 페이지로 이동합니다.</h1>
            <div>
                {error.message}
            </div>
        </div>
    )

}