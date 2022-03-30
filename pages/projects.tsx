import Head from 'next/head'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import clientPromise from '../lib/mongodb'

export default function Projects({ isConnected }) {
    return (
        <>
            <Head>
                <title> Projects | mKidde-dev </title>
            </Head>
            <Navbar page="projects" />
            <div className="bg-slate-50 h-full min-h-screen">
                <Container className="pt-40">
                    <h1 className="text-8xl">My projects</h1>
                    <h3 className="text-3xl my-8">Here's a little showcase of some of the projects I've made.</h3>
                </Container>
            </div>
        </>
    )
}