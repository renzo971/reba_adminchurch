import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    InputHTMLAttributes,
} from "react";

export default forwardRef(function TextInput(
    {
        type = "text",
        className = "",
        isFocused = false,
        ...props
    }: InputHTMLAttributes<HTMLInputElement> & { isFocused?: boolean },
    ref
) {
    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                "w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary-sm " +
                className
            }
            ref={localRef}
        />
    );
});
