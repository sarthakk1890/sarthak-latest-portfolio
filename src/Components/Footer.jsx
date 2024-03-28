import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaPhone } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiGeeksforgeeks } from "react-icons/si";
import '../styles/footer.css'

const Footer = () => {

    const redirectToPage = (url) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <section className='footer_main'>
                <div className="footer_sub-01">
                    <h2>Get in Touch</h2>
                    <p>Feel free to reach out!</p>
                    <div className="social-icons">
                        <ul>
                            <li onClick={() => redirectToPage('https://www.linkedin.com/in/sarthak-singh-38261b225/')}>
                                <FaLinkedin />
                            </li>
                            <li onClick={() => redirectToPage('https://github.com/sarthakk1890')}>
                                <FaGithub />
                            </li>
                            <li onClick={() => redirectToPage('https://x.com/sarthak1890')}>
                                <FaTwitter />
                            </li>
                        </ul>
                    </div>
                    <div className="contact-details">
                        <span className="email"><FaPhone /> <p>+91 7017359581</p></span>
                        <span className="phone"><FaEnvelope /> <p>144singhsarthak@gmail.com</p></span>
                    </div>
                </div>

                <div className="footer_sub-02">
                    <div className="coding-profile" onClick={() => redirectToPage('https://leetcode.com/sarthak189/')}>
                        <TbBrandLeetcode />
                        <p>
                            sarthak189
                        </p>
                    </div>
                    <div className="coding-profile" onClick={() => redirectToPage('https://auth.geeksforgeeks.org/user/144singhsarthak')}>
                        <SiGeeksforgeeks />
                        <p>
                            144singhsarthak
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer