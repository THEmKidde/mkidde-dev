export default function Tag({ children=<></>, title }) {
    return (
        <div className={"flex items-center px-1.5 rounded-lg border-2 border-neutral-200"}>
            {children} <h6 className={"ml-1 mt-0.5 font-medium text-neutral-700"}>{title}</h6>
        </div>
    )
}