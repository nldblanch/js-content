const baseClass = "text-gray font-normal px-8 font-fira mx-auto text-center";

const clsx = (...classes: (string | undefined)[]) => {
    return classes.filter(Boolean).join(' ');
}

const variantStyles = {
    normal: "text-3xl",
    sm: "text-lg",
    xs: "text-sm"
}
type Variant = keyof typeof variantStyles;

interface Props {
    text: string
    variant?: Variant
    className?: string
}
export const Text = ({ text, variant = "normal", className }: Props) => {
    return (
        <p className={clsx(baseClass, variantStyles[variant], className)}>
            {text}
        </p>
    )
}
