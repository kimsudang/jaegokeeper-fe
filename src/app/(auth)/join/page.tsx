"use client";

import { joinSchema, JoinValues } from "@/app/containers/auth/schemas/join.schema";
import { useLayout } from "@/components/layouts/provider/LayoutProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function JoinPage() {
  const { setHeaderTitle } = useLayout();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JoinValues>({
    resolver: zodResolver(joinSchema),
  });

  const onSubmit = (values: JoinValues) => {
    console.log("회원가입 제출");
    console.log(values);
  };

  useEffect(() => {
    setHeaderTitle("회원가입");
  }, [setHeaderTitle]);

  return (
    <main className="flex items-center justify-center p-6 min-h-dvh">
      <section className="flex flex-col items-center w-full max-w-sm gap-4 p-8">
        <h1 className="text-2xl font-bold">회원가입</h1>

        <form className="flex flex-col w-full gap-4 mt-6" onSubmit={handleSubmit(onSubmit)}>
          {/* 메일 */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">메일</label>
            <div className="flex flex-col gap-1">
              <Input type="email" {...register("email")} />
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>
          </div>

          {/* 이름 */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">이름</label>
            <div className="flex flex-col gap-1">
              <Input type="text" {...register("userName")} />
              {errors.userName && <p className="text-sm text-destructive">{errors.userName.message}</p>}
            </div>
          </div>

          {/* 사장님 번호 */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">개인번호</label>
            <div className="flex flex-col gap-1">
              <Input type="tel" {...register("userPhone")} />
              {errors.userPhone && <p className="text-sm text-destructive">{errors.userPhone.message}</p>}
            </div>
          </div>

          <Separator className="my-3"></Separator>

          {/* 상호 */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">매장명</label>
            <div className="flex flex-col gap-1">
              <Input type="text" {...register("storeName")} />
              {errors.storeName && <p className="text-sm text-destructive">{errors.storeName.message}</p>}
            </div>
          </div>

          {/* 매장 연락처 */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">매장 연락처</label>
            <div className="flex flex-col gap-1">
              <Input type="tel" {...register("storeCall")} />
              {errors.storeCall && <p className="text-sm text-destructive">{errors.storeCall.message}</p>}
            </div>
          </div>

          {/* 주소 */}
          <div className="flex flex-col gap-1">
            <label className="pt-2 text-sm font-medium">주소</label>
            <div className="flex flex-col gap-2">
              <Input type="text" {...register("storeAdd")} />
            </div>
            <label className="pt-2 text-sm font-medium">상세 주소</label>
            <div>
              <Input type="text" {...register("storeDetailAdd")} />
            </div>
            {(errors.storeAdd || errors.storeDetailAdd) && (
              <p className="text-sm text-destructive">{errors.storeAdd?.message ?? errors.storeDetailAdd?.message}</p>
            )}
          </div>

          <Button size="lg" className="w-full">
            회원가입
          </Button>
        </form>

        <Link href="/login" className="mt-3 text-sm text-muted-foreground">
          로그인으로
        </Link>
      </section>
    </main>
  );
}
