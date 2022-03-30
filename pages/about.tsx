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
                <Container className="pt-40">
                    <div className="flex">
                        <article className="w-4/5">
                            <h1 className="text-8xl">About me</h1>
                            <h1 className="text-3xl my-8">Hello, my name is Mikkel Kidde Thomsen</h1>
                            <h2 className="text-xl">
                                I'm a software engineering student studying at 
                                Aalborg University, currently on my 6th semester. 
                                I've been programming for around 7 years now, and 
                                have for the last 3 been studying at University 
                                learning how to do so 'properly'. 
                            </h2>
                            <p className="text-lg mt-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat consectetur mauris ut consectetur. 
                            Aliquam tortor ex, aliquet et augue sit amet, scelerisque hendrerit nisl. Curabitur gravida orci at augue volutpat luctus. 
                            Integer et malesuada urna. Aenean non diam ultrices, lacinia justo sed, porttitor libero. 
                            Nullam consectetur elit pellentesque nisl fermentum, sed sagittis urna placerat. 
                            Ut facilisis, arcu nec ullamcorper iaculis, elit nisl aliquam erat, id aliquam nisl metus vel justo.
                            Quisque vitae nisl aliquet, accumsan ligula quis, faucibus neque. Mauris semper sagittis eros, at sollicitudin tellus tristique quis. 
                            Nulla nisi metus, semper eget venenatis id, tincidunt a elit. Etiam facilisis felis eget dolor porta mattis. 
                            Vivamus sed ultricies tellus, eu molestie metus. Nullam elit risus, bibendum ac orci sit amet, lobortis pretium dolor. 
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam ultrices eu nulla vitae condimentum. 
                            Nunc non leo vel ligula volutpat pellentesque vitae non tellus.
                            </p>
                        </article>
                        <div className="w-2/5 mx-6 mt-8">
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