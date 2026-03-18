export const WindowControlButtons = () => {

    return <div className="w-fit">
        <div className="flex justify-evenly gap-2">
            {["bg-red-500", "bg-yellow-500", "bg-green-500"].map((color) => {
                return <div key={color} className={`rounded-full aspect-square h-4 ${color}`} />
            })}
        </div>
    </div>
}