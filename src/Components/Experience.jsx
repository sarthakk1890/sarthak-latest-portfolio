import '../styles/experience.css'
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Experience = ({ educationData, experienceData }) => {

  const option = {
    initial: {
      x: '-100%',
      opacity: 0,
    },
    whileInView: {
      x: '0%',
      opacity: 1,
    }
  }

  const option2 = {
    initial: {
      y: '-100%',
      opacity: 0,
    },
    whileInView: {
      y: '0%',
      opacity: 1,
    }
  } 

  return (

    <div className="container">

      <main className="row">

        <section className="col">
          <header className="title">
            <h2>EDUCATION</h2>
          </header>
          <div className="contents">
            {
              educationData.map((value, idx) => (
                <div className="box" key={idx}>
                  <motion.h4 {...option}>{value.year}</motion.h4>
                  <motion.h3 {...option} transition={{ delay: 0.4 }}>{value.degree}</motion.h3>
                  <motion.p {...option2} transition={{ delay: 0.6 }} dangerouslySetInnerHTML={{ __html: value.description }} />
                </div>
              ))
            }
          </div>
        </section>

        <section className="col">
          <header className="title">
            <h2>Internships</h2>
          </header>
          <div className="contents">
            {
              experienceData.map((value, idx) => (
                <div className="box" key={idx}>
                  <motion.h4 {...option}>{value.company}</motion.h4>
                  <motion.h3 {...option} transition={{ delay: 0.4 }}>{value.role}</motion.h3>
                  <motion.p {...option2} transition={{ delay: 0.6 }}>{value.skills}</motion.p>
                </div>
              ))
            }
          </div>
        </section>

      </main>

    </div>
  )
}

// PropTypes
Experience.propTypes = {
  educationData: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  experienceData: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      skills: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Experience