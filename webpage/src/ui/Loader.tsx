export function Loader() {
    return (
        <div className="w-full h-full bg-red- my-auto flex items-center justify-center">
            <div className="my-auto w-full max-w-xs px-8 flex items-center justify-center gap-4">
                <span className="size-6 animate-bounce rounded-full bg-black-800"></span>
                <span className="size-6 animate-bounce rounded-full bg-black-800 [animation-delay:0.2s]"></span>
                <span className="size-6 animate-bounce rounded-full bg-black-800 [animation-delay:0.4s]"></span>
            </div>
        </div>
    );
}