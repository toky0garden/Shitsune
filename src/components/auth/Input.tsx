import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  className?: string;
  type: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  className,
  type,
  value,
  placeholder,
  onChange,
  ...props
}: InputProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{ fontSize: 16 }}
      className={cn(
        "w-full px-3 py-0.5 text-white border border-stone-800 rounded-md focus:outline-none focus:ring-1 focus:ring-white/80",
        className,
      )}
      {...props}
    />
  );
};
