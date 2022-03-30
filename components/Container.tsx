export default function Container({ children, className="" }) {
    return (
        <div className={"max-w-screen-xl mx-auto p-4 " + className}>
            {children}
        </div>
    )
}