import Link from 'next/link';
import { useRouter } from 'next/router';

// Icons
import { SiCsharp } from 'react-icons/si';
import {
    FaGithub,
    FaItchIo,
    FaExternalLinkAlt,
    FaReact,
    FaJava,
    FaJs,
    FaPython,
    FaNodeJs,
    FaUnity,
    FaDatabase,
    FaCode
} from 'react-icons/fa';

export default function Card({ project, styling }) {
    const router = useRouter();

    const getTag = (tag) => {
        let tagValues = [];
        switch (tag) {
            case 'React': 
                tagValues[0] = 'bg-blue-300';
                tagValues[1] = 'text-blue-300';
                tagValues[2] = <FaReact className='text-blue-300 mr-0.5' />;
                break;
            case 'Java':
                tagValues[0] = 'bg-red-400';
                tagValues[1] = 'text-red-200';
                tagValues[2] = <FaJava className='text-red-200 mr-0.5' />;
                break;
            case 'JavaScript': 
                tagValues[0] = 'bg-yellow-200';
                tagValues[1] = 'text-yellow-200';
                tagValues[2] = <FaJs className='text-yellow-200 mr-0.5' />;
                break;
            case 'Python': 
                tagValues[0] = 'bg-yellow-600';
                tagValues[1] = 'text-yellow-500';
                tagValues[2] = <FaPython className='text-yellow-500 mr-0.5' />;
                break;
            case 'Node.js':
                tagValues[0] = 'bg-green-200';
                tagValues[1] = 'text-green-200';
                tagValues[2] = <FaNodeJs className='text-green-200 mr-0.5' />;
                break;
            case 'Unity':
                tagValues[0] = 'bg-gray-500';
                tagValues[1] = 'text-gray-200';
                tagValues[2] = <FaUnity className='text-gray-200 mr-0.5' />;
                break;
            case 'C#':
                tagValues[0] = 'bg-purple-500';
                tagValues[1] = 'text-purple-300';
                tagValues[2] = <SiCsharp className='text-purple-400 mr-0.5' />;
                break;
            case 'SQL':
            case 'MongoDB':
            case 'OracleDB':
                tagValues[0] = 'bg-pink-300';
                tagValues[1] = 'text-pink-200';
                tagValues[2] = <FaDatabase className='text-pink-200 mr-0.5' />;
                break;
            default: 
                tagValues[0] = 'bg-gray-300';
                tagValues[1] = 'text-gray-300';
                tagValues[2] = <FaCode className='text-gray-300 mr-0.5' />;
                break;
        }
        return tagValues;
    }

    return (
            <div className={`bg-gray-700 bg-opacity-10 border border-white border-opacity-20 rounded-xl overflow-hidden my-4 ${styling}`}>
                <div className="overflow-hidden ">
                    <img src={project.image} alt="Project thumbnail"/>
                </div>
                <div className="px-4 pt-4 pb-2">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold">
                                {project.title}
                            </h1>
                        </div>
                        <div className="flex pt-1.5">
                            {project.github !== "" && (
                                <a href={project.github} target="_blank" title="Github" className="mx-1.5 h-6 text-white hover:text-opacity-70 transition-all"><FaGithub size={24}/></a>
                            )}
                            {project.itch !== "" && (
                                <a href={project.itch} target="_blank" title="Itch.io" className="mx-1.5 h-6 text-white hover:text-opacity-70 transition-all"><FaItchIo size={24}/></a>
                            )}
                            {project.link !== "" && (
                                <a href={project.link} target="_blank" title="Link" className="mx-1.5 h-6 text-white hover:text-opacity-70 transition-all"><FaExternalLinkAlt size={24}/></a>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-wrap border-b border-white border-opacity-10 pt-2 pb-1">
                        {project.tags.map((tag) => (
                            <h3 className={`flex items-center mx-1 my-1 px-1.5 py-0.5 text-xs font-semibold ${getTag(tag)[1]} ${getTag(tag)[0]} bg-opacity-25 rounded-lg`} key={tag}>{getTag(tag)[2]}{tag}</h3>
                        ))}
                    </div>
                    <h2 className="mt-2 mb-1 text-white text-opacity-60">{project.description}</h2>
                    <h3 className="text-xs font-semibold text-white text-opacity-40 text-right -mb-1">{project.date}</h3>
                </div>
            </div>
    );
}