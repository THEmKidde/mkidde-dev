import Head from 'next/head'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Tag from '../components/Tag'
import Image from 'next/image'
import { FaDatabase } from 'react-icons/fa'
import { SiCsharp, SiJava, SiJavascript, SiPython, SiTypescript, SiC, SiNextdotjs, SiReact, SiDocker, SiGit, SiNodedotjs, SiUnity, SiMongodb } from 'react-icons/si'

export default function About() {
    return (
        <>
            <Head>
                <title> About | mKidde-dev </title>
            </Head>
            <Navbar page="about" />
            <div className="bg-slate-50 h-full min-h-screen">
                <Container className="pt-32 md:pt-40">
                    <div className="flex">
                        <article className="md:w-4/5">
                            <h1 className="text-5xl  md:text-8xl">About me</h1>
                            <h1 className="text-2xl md:text-3xl my-4 md:my-8">Hello, my name is Mikkel Kidde Thomsen</h1>
                            <div className="mx-auto w-4/5 my-8 block md:hidden">
                                <Image 
                                    src="https://media-exp1.licdn.com/dms/image/C4E03AQGAuBMG8IyIXg/profile-displayphoto-shrink_800_800/0/1645358647477?e=2147483647&v=beta&t=yxGrG4OuBdEtSq95ZLKrPf19pVXLbtNhvjyS7IuWSo0"
                                    alt="Picture of author"
                                    width={500}
                                    height={500}
                                    priority
                                    className="rounded-full z-10"
                                />
                            </div>
                            <h2 className="text-lg md:text-xl">
                                I'm a software engineering student studying at 
                                Aalborg University, currently on my 6th semester. 
                                I've been programming for around 7 years now, and 
                                have for the last 3 been studying at University 
                                learning how to do so 'properly'. 
                            </h2>
                            <p className="text-base md:text-lg mt-8">
                                I mainly focus on backend, but do also enjoy the creative possibilities of frontend developing. <br />
                                For the most part I work with Object Oriented Programming languages such as C# or Java, but I do also have experience
                                in less OOP based languages such as Python and JavaScript, as well as some useful tools and frameworks listed below.   <br />
                                <div className="mt-4 flex flex-wrap justify-center space-x-3 space-y-1">
                                    <Tag title="C#" className="mt-1"><SiCsharp className="text-lg text-neutral-800"/></Tag>
                                    <Tag title="Java"><SiJava className="text-lg text-neutral-800"/></Tag>
                                    <Tag title="Python"><SiPython className="text-lg text-neutral-800"/></Tag>
                                    <Tag title="C"><SiC className="text-lg text-neutral-800"/></Tag>
                                    <Tag title="JavaScript"><SiJavascript className="text-lg text-neutral-800"/></Tag>
                                    <Tag title="TypeScript"><SiTypescript className="text-lg text-neutral-800"/></Tag>
                                    <Tag title="SQL"><FaDatabase className="text-lg text-neutral-800"/></Tag>
                                </div>
                                <div className="mt-3 mb-8 flex flex-wrap justify-center space-x-3 space-y-1">
                                    <Tag title="Git" className="mt-1"><SiGit className="text-lg text-neutral-800"/></Tag>
                                    <Tag title="Unity"><SiUnity className="text-lg text-neutral-800"/></Tag>
                                    <Tag title="Node.js"><SiNodedotjs className="text-lg text-neutral-800"/></Tag>
                                    <Tag title="React"><SiReact className="text-lg text-neutral-800"/></Tag>
                                    <Tag title="Next.js"><SiNextdotjs className="text-lg text-neutral-800"/></Tag>
                                    <Tag title="MongoDB"><SiMongodb className="text-lg text-neutral-800"/></Tag>
                                    <Tag title="Docker"><SiDocker className="text-lg text-neutral-800"/></Tag>
                                </div>
                                My programming journey began by making video games and attempting to recreate well-known games, such as the old Pong and Tetris games.
                                From there my interest for programming grew, and I wanted to know more and more about the possibilities and what else you would be 
                                able to create with it. I have always been very creative, and have always loved creating things, whether it being a Lego spaceship 
                                or a wooden bench. I love exploring and learning new technologies, furthering my knowledge and improving my skills in the field. <br /> <br />
                            </p>
                        </article>
                        <div className="w-2/5 mx-6 mt-8 hidden md:block">
                            <Image 
                                src="https://media-exp1.licdn.com/dms/image/C4E03AQGAuBMG8IyIXg/profile-displayphoto-shrink_800_800/0/1645358647477?e=2147483647&v=beta&t=yxGrG4OuBdEtSq95ZLKrPf19pVXLbtNhvjyS7IuWSo0"
                                alt="Picture of author"
                                width={500}
                                height={500}
                                priority
                                className="rounded-full z-10"
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}