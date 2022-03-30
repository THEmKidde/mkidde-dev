import Head from 'next/head'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Button from '../components/Button'
import ProjectFrame from '../components/ProjectFrame'
import { getProjectsFromTitle } from '../lib/mongodb'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function openResumePDF() {
    window.open('MyPDF.pdf', '_blank');
}

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
                        <Button title="Open Resume" onClick={openResumePDF} />
                        <a href="https://github.com/mKiddeT" target="_blank" className="ml-6 mr-3 text-5xl text-neutral-300 hover:text-cyan-500 duration-100">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/mikkel-kidde-thomsen/" target="_blank" className="mx-3 text-5xl text-neutral-300 hover:text-cyan-500 duration-100">
                            <FaLinkedin />
                        </a>
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