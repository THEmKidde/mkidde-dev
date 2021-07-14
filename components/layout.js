import Link from 'next/link';

export default function Layout({ children, home, projects, blog }) {
    return (
        <div className="relative min-h-screen bg-black">
            <nav className="sticky top-0 w-full bg-black  border-b border-white border-opacity-10 z-50 select-none">
                <div className="flex flex-wrap justify-between align-middle w-11/12 max-w-7xl mx-auto py-4 px-3">
                    <Link href="/">
                        <a className="flex font-mono font-bold text-3xl leading-snug text-white text-opacity-60" draggable="false">
                            {"{"} <span className="text-white"> mK </span> {"}"}
                        </a>
                    </Link>
                    <div className="flex  font-semibold text-xl">
                        {home ? (
                            <a className="self-center px-2 mx-2 rounded-md transition-all duration-200 text-white text-opacity-70 cursor-pointer"> Home </a>
                        ):(
                            <Link href="/">
                                <a className="self-center px-2 mx-2 rounded-md transition-all duration-200 text-white hover:text-opacity-70" draggable="false"> Home </a>
                            </Link>
                        )}
                        {projects ? (
                            <a className="self-center px-2 mx-2 rounded-md transition-all duration-200 text-white text-opacity-70 cursor-pointer"> Projects </a>
                        ): (
                            <Link href="/projects">
                                <a className="self-center px-2 mx-2 rounded-md transition-all duration-200 text-white hover:text-opacity-70" draggable="false"> Projects </a>
                            </Link>
                        )}
                        {blog ? (
                            <a className="self-center px-2 mx-2 rounded-md transition-all duration-200 text-white text-opacity-70 cursor-pointer"> Blog </a>
                        ):(
                            <Link href="/blog">
                                <a className="self-center px-2 mx-2 rounded-md transition-all duration-200 text-white hover:text-opacity-70" draggable="false"> Blog </a>
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
            <main className="w-11/12 max-w-7xl mx-auto pt-10 md:pt-16 2xl:pt-20 pb-24 px-6 text-white">
                {children}
            </main>
            <footer className="absolute bottom-0 w-full bg-black z-50">
                <div className="flex flex-col items-center w-11/12 max-w-7xl mx-auto py-4 px-3 text-gray-300">
                    <h1 className="text-sm font-semibold italic">&copy; 2021. All rights reserved.</h1>
                    <h1 className="text-sm font-semibold">Developed by Mikkel Kidde Thomsen, using <span className="text-blue-400 text-opacity-80">Next.js</span>.</h1>
                </div>
            </footer>
        </div>
    );
}