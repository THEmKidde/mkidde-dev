import Head from 'next/head';
import Layout from '../components/layout';
import Link from 'next/link';
import Card from '../components/card';
import { getProjectData } from '../lib/projects';

import fontStyles from '../styles/fonts.module.css';

// Icons
import {
    FaGithub,
    FaLinkedin,
    FaItchIo
} from 'react-icons/fa';

export async function getStaticProps() {
    const projectsData = [getProjectData("Test-1"), getProjectData("Test-3"), getProjectData("Test-2")];
    return {
        props: {
            projectsData
        }
    }
}

export default function Home({ projectsData }) {
    return (
        <>
            <Head>
                <title>Home | mKidde-dev</title>
            </Head>
            <Layout home={true}>
                <div> {/* Introduction */}
                    <p className={`${fontStyles.pretitle} font-bold text-blue-400 text-opacity-80`}>Hey there! My name is-</p>
                    <h1 className={`${fontStyles.title} mb-6 font-extrabold leading-none`}>Mikkel Kidde Thomsen.</h1>
                    <p className={`${fontStyles.pretitle} font-bold text-blue-400 text-opacity-80`}>And I'm a-</p>
                    <h2 className={`${fontStyles.subtitle} font-semibold`}>
                        Software Engineering student, {" "}
                        <span className="text-white text-opacity-60"> 
                            at Aalborg University.  
                        </span>
                    </h2>
                </div>
                <div className="flex my-8"> {/* Link buttons */}
                    <a href="https://github.com/THEmKidde" className="flex items-center px-3 py-1.5 mr-4 text-md md:text-lg text-white font-semibold bg-white bg-opacity-10 rounded-lg transition-all hover:bg-opacity-20"> 
                        <span className="text-blue-400 text-opacity-80 mr-2">
                            <FaGithub className="text-md md:text-lg"/>
                        </span> 
                        Github 
                    </a>
                    <a href="https://linkedin.com/in/mikkel-kidde-thomsen" className="flex items-center px-3 py-1.5 mr-4 text-md md:text-lg text-white font-semibold bg-white bg-opacity-10 rounded-lg transition-all hover:bg-opacity-20"> 
                        <span className="text-blue-400 text-opacity-80 mr-2">
                            <FaLinkedin className="text-md md:text-lg"/>
                        </span> 
                        LinkedIn
                    </a>
                    <a href="https://mkidde.itch.io/" className="flex items-center px-3 py-1.5 text-md md:text-lg text-white font-semibold bg-white bg-opacity-10 rounded-lg transition-all hover:bg-opacity-20"> 
                        <span className="text-blue-400 text-opacity-80 mr-2">
                            <FaItchIo className="text-md md:text-lg"/>
                        </span> 
                        Itch.io
                    </a>
                </div>
                <div className="mt-20"> {/* About me */}
                    <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2">
                        <div className="">
                            <h1 className={`${fontStyles.subtitle} font-bold`}>About me.</h1>
                            <p className="text-white text-opacity-60">
                                Hello there
                            </p>
                        </div>
                        <img className="mt-8 rounded-full mx-auto w-96 select-none" src="https://media-exp1.licdn.com/dms/image/C4E03AQHjOAD8BT2iQQ/profile-displayphoto-shrink_800_800/0/1533169031921?e=1631750400&v=beta&t=2d6q5zxPKYY1i678hJICt0mKsUj7tM1UfMAUnRWK5V8" alt="profile image" draggable="false" />
                    </div>
                </div>
                <div className="mt-20"> {/* Projects */}
                    <div className="pt-4 pb-8 grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-2">
                        <div className="my-4">
                            <div className="flex justify-between items-center">
                                <h1 className={`flex items-center ${fontStyles.subtitle} font-bold`}>Projects.</h1>
                                <Link href="/projects">
                                    <a className="block md:hidden text-sm font-semibold text-blue-400 text-opacity-80 hover:text-opacity-100"> Explore more &#8594; </a>
                                </Link>
                            </div>
                            <h2 className="text-md md:text-xl text-white text-opacity-60">Here's a few select projects I've worked on.</h2>
                            <Link href="/projects">
                                <a className="hidden md:block text-lg font-semibold text-blue-400 text-opacity-80 hover:text-opacity-100"> Explore more &#8594; </a>
                            </Link>
                        </div>
                        <Card project={projectsData[0]} />
                        <Card project={projectsData[1]} styling={"md:-mt-60 md:mb-60"} />
                        <Card project={projectsData[2]} />
                    </div>
                    
                </div>
            </Layout>
        </>
    )
}
