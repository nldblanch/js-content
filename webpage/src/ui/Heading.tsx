import { getAsset } from "@src/utils/getAsset";
import type { ReactNode } from "react";
const baseClass = "font-extrabold leading-tight text-white";
const clsx = (...classes: (string | undefined)[]) => {
    return classes.filter(Boolean).join(' ');
}

const variantStyles = {
    xxl: 'text-[80px] leading-[80px]',
    xl: 'text-[48px] leading-[50px]',
    lg: 'text-[36px] leading-[40px]',
    md: "text-[24px] leading-[30px]",
    sm: "text-[19px] leading-[25px]",
}

const fontStyles = {
    libre: "font-libre",
    fira: "font-fira",
}
type Variant = keyof typeof variantStyles;
type Font = keyof typeof fontStyles;

const HighlightedWord = ({ word, underline }: { word: string, underline?: boolean }) => {
    return (
        <span className="relative inline-block text-blue">
            {word}
            {underline && <Underline />}
        </span>
    )
}

const Underline = () => {
    return (
        <img
            src={getAsset('underline.svg')}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-full block w-full select-none"
        />
    )
}

interface Props {
    text?: string,
    children?: ReactNode,
    underline?: boolean,
    highlight?: boolean,
    variant?: Variant,
    font?: Font,
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    className?: string,
    wrapperClassName?: string,
    noWrapper?: boolean,
}
export const Heading = ({
    text,
    children,
    highlight,
    underline,
    variant = "lg",
    as = "h1",
    className,
    wrapperClassName,
    noWrapper,
    font = "libre",
}: Props) => {
    const Tag = as;

    const headingNode = (() => {
        if (children) {
            return (
                <Tag className={clsx(baseClass, variantStyles[variant], fontStyles[font], className)}>
                    {children}
                </Tag>
            );
        }

        const safeText = text ?? "";
        const words = safeText.split(' ');
        const last = words.pop();

        if (!last) {
            return (
                <Tag className={clsx(baseClass, variantStyles[variant], fontStyles[font], className)}>
                    {safeText}
                </Tag>
            );
        }

        return (
            <Tag className={clsx(baseClass, variantStyles[variant], fontStyles[font], className)}>
                {words.join(' ')}{' '}
                {highlight ? <HighlightedWord word={last} underline={underline} /> : last}
            </Tag>
        );
    })();

    if (noWrapper) {
        return headingNode;
    }

    return (
        <div className={clsx("flex flex-col grow-0 max-w-fit items-end justify-center", wrapperClassName)}>
            {headingNode}
        </div>
    );
}