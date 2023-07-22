"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BackRouter() {
  const router = useRouter();
  const onBack = function () {
    router.back();
  };

  return (
    <div className="flex flex-row justify-end">
      <Image onClick={onBack} src="/close.svg" width={20} height={20} />
    </div>
  );
}
