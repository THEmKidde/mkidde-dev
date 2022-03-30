import Container from "./Container"

export default function Navbar({ page }) {
    return (
        <>
            <div className="fixed top-0 w-full z-20 bg-white shadow-lg shadow-gray-100">
                <Container className="flex justify-between h-16">
                    <h1 className="self-center text-xl font-semibold text-neutral-800 select-none">mkt.</h1>
                    <div className="self-center">
                        {page == "home" ? 
                            <a className="mx-3 text-lg font-medium text-neutral-800 select-none hover:text-cyan-500 duration-100 cursor-pointer">Home</a>
                            : <a className="mx-3 text-lg font-medium text-neutral-800 select-none hover:text-cyan-500 duration-100" href="/">Home</a> 
                        } 
                        {page == "about" ? 
                            <a className="mx-3 text-lg font-medium text-neutral-800 select-none hover:text-cyan-500 duration-100 cursor-pointer">About</a>
                            : <a className="mx-3 text-lg font-medium text-neutral-800 select-none hover:text-cyan-500 duration-100" href="/about">About</a>
                        }
                        {page == "projects" ?
                            <a className="mx-3 text-lg font-medium text-neutral-800 select-none hover:text-cyan-500 duration-100 cursor-pointer">Projects</a>
                            : <a className="mx-3 text-lg font-medium text-neutral-800 select-none hover:text-cyan-500 duration-100" href="/projects">Projects</a>
                        }
                        {page == "contact" ? 
                            <a className="mx-3 text-lg font-medium text-neutral-800 select-none hover:text-cyan-500 duration-100 cursor-pointer">Contact</a>
                            : <a className="mx-3 text-lg font-medium text-neutral-800 select-none hover:text-cyan-500 duration-100" href="/contact">Contact</a>
                        }
                    </div>
                </Container>
            </div> 
        </>
    )
}