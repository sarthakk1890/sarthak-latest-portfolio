import '../styles/topComponent.css';
import profile from '../assets/profile.png';
import Typewriter from './Typewriter';
import { motion } from 'framer-motion'

const TopComponent = () => {

    const option1 = {
        initial: {
            x: "-100%",
            opacity: 0,
        },
        whileInView: {
            x: 0,
            opacity: 1,
        }
    }

    return (
        <div className="topComponent">
            <motion.img {...option1} transition={{ delay: 0.1 }} src={profile} alt="Me" className='profileImage' />
            <div>
                <p>Hi, I&apos;m</p>
                <p className='Mname'> <span className="highlight transparent-bg">S</span>arthak <span className="highlight transparent-bg">S</span>ingh</p>
                <p className='typewriter'><Typewriter sentences={["Full Stack Developer", "Competitive Programmer"]} speed={200} /></p>
            </div>
        </div>
    );
};

export default TopComponent;
