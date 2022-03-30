import Head from 'next/head'
import Navbar from '../components/Navbar'
import Container from '../components/Container'

export default function Home() {
  return (
    <>
        <Head>
            <title> Contact | mKidde-dev </title>
        </Head>
        <Navbar page="contact" />
        <div className="bg-slate-50 h-screen">
            <Container className="pt-52">
                <h1 className="">Mikkel <br /> Kidde Thomsen</h1>
                <h2 className="">6th semester software engineering student</h2>
            </Container>
        </div>
    </>
  )
}