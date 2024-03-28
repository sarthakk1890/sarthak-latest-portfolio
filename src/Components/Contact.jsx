import { useState } from 'react';
import '../styles/contact.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const serviceId = "service_i1if78n";
        const templateId = "template_2lvwcbh";
        const publicKey = "NZTolXnICO8Ac0Luv";

        if (!name || !email || !message) {
            toast.warning("Please complete the message !");
            return;
        }

        const templateParams = {
            to_name: "Sarthak Singh",
            user_name: name,
            user_email: email,
            message: message
        }

        // emailjs.send(serviceId, templateId, templateParams, publicKey)
        //     .then((res) => {
        //         toast.success("Got your message, will get back soon")
        //         setName('');
        //         setEmail('');
        //         setMessage('');
        //     })
        //     .catch((error) => {
        //         toast.error("Something went wrong")
        //     })
        toast.promise(
            emailjs.send(serviceId, templateId, templateParams, publicKey),
            {
                pending: 'Sending email...',
                success: {
                    render: 'Got your message, will get back soon',
                    // icon: '📧',
                },
                error: {
                    render: 'Something went wrong',
                    // icon: '❌',
                },
            }
        )
            .then((res) => {
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => { })
    }

    return (
        <div className='contact-main'>
            <section className="contact-head">
                <p>
                    Let&apos;s get <br />connected.
                </p>
                <span className="small-message">
                    Please write a message to send
                </span>
            </section>
            <section className="contact-form display-1">
                <p>
                    My name is <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} /> and I
                </p>
                <p>
                    want you to <input type="text" placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} />.
                </p>
                <p>
                    You can reach me at <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} /> to
                </p>
                <p>
                    get things started.
                </p>
                <button onClick={handleSubmitForm}>
                    <FaLongArrowAltRight /> Send Info
                </button>
            </section>
            <section className="contact-form display-2">
                <p>
                    My name is
                </p>
                <p>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                </p>
                <p>
                    and I want you to
                </p>
                <p>
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter your message" />
                </p>
                <p>
                    You can reach me at
                </p>
                <p>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                </p>
                <p>
                    to get things started.
                </p>
                <button onClick={handleSubmitForm}>
                    <FaLongArrowAltRight /> Send Info
                </button>
            </section>
        </div>
    )
}

export default Contact