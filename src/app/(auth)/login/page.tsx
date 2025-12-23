"use client";

import { useLayout } from "@/components/layouts/provider/LayoutProvider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Login() {
  const { setHeaderTitle } = useLayout();

  useEffect(() => {
    setHeaderTitle("로그인");
  }, [setHeaderTitle]);

  return (
    <main className="flex items-center justify-center p-6 mt-40">
      <section className="flex flex-col items-center w-full max-w-sm gap-4">
        <h1 className="mb-4 text-2xl font-bold">로그인</h1>
        <Image src="/logo-temp.jpeg" alt="재고키퍼 로고" width={180} height={180} priority />

        <Button asChild size="lg" className="w-full">
          <Link href="/signin">이메일</Link>
        </Button>
        <Link href="/join" className="text-sm text-muted-foreground">
          회원가입
        </Link>

        <Separator></Separator>

        <Button size="lg" disabled className="w-full">
          네이버
        </Button>

        <Button size="lg" disabled className="w-full">
          구글
        </Button>

        <Button size="lg" disabled className="w-full">
          카카오
        </Button>
      </section>
    </main>
  );
}
