import Image from "next/image"
import { FaGithub } from 'react-icons/fa'

export default function ProjectFrame({ prop }) {
    return (
        <div className="mx-auto rounded-md bg-white border shadow-md max-w-xl relative mb-6 md:mb-12">
            <div className="rounded-t-md overflow-hidden">
                <Image 
                    src={prop.thumbnail_url}
                    alt={prop.title + " thumbnail"}
                    width={576}
                    height={331}
                />
            </div>
            <div className="mx-2 my-1 h-44">
                <h1 className="text-2xl mb-1 max-w-lg">{prop.title}wululullulu lulul llulul ul ul ulu lulu </h1>
                <p className="text-base mb-2 overflow-ellipsis hover:overflow-y-scroll">{prop.description}</p>
                <a href={prop.github_url} target="_blank" className="absolute top-0 z-100 mt-2 text-5xl text-neutral-700 hover:text-cyan-500 duration-100" >
                    <FaGithub />
                </a>
            </div>
        </div>
    )
}