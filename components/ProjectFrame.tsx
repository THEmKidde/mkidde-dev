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
            <div className="mx-2 my-1 h-48">
                <h1 className="text-2xl max-w-lg">{prop.title}</h1>
                <div className="max-w-full h-36 mb-2 overflow-hidden hover:overflow-y-scroll">
                    <p className="text-base whitespace-pre-wrap stable-scrollbar">{prop.description}</p>
                </div>
                <a href={prop.github_url} target="_blank" className="absolute top-0 z-100 mt-2 text-5xl text-neutral-700 hover:text-cyan-500 duration-100" >
                    <FaGithub />
                </a>
            </div>
        </div>
    )
}