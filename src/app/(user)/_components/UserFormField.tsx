import { Input } from "@/components/ui/input";
import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface UserFormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegisterReturn;
  error?: string;
  required?: boolean;
}

export function UserFormField({ label, register, error, required, ...inputProps }: UserFormFieldProps) {
  const fieldName = register.name;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={fieldName} className="text-sm font-medium">
        {label}
        {required && <span className="pl-1 text-destructive">*</span>}
      </label>
      <div className="flex flex-col gap-1">
        <Input id={fieldName} {...register} {...inputProps} />
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    </div>
  );
}
