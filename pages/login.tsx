import Head from "next/head";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import InputField from "../components/InputField";
import Button from "../components/Button";

import CryptoJS from "crypto-js";

export default function Login() {
    const secret = process.env.SECRET_PASSPHRASE;

    const submitLogin = async event => {
        event.preventDefault();

        // Encrypt username and password before sending request
        const username = CryptoJS.AES.encrypt(event.target.username.value, secret);
        const password = CryptoJS.AES.encrypt(event.target.password.value, secret);

        const res = await fetch("http://localhost:3000/api/login", {
            body: JSON.stringify({
                username: username.toString(),
                password: password.toString(),
            }),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        });

        const result = await res;
        
        if (result.status == 200) {
            // Login attempt succeded
            console.log("Success");
            document.getElementById("login_form").reset();
            const login_message = document.getElementById("login_message");
            login_message.classList.remove("block");
            login_message.classList.add("hidden");
        } else {
            // Login attempt failed
            console.log("Failed");
            const login_message = document.getElementById("login_message")
            login_message.classList.remove("hidden");
            login_message.classList.add("block");
        }
    }

    return (
        <>
            <Head>
                <title> Login | mKidde-dev </title>
            </Head>
            <Navbar page="admin"/>
            <div className="bg-slate-50 h-full min-h-screen">
                <Container className="pt-32 md:pt-64">
                    <div className="flex">
                        <div className="w-1/4 mx-auto">                            
                            <form id="login_form" onSubmit={submitLogin}>
                                <div className="flex flex-col">
                                    <h3 className="text-xl md:text-2xl mx-3 mb-3">Login required</h3>
                                    <InputField type="text" name="username" id="username" placeholder="Username" label="Username" required={true} />
                                    <InputField type="password" name="password" id="password" placeholder="Password" label="Password" required={true}/>
                                </div>
                                <div className="flex">
                                    <Button title="Login" onClick={null} className="mx-3" />
                                    <p id="login_message" className={"hidden mx-2 self-center text-red-600 text-md font-semibold"}>Login failed.</p>
                                    {// add ReCaptcha
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}