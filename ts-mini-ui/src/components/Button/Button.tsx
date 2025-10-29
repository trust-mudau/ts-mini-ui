import React from "react";
import { ButtonProps } from "./Button.types";
import { cn } from "../../utils/cn";

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  icon,
  children,
  className,
  ...props
}) => (
  <button
    {...props}
    className={cn(
      "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
      variant === "primary" && "bg-blue-600 text-white hover:bg-blue-700",
      variant === "secondary" && "bg-gray-200 text-gray-900 hover:bg-gray-300",
      variant === "ghost" && "bg-transparent hover:bg-gray-100",
      size === "sm" && "px-2 py-1 text-sm",
      size === "md" && "px-4 py-2",
      size === "lg" && "px-6 py-3 text-lg",
      className
    )}
  >
    {isLoading ? "..." : icon ? <span className="mr-2">{icon}</span> : null}
    {children}
  </button>
);
