"use client";

import { SigninValues, signinSchema } from "@/app/containers/auth/schemas/siginin.schema";
import { useLayout } from "@/components/layouts/provider/LayoutProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function SignInPage() {
  const { setHeaderTitle } = useLayout();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninValues>({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = (values: SigninValues) => {
    console.log("로그인 제출");
    console.log(values);
  };

  useEffect(() => {
    setHeaderTitle("이메일 로그인");
  }, [setHeaderTitle]);

  return (
    <main className="flex items-center justify-center p-6 mt-40">
      <section className="flex flex-col items-center w-full max-w-sm gap-4">
        <h1 className="text-2xl font-bold">이메일로 로그인</h1>

        <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit(onSubmit)}>
          {/* 메일 */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">이메일</label>
            <Input type="email" {...register("email")} />
            {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
          </div>

          {/* 이름 */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-md">사용자 이름</label>
            <Input type="text" {...register("userName")} />
            {errors.userName && <p className="text-sm text-destructive">{errors.userName.message}</p>}
          </div>

          {/* 상호 */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">상호명</label>
            <Input type="text" {...register("storeName")} />
            {errors.storeName && <p className="text-sm text-destructive">{errors.storeName.message}</p>}
          </div>
          <Button size="lg" className="w-full">
            로그인
          </Button>
        </form>
        <Link href="/join" className="text-sm text-muted-foreground">
          회원가입
        </Link>
      </section>
    </main>
  );
}
