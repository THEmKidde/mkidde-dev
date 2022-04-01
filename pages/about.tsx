import Head from 'next/head'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Image from 'next/image'

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
                            <h1 className="text-2xl md:text-3xl my-8">Hello, my name is Mikkel Kidde Thomsen</h1>
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
                                I love exploring and learning new technologies, furthering my knowledge and improving my skills in the field. 
                                I mainly focus on backend, but do also enjoy the creative possibilities of frontend developing.
                                
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