"use client";

import { motion } from "framer-motion";
import { buttonHover } from "@/app/lib/animations";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  icon,
  iconPosition = "left",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-[var(--color-primary)] !text-white hover:bg-[var(--color-primary-dark)] hover:text-white focus:ring-[var(--color-primary)]",
    secondary:
      "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] hover:text-white focus:ring-[var(--color-primary)]",
    outline:
      "border-1 border-[var(--color-dark)] text-[var(--color-dark)] bg-transparent hover:bg-[var(--color-dark)] hover:!text-white focus:ring-[var(--color-dark)]",
    ghost:
      "text-[var(--color-dark)] hover:bg-gray-100 hover:text-[var(--color-dark)] focus:ring-gray-300",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-base gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? disabledStyles : ""} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedStyles}
        variants={buttonHover}
        initial="rest"
        whileHover={disabled ? undefined : "hover"}
        whileTap={disabled ? undefined : "tap"}
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            onClick();
          }
        }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      variants={buttonHover}
      initial="rest"
      whileHover={disabled ? undefined : "hover"}
      whileTap={disabled ? undefined : "tap"}
    >
      {content}
    </motion.button>
  );
}

