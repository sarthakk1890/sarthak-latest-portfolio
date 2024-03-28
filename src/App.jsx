import './App.css';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import ProjectCard from './Components/ProjectCard';
// import Sidebar from './Components/Sidebar';
import Skills from './Components/Skills';
import TopComponent from './Components/TopComponent';
import img1 from './assets/bookCafe.png';
import img2 from './assets/diabeticRetinopathy.png';
import img3 from './assets/portfolio.png';
import { motion } from 'framer-motion'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/react-toastify.css'

const projectData = [
  { image: img1, title: 'BookCafe', description: 'A robust web application for renting books', url: 'https://boookcafe.netlify.app/' },
  { image: img3, title: 'Portfolio', description: 'Want to know about me visit my Portfolio', url: 'https://sarthak1890.netlify.app/' },
  { image: img2, title: 'RetinoCare', description: 'A diabetic retinopathy detection web app', url: 'https://retinocare.netlify.app/' },
];

const experienceData = [
  {
    company: 'Its My Kart',
    role: 'Backend Developer',
    skills: 'Employed JavaScript, API integration, testing, and debugging skills during internship, alongside utilization of serverless platform Aircode.',
  },
  {
    company: 'Magic Step Pvt. Ltd.',
    role: 'Web Developer',
    skills: 'Leveraged JavaScript, Python, and REST API skills during internship, integrating, testing, and debugging functionalities within projects.',
  }
]

const educationData = [
  {
    degree: 'Secondary Education',
    year: '2019-2020',
    description: 'Scoring 91% in CBSE exams shows great dedication and skill in studies, marking a significant academic success.'
  },
  {
    degree: "Bachelor's degree",
    year: '2021-2025',
    description: 'A CGPA of 7.82 by the fifth semester at <span className="institute" style="font-weight: bold; font-style: italic;">IIIT Una</span> highlights strong performance in the Bachelor&amp;s in Electronics and Communication Engineering.'
  },
]

function App() {

  const option = {
    initial: {
      opacity: 0,
    },
    whileInView: {
      opacity: 1,
    }
  }

  return (
    <>
      {/* <Sidebar /> */}
      <ToastContainer className="react-toastify" />
      <TopComponent />
      <div className="main-project-block center">
        <h1 className='subHeading'>My Projects</h1>
        <div className="projects">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              url={project.url}
              image={project.image}
              title={project.title}
              description={project.description}
              delay={0.2 * index}
            />
          ))}
        </div>
      </div>

      <div className="main-skill-block center">
        <motion.h1
          {...option}
          transition={{ delay: 0.1 }}
          className='subHeading subHeading2'>
          What I know
        </motion.h1>
        <Skills />
      </div>

      <div className="main-experience-block center">
        <motion.h1
          {...option}
          transition={{ delay: 0.1 }}
          className='subHeading subHeading2'>
          My Experiences
        </motion.h1>

        <div className="experiences">
          <Experience
            experienceData={experienceData}
            educationData={educationData}
          />
        </div>
      </div>

      <div className="main-contact-block">
        <Contact />
      </div>

      <div className="main-footer-block">
        <Footer />
      </div>
    </>
  );
}

export default App;
