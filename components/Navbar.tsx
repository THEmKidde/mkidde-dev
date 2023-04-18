import Container from './Container'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useEffect, useState } from 'react'

export default function Navbar({ page }) {
    const [menuToggle, setMenuToggle] = useState(false)

    const showMenu = () => {
        setMenuToggle(true);

        // Disables Background Scrolling whilst the Menu is open
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    }

    const closeMenu = () => {
        setMenuToggle(false);

        // Unsets Background Scrolling to use when Menu is closed
        document.body.style.overflow = 'unset';
    }

    // Check window width and close menu if window is larger than size for using menu
    useEffect(() => {
        const disableMenuCheck = () => {
            if (window.innerWidth > 640) {
                closeMenu();
            }
        }
        window.addEventListener('resize', disableMenuCheck);
    })

    return (
        <>
            <div className="fixed top-0 w-full z-20 bg-white shadow-lg shadow-gray-100">
                <Container className="flex justify-between h-16">
                    <h1 className="self-center text-xl font-semibold text-neutral-800 select-none">mkt.</h1>
                    <div className="block sm:hidden">
                        <AiOutlineMenu className={"text-3xl select-none mr-2 " + (menuToggle ? "hidden" : "block")} onClick={()=>{showMenu()}}/>
                        <AiOutlineClose className={"text-3xl select-none mr-2 " + (menuToggle ? "block" : "hidden")} onClick={()=>{closeMenu()}}/>
                    </div>
                    <div className="self-center hidden sm:flex decoration-2 decoration-cyan-500 underline-offset-2">
                        <Link href="/">
                            <a className={"mx-3 text-lg font-medium text-neutral-800 select-none hover:text-cyan-500 duration-100 " + (page == "home" ? "pointer-events-none underline":"")}>Home</a> 
                        </Link>
                        <Link href="/about">
                            <a className={"mx-3 text-lg font-medium text-neutral-800 select-none hover:text-cyan-500 duration-100 " + (page == "about" ? "pointer-events-none underline":"")}>About</a>
                        </Link>
                        <Link href="/projects">
                            <a className={"mx-3 text-lg font-medium text-neutral-800 select-none hover:text-cyan-500 duration-100 " + (page == "projects" ? "pointer-events-none underline":"")}>Projects</a>
                        </Link>
                        <Link href="/contact">
                            <a className={"mx-3 text-lg font-medium text-neutral-800 select-none hover:text-cyan-500 duration-100 " + (page == "contact" ? "pointer-events-none underline":"")}>Contact</a>
                        </Link>
                    </div>
                </Container>
                <div className={"fixed top-0 left-0 w-full bg-neutral-700 bg-opacity-30 mt-16 flex flex-col justify-center items-center sm:hidden decoration-2 decoration-cyan-500 underline-offset-2 " + (menuToggle ? "block" : "hidden")}>
                    <Link href="/">
                        <a className={"w-full py-1 bg-slate-50 border-y border-slate-100 text-lg font-semibold text-center " + (page == "home" ? "pointer-events-none underline":"")}>Home</a>
                    </Link>
                    <Link href="/about">
                        <a className={"w-full py-1 bg-slate-50 border-y border-slate-100 text-lg font-semibold text-center " + (page == "about" ? "pointer-events-none underline":"")}>About</a>
                    </Link>
                    <Link href="/projects">
                        <a className={"w-full py-1 bg-slate-50 border-y border-slate-100 text-lg font-semibold text-center " + (page == "projects" ? "pointer-events-none underline":"")}>Projects</a>
                    </Link>
                    <Link href="/contact">
                        <a className={"w-full py-1 bg-slate-50 border-y border-slate-100 text-lg font-semibold text-center " + (page == "contact" ? "pointer-events-none underline":"")}>Contact</a>
                    </Link>
                    <div className="h-screen" />
                </div>
            </div> 
        </>
    )
}