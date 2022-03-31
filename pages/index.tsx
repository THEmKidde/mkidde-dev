import Head from 'next/head'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Button from '../components/Button'
import ProjectFrame from '../components/ProjectFrame'
import Tag from '../components/Tag'
import { getProjectsFromTitle } from '../lib/mongodb'
import { FaGithub, FaLinkedin, FaDatabase } from 'react-icons/fa'
import { SiCsharp, SiJava, SiJavascript, SiPython, SiTypescript, SiC, SiNextdotjs, SiReact, SiDocker, SiGit, SiNodedotjs, SiUnity, SiMongodb } from 'react-icons/si'

export default function Home({ projects }) {
    return (
        <>
            <Head>
                <title> mKidde-dev </title>
            </Head>
            <Navbar page="home" />
            <div className="bg-slate-50 h-full min-h-screen">
                <Container className="pt-52">
                    <h1 className="text-8xl">Mikkel <br /> Kidde Thomsen</h1>
                    <h2 className="text-5xl my-2">6th semester software engineering student.</h2>
                    <div className="flex my-6">
                        <Button title="Open Resume" onClick={()=>{window.open('MyPDF.pdf', '_blank')}} />
                        <a href="https://github.com/mKiddeT" target="_blank" className="ml-6 mr-3 text-5xl text-neutral-700 hover:text-cyan-500 duration-100">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/mikkel-kidde-thomsen/" target="_blank" className="mx-3 text-5xl text-neutral-700 hover:text-cyan-500 duration-100">
                            <FaLinkedin />
                        </a>
                    </div>
                    <div className="mt-24">
                        <h3 className="text-2xl font-medium"><a href="/about" className="hover:text-cyan-500 duration-100">About me</a></h3>
                        <p className="text-lg">
                            I've been programming for 7 years, starting out by making games and have ever since been intrigued by the many possibilities. 
                            I love exploring and learning new technologies, furthering my knowledge and improving my skills in the field. 
                            I mainly focus on backend, but do also enjoy the creative possibilities of frontend developing. 
                            If you would like to read more about me, you can do 
                            so <a href="/about" className="underline font-medium hover:text-cyan-500 duration-100">here</a>.
                        </p>
                        <div className="mt-8 flex justify-center space-x-3">
                            <Tag title="C#"><SiCsharp className="text-lg text-neutral-800"/></Tag>
                            <Tag title="Java"><SiJava className="text-lg text-neutral-800"/></Tag>
                            <Tag title="Python"><SiPython className="text-lg text-neutral-800"/></Tag>
                            <Tag title="C"><SiC className="text-lg text-neutral-800"/></Tag>
                            <Tag title="JavaScript"><SiJavascript className="text-lg text-neutral-800"/></Tag>
                            <Tag title="TypeScript"><SiTypescript className="text-lg text-neutral-800"/></Tag>
                            <Tag title="SQL"><FaDatabase className="text-lg text-neutral-800"/></Tag>
                        </div>
                        <div className="mt-4 flex justify-center space-x-3">
                            <Tag title="Git"><SiGit className="text-lg text-neutral-800"/></Tag>
                            <Tag title="Unity"><SiUnity className="text-lg text-neutral-800"/></Tag>
                            <Tag title="Node.js"><SiNodedotjs className="text-lg text-neutral-800"/></Tag>
                            <Tag title="React"><SiReact className="text-lg text-neutral-800"/></Tag>
                            <Tag title="Next.js"><SiNextdotjs className="text-lg text-neutral-800"/></Tag>
                            <Tag title="MongoDB"><SiMongodb className="text-lg text-neutral-800"/></Tag>
                            <Tag title="Docker"><SiDocker className="text-lg text-neutral-800"/></Tag>
                        </div>
                    </div>
                    <div className="mt-24">
                        <h3 className="text-2xl font-medium"><a href="/projects" className="hover:text-cyan-500 duration-100">My projects</a></h3>
                        <p className="text-lg">
                            I enjoy exploring and learning, one of the best ways for me to get to know a new technology is to create something with that technology.
                            Below are a couple of the projects I've made, if you would like to see more of my projects you can do 
                            so <a href="/projects" className="underline font-medium hover:text-cyan-500 duration-100">here</a>. 
                        </p>
                        <div className="mt-8 grid grid-cols-2">
                            {projects.map((project)=>{
                                return <ProjectFrame prop={project} key={project._id} />
                            })}
                        </div>                     
                    </div>
                    <div className="mt-16 mb-8">
                        <h3 className="text-2xl font-medium"><a href="/contact" className="hover:text-cyan-500 duration-100">Get in touch</a></h3>
                        <p className="text-lg">
                            If you would like to get in touch, you can do so by contacting me by email, LinkedIn or by filling in the contact form, 
                            all of which can be found <a href="/contact" className="underline font-medium hover:text-cyan-500 duration-100">here</a>. 
                        </p>
                    </div>
                </Container>
            </div>
        </>
    )
}


//{projects.map(project=>{
//    return <ProjectFrame prop={project} key={project._id} />
//})}

export async function getServerSideProps(context) {
    const projects = await getProjectsFromTitle(["My second project!", "My first project wuhuu!"]);

    return { props: {projects} }
}