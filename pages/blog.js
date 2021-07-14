import Head from 'next/head';
import Layout from '../components/layout';

// Icons
import { FaSearch } from 'react-icons/fa';

export default function Blog() {
    return (
        <>
            <Head>
                <title>Blog | mKidde-dev</title>
            </Head>
            <Layout blog={true}>
                <div className="border-b border-white border-opacity-10 pb-5"> {/* Page header */}
                    <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">Blog</h1>
                    <p className="">
                        Work in progress...
                    </p>
                    <div className="flex items-center w-full md:w-1/2">
                        <input className="bg-black text-lg font-semibold border placeholder-white placeholder-opacity-20 border-white border-opacity-20 rounded-lg w-full px-4 pt-1.5 pb-2 mt-3 transition-all outline-none ring-blue-300 focus:ring focus:border-blue-300" type="text" name="search" id="search" placeholder="Search articles" autoComplete="off" spellCheck="false" />
                        <FaSearch className="text-lg -ml-8 mt-3"/>
                    </div>
                </div>
            </Layout>
        </>
    )
}
