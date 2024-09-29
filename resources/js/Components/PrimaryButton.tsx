import { ButtonHTMLAttributes } from "react";

export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
