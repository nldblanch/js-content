import { getAsset } from "@src/utils/getAsset";

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
    text: string,
    underline?: boolean,
    highlight?: boolean
}
export const Heading = ({ text, highlight, underline }: Props) => {
    const words = text.split(' ');
    const last = words.pop();

    if (!last) {
        return (
            <div className="flex flex-col grow-0 max-w-fit items-end justify-center">
                <h1 className="text-6xl font-libre font-extrabold leading-tight text-white">
                    {text}
                    {underline && <Underline />}
                </h1>
            </div>
        )
    }
    return (
        <div className="flex flex-col grow-0 max-w-fit items-end justify-center">
            <h1 className="text-6xl font-libre font-extrabold leading-tight text-white">
                {words.join(' ')}{' '}
                {highlight ? <HighlightedWord word={last} underline={underline} /> : last}
            </h1>
        </div>
    )
}