import { Input } from "@/components/ui/input";
import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface UserFormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegisterReturn;
  error?: string;
}

export function UserFormField({ label, register, error, ...inputProps }: UserFormFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-sm font-medium">{label}</div>
      <div className="flex flex-col gap-1">
        <Input {...register} {...inputProps} />
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    </div>
  );
}
