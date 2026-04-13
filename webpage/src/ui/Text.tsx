interface Props {
    text: string
    variant?: "primary" | "small"
}

export const Text = ({ text, variant = "primary" }: Props) => {
    if (variant === "small") {
        return (
            <p className="text-gray text-lg font-normal px-8 font-fira mx-auto text-center">
                {text}
            </p>
        )
    }
    return (
        <p className="text-gray text-3xl font-normal px-8 font-fira mx-auto text-center">
            {text}
        </p>
    )
}