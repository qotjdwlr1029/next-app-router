"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NoDataFoundError({ error, reset }) {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.back();
    }, 1000);
  }, []);

  return (
    <div>
      <h1>데이터가 없습니다.</h1>
      <h1>이전 페이지로 이동합니다.</h1>
      <div>{error.message}</div>
    </div>
  );
}
