"use client";

import { useLayout } from "@/components/layouts/provider/LayoutProvider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { signupSchema, SignupValues } from "@/lib/schemas/auth/signup.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { UserFormField } from "../_components/UserFormField";

export default function JoinPage() {
  const { setHeaderTitle } = useLayout();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    shouldFocusError: true,
    defaultValues: {
      signupEmail: "",
      signupUserName: "",
      signupUserPhone: "",
      signupStoreName: "",
      signupStoreCall: "",
      signupStoreAdd: "",
      signupStoreDetailAdd: "",
    },
  });

  const onSubmit = (values: SignupValues) => {
    console.log("회원가입 제출");
    console.log(values);
    router.push("/login");
  };

  useEffect(() => {
    setHeaderTitle("회원가입");
  }, [setHeaderTitle]);

  return (
    <div className="flex items-center justify-center p-6 pt-16">
      <div className="flex flex-col items-center w-full max-w-sm gap-4 p-8">
        <div className="text-2xl font-bold">회원가입</div>

        <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit(onSubmit)}>
          <UserFormField label="이메일" type="email" register={register("signupEmail")} placeholder="email@mail.com" error={errors.signupEmail?.message} required />
          <UserFormField label="이름" type="text" register={register("signupUserName")} placeholder="홍길동" error={errors.signupUserName?.message} required />
          <UserFormField label="개인번호" type="tel" register={register("signupUserPhone")} placeholder="010-0000-0000" error={errors.signupUserPhone?.message} required />

          <Separator />

          <UserFormField label="상호" type="text" register={register("signupStoreName")} placeholder="OO치킨 OO점" error={errors.signupStoreName?.message} required />
          <UserFormField label="매장 연락처" type="tel" register={register("signupStoreCall")} placeholder="02-0000-0000" error={errors.signupStoreCall?.message} required />
          <UserFormField label="주소" type="text" register={register("signupStoreAdd")} placeholder="서울특별시 강서구00길 00" error={errors.signupStoreAdd?.message} />
          <UserFormField label="상세 주소" type="text" register={register("signupStoreDetailAdd")} placeholder="0층 0호" />

          <Button type="submit" size="lg" className="w-full">
            회원가입
          </Button>
        </form>

        <Link href="/login" className="pt-3 text-sm text-muted-foreground hover:underline">
          로그인
        </Link>
      </div>
    </div>
  );
}
