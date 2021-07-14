import Head from 'next/head';
import Layout from '../components/layout';
import Card from '../components/card';
import { useState } from 'react';
import { getSortedProjectsData } from '../lib/projects';

// Icons
import { FaSearch } from 'react-icons/fa';

export async function getStaticProps() {
    const projectsData = getSortedProjectsData();
    return {
        props: {
            projectsData
        }
    }
}

export default function Projects({ projectsData }) {
    const [projects, setProjects] = useState(projectsData);

    // Search for projects
    const handleChange = () => (e) => {
        let search = e.target.value;
        // Filter for the projects where either the title contains the search string, or one of the tags contains the search string
        setProjects(projectsData.filter((project) => project.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 || (project.tags.filter((tag) => tag.toLowerCase().indexOf(search.toLowerCase()) !== -1)).length > 0));
    }

    return (
        <>
            <Head>
                <title>Projects | mKidde-dev</title>
            </Head>
            <Layout projects={true}>
                <div className="border-b border-white border-opacity-10 pb-5"> {/* Page header */}
                    <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">Projects</h1>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem lorem, suscipit id efficitur et, tempus eget lectus. Fusce ut egestas est. In hac habitasse platea dictumst. In eget mi.
                    </p>
                    <div className="flex items-center w-full md:w-1/2">
                        <input className="bg-black text-lg font-semibold border placeholder-white placeholder-opacity-20 border-white border-opacity-20 rounded-lg w-full px-4 pt-1.5 pb-2 mt-3 transition-all outline-none ring-blue-300 focus:ring focus:border-blue-300" type="text" name="search" id="search" placeholder="Search projects (title or tag)" autoComplete="off" spellCheck="false" onChange={handleChange()} />
                        <FaSearch className="text-lg -ml-8 mt-3"/>
                    </div>
                </div>
                <div className="py-8 grid grid-cols-1 gap-x-8 md:grid-cols-2"> {/* Projects */}
                    {projects.map((project) => ( 
                        <Card project={project} key={project.id} />
                    ))}
                </div>
            </Layout>
        </>
    )
}
