import Head from 'next/head'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Button from '../components/Button'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import clientPromise from '../lib/mongodb'

function openResumePDF() {
    window.open('MyPDF.pdf', '_blank');
}

export default function Home({ isConnected }) {
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

export async function getServerSideProps(context) {
    try {
      // client.db() will be the default database passed in the MONGODB_URI
      // You can change the database by calling the client.db() function and specifying a database like:
      // const db = client.db("myDatabase");
      // Then you can execute queries against your database like so:
      // db.find({}) or any of the MongoDB Node Driver commands
      await clientPromise
      return {
        props: { isConnected: true },
      }
    } catch (e) {
      console.error(e)
      return {
        props: { isConnected: false },
      }
    }
  }
