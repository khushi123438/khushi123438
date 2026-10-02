import "./Projects.css";
import { motion } from "framer-motion";

import {
  staggerContainer,
  cardAnimation,
  titleAnimation,
} from "../../animations/motion";

import projects from "./projectData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="projects" id="projects">

      {/* Section Title */}

       <motion.div
        className="cert-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
      >

        <span>MY WORK</span>

        <h2>

         Featured
          <span> Projects</span>

        </h2>

        <p>
        AI, Machine Learning, Deep Learning, NLP, Computer Vision,

LLMs, RAG and Agentic AI systems built to solve

real-world problems with intelligent technology.

        </p>
      </motion.div>

      {/* Project Grid */}

      <motion.div
        className="projects-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </motion.div>

    </section>
  );
}