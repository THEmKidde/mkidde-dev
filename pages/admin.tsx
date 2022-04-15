import Head from "next/head";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Image from "next/image";
import { useRouter } from "next/router";
import cookieCutter from "cookie-cutter";

import { useState } from "react";

const token = process.env.AUTH_TOKEN;

export default function Admin() {
    const [success, setSuccess] = useState(0); // 0: nothing sent yet, 1: failed, 2: success
    const router = useRouter();

    const checkAuth = () => {
        if (cookieCutter.get("token")!==token) {
            router.push("/login");
        }
    }

    const createProject = async event => {
        event.preventDefault();

        const res = await fetch("https://mkidde-dev.vercel.app/api/createProject", {
            body: JSON.stringify({
                token: cookieCutter.get("token"),
                title: event.target.title.value,
                description: event.target.description.value,
                thumbnail_url: event.target.thumbnail.value,
                github_url: event.target.github.value,
                itchio_url: event.target.itchio.value
            }),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        })
        const result = await res;

        if (result.status == 200) {
            setSuccess(2); // success
            setTimeout(()=>{setSuccess(0)}, 2000);
            (document.getElementById("form") as HTMLFormElement).reset();
        } else {
            setSuccess(1); // failed
            setTimeout(()=>{setSuccess(0)}, 2000)
        }
    }

    return (
        <>
            <Head>
                <title> Admin | mKidde-dev </title>
            </Head>
            <Navbar page="admin"/>
            <div className="bg-slate-50 h-full min-h-screen">
                <Container className="pt-32 md:pt-40">
                    <div className="flex">
                        <div className="w-1/2 mx-auto">                            
                            <form onSubmit={createProject} id="form">
                                <div className="flex flex-col">
                                    <h3 className="text-xl md:text-2xl mx-3">Create new project</h3>
                                    <InputField type="text" name="title" id="title" placeholder="Project title" label="Project title" required={true} />
                                    <InputField type="textarea" name="description" id="description" placeholder="Project description" label="Project description" required={true} />
                                    <InputField type="text" name="thumbnail" id="thumbnail" placeholder="Thumbnail url" label="Thumbnail url" required={true}/>
                                    <InputField type="text" name="github" id="github" placeholder="Github repo url" label="Github repo url" required={true}/>
                                    <InputField type="text" name="itchio" id="itchio" placeholder="Itch.io url" label="Itch.io url" required={false}/>
                                </div>
                                <div className="flex">
                                    <Button title="Create project" onClick={null} className="mx-3" />
                                    <p className={(success == 2 ? "block" : "hidden")+" mx-2 self-center text-green-600 text-lg font-semibold"}>Your project was created!</p>
                                    <p className={(success == 1 ? "block" : "hidden")+" mx-2 self-center text-red-600 text-lg font-semibold"}>Something went wrong.</p>
                                    {// add ReCaptcha
                                    }
                                </div>
                            </form>
                            <Image 
                                src={"https://i.ytimg.com/vi/P7v8PhNKDQk/maxresdefault.jpg"}
                                width={0}
                                height={0}
                                onLoadingComplete={checkAuth}
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
