export default function GamemodeButton({ text, url }) {
    return (
        <div className="flex justify-center items-center w-3/5">
            <a href={url} className="w-full">
                <button className="league-button league-font w-full">
                    {text}
                </button>
            </a>
        </div>
    )
}