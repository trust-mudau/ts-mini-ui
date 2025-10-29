import React from "react";
import { InputProps } from "./Input.types";
import { cn } from "../../utils/cn";

export const Input: React.FC<InputProps> = ({ label, error, className, ...props }) => {
  return (
    <label className={cn("flex flex-col text-sm", className)}>
      {label && <span className="mb-1">{label}</span>}
      <input {...props} className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2" />
      {error && <span className="text-xs mt-1 text-red-600">{error}</span>}
    </label>
  );
};
