import Image from "next/image"
import { FaGithub, FaItchIo } from 'react-icons/fa'

export default function ProjectFrame({ prop }) {
    return (
        <div className="mx-auto rounded-md bg-white border shadow-md max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-md xl:max-w-xl relative mb-6 md:mb-12">
            <div className="rounded-t-md overflow-hidden">
                <Image 
                    src={prop.thumbnail_url}
                    alt={prop.title + " thumbnail"}
                    width={576}
                    height={331}
                />
            </div>
            <div className="ml-2 mr-1 mt-1 mb-0 h-48 inner-shadow ">
                <h1 className="text-2xl h-8 truncate pr-3">{prop.title}</h1>
                <div className="h-40 mb-2 pr-2 overflow-hidden overflow-y-scroll">
                    <p className="text-base whitespace-pre-wrap stable-scrollbar">{prop.description}</p><br></br>
                </div>
                <div className="absolute top-0 z-100 mt-2 flex space-x-2">
                    <div className="bg-slate-100 p-1 rounded-full">
                        <a href={prop.github_url} target="_blank" className="text-5xl text-neutral-700 hover:text-cyan-500 duration-100" >
                            <FaGithub />
                        </a>
                    </div>
                    {prop.itchio_url == "" ? 
                        <></>
                        :
                        <div className="bg-slate-100 p-1 rounded-2xl">
                            <a href={prop.itchio_url} target="_blank" className="text-5xl text-neutral-700 hover:text-cyan-500 duration-100" >
                                <FaItchIo />
                            </a>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}