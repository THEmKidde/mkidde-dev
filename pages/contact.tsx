import Head from 'next/head'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import Button from '../components/Button'
import InputField from '../components/InputField'

import { useState } from 'react'

export default function Contact() {
    const [success, setSuccess] = useState(0); // 0: nothing sent yet, 1: failed, 2: success

    const formURL = process.env.FORM_URL;

    const submitContactForm = async event => {
        event.preventDefault()

        const res = await fetch(formURL, {
            body: JSON.stringify({
                first_name: event.target.first_name.value,
                last_name: event.target.last_name.value,
                email: event.target.email.value,
                company: event.target.company.value,
                message: event.target.message.value
            }),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        })
        const result = await res;
    
        if (result.status == 200) {
            setSuccess(2); // success
            setTimeout(()=>{setSuccess(0)}, 2000)
        } else {
            setSuccess(1); // failed
            setTimeout(()=>{setSuccess(0)}, 2000)
        }
        
    }

    return (
        <>
            <Head>
                <title> Contact | mKidde-dev </title>
            </Head>
            <Navbar page="contact" />
            <div className="bg-slate-50 h-full min-h-screen">
                <Container className="pt-40">
                    <h1 className="text-8xl">Contact me</h1>
                    <h3 className="text-3xl my-8">If you would like to get in touch with me, you can do so by contacting me through LinkedIn, email or the contact form below.</h3>
                    <div className="flex justify-between mt-12">
                        <div>
                            <h3 className="text-2xl mx-3">Information</h3>
                            <table className="m-3">
                                <tbody>
                                    <tr>
                                        <td className="w-24 font-semibold">LinkedIn</td>
                                        <td><a href="https://www.linkedin.com/in/mikkel-kidde-thomsen/" target="_blank" className="text-sky-600">https://www.linkedin.com/in/mikkel-kidde-thomsen/</a></td>
                                    </tr>
                                    <tr>
                                        <td className="font-semibold">Email</td>
                                        <td>mkidde@outlook.dk</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="w-3/5">
                            <form onSubmit={submitContactForm}>
                                <div className="flex flex-col">
                                    <h3 className="text-2xl mx-3">Contact form</h3>
                                    <div className="flex">
                                        <InputField type="text" name="first_name" id="first_name" placeholder="First name" label="First name" required={true} />
                                        <InputField type="text" name="last_name" id="last_name" placeholder="Last name" label="Last name" />
                                    </div>
                                    <div className="flex">
                                        <InputField type="email" name="email" id="email" placeholder="Email" label="Email" required={true} />
                                        <InputField type="text" name="company" id="company" placeholder="Company name" label="Company name" />
                                    </div>
                                    <InputField type="textarea" name="message" id="message" placeholder="Message" label="Message" required={true} />
                                </div>
                                <div className="flex">
                                    <Button title="Submit" onClick={null} className="mx-3" />
                                    <p className={(success == 2 ? "block" : "hidden")+" mx-2 self-center text-green-600 text-lg font-semibold"}>Your message has been sent!</p>
                                    <p className={(success == 1 ? "block" : "hidden")+" mx-2 self-center text-red-600 text-lg font-semibold"}>Something went wrong.</p>
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