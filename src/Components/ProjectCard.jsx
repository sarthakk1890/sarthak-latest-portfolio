import PropTypes from 'prop-types';
import '../styles/projectCard.css';
import { motion } from 'framer-motion'

const ProjectCard = ({ image, title, description, delay, url }) => {

    const option1 = {
        initial: {
            y: "-100%",
            opacity: 0,
        },
        whileInView: {
            y: 0,
            opacity: 1,
        }
    }

    const handleClick = (url) => {
        window.open(url, '_blank')
    }

    return (
        <motion.div {...option1} transition={{ delay: delay }} className="project-card" onClick={() => handleClick(url)}>
            <img className="project-image" src={image} alt={title} />
            <div className="about-project transparent-bg">
                <h3 className="project-title transparent-bg">{title}</h3>
                <p className='transparent-bg'>{description}</p>
            </div>
        </motion.div>
    );
}

ProjectCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    delay: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
};

export default ProjectCard;
