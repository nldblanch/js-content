const baseClass = "text-gray font-normal px-8 font-fira mx-auto text-center";

const clsx = (...classes: (string | undefined)[]) => {
    return classes.filter(Boolean).join(' ');
}

const variantStyles = {
    xl: 'text-[27px] leading-[30px]',
    lg: 'text-[24px] leading-[30px]',
    md: "text-[19px] leading-[25px]",
    sm: "text-[16px] leading-[20px]",
}
type Variant = keyof typeof variantStyles;

interface Props {
    text: string
    variant?: Variant
    className?: string
}
export const Text = ({ text, variant = "md", className }: Props) => {
    return (
        <p className={clsx(baseClass, variantStyles[variant], className)}>
            {text}
        </p>
    )
}
