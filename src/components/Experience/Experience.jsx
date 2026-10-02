import "./Experience.css";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaLaptopCode,
  FaCertificate,
  FaGithub,
} from "react-icons/fa";

const experiences = [
  {
  
  icon: <FaBrain />,
  year: "2026 - Present",
  role: "AI / Machine Learning Engineer",
  company: "Self Learning & AI Projects",
  description:
    "Exploring, building and deploying intelligent systems across Machine Learning, Deep Learning, NLP, Computer Vision and Generative AI, with hands-on experience in LLMs, RAG, Agentic AI and end-to-end AI applications.",
  skills: [
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "Generative AI",
    "LLMs",
    "RAG",
    "Agentic AI",
  ],
},
 

  {
    icon: <FaLaptopCode />,
    year: "2025 - Present",
    role: "Full Stack Developer",
    company: "Personal Projects",
    description:
      "Developing scalable MERN Stack applications with authentication, dashboards, Firebase and REST APIs.",
    skills: [
      "React",
      "Node",
      "MongoDB",
      "Express",
      "Firebase",
    ],
  },

  {
    icon: <FaGithub />,
    year: "Ongoing",
    role: "Open Source & Portfolio",
    company: "GitHub",
    description:
      "Building AI projects, improving coding skills, solving DSA problems and maintaining an active GitHub profile.",
    skills: [
      "Git",
      "GitHub",
      "DSA",
      "Projects",
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">

      <motion.div
        className="experience-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
      >
        <span>MY JOURNEY</span>

        <h2>
          Experience &
          <span> Learning</span>
        </h2>

        <p>
          My continuous journey of becoming an AI Engineer through
          projects, certifications and hands-on development.
        </p>

      </motion.div>

      <div className="timeline">

        {experiences.map((item, index) => (

          <motion.div
            key={index}
            className="timeline-card"
            initial={{ opacity: 0, x: index % 2 ? 80 : -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <div className="timeline-icon">
              {item.icon}
            </div>

            <div className="timeline-content">

              <span className="year">
                {item.year}
              </span>

              <h3>{item.role}</h3>

              <h4>{item.company}</h4>

              <p>{item.description}</p>

              <div className="timeline-skills">

                {item.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}