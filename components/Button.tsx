
export default function Button({ title, onClick, className="" }) {
    return (
        <button onClick={onClick} className={"px-6 py-3  bg-neutral-700 hover:bg-cyan-500 duration-100 rounded-md text-white font-medium " + className}>
            {title}
        </button>
    )
}