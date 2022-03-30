import Head from 'next/head'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import clientPromise from '../lib/mongodb'

export default function Home({ isConnected }) {
  return (
    <>
        <Head>
            <title> mKidde-dev </title>
        </Head>
        <Navbar page="home" />
        <div className="bg-slate-50 h-screen">
            <Container className="pt-52">
                <h1 className="">Mikkel <br /> Kidde Thomsen</h1>
                <h2 className="">6th semester software engineering student</h2>
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
