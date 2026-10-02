import "./About.css";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaCode,
  FaRobot,
  FaLaptopCode,
  FaArrowRight,
} from "react-icons/fa";

export default function About() {
  return (
    <section className="about" id="about">

      {/* LEFT */}

      <motion.div
        className="about-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <div className="about-glow"></div>

        <div className="profile-wrapper">

          <div className="profile-card">

            <div className="profile-circle">
              👩🏻‍💻
            </div>

            <h2>Khushi</h2>

            <p>AI Engineer</p>

            <span className="profile-subtitle">
              ML • GenAI • LLMs
            </span>

          </div>

          <motion.div
            className="profile-bottom-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >

            <div className="bottom-item">
              <h3>🧠</h3>
              <p>AI / ML</p>
            </div>

            <div className="divider"></div>

            <div className="bottom-item">
              <h3>🤖</h3>
              <p>GenAI</p>
            </div>

            <div className="divider"></div>

            <div className="bottom-item">
              <h3>🔎</h3>
              <p>RAG / LLM</p>
            </div>

          </motion.div>

          <motion.div
            className="status-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="status-header">

              <span className="status-dot"></span>

              <span>Exploring & Building AI Systems</span>

            </div>

            <div className="status-body">

              <div className="role-chip">
                🤖 AI Engineer
              </div>

              <div className="role-chip">
                🧠 ML Engineer
              </div>

              <div className="role-chip">
                ✨ GenAI
              </div>

              <div className="role-chip">
                🔗 LLM / RAG
              </div>

              <div className="role-chip">
                🕸️ Agentic AI
              </div>

              <div className="role-chip">
                📊 Data Science
              </div>

            </div>

          </motion.div>

        </div>

      </motion.div>


      {/* RIGHT */}

      <motion.div
        className="about-right"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <span className="section-tag">
          ABOUT ME
        </span>

        <h2>
          Aspiring
          <span> AI Engineer</span>
          <br />
          Building Intelligent Systems
        </h2>

        <p>
          I'm a Computer Science Engineering student focused on building
          <strong> intelligent, data-driven systems</strong> that solve
          real-world problems.

          My interests span across
          <strong> Machine Learning, Deep Learning, Natural Language Processing,
          Computer Vision, Transformers, Large Language Models (LLMs),</strong>
          and <strong>Generative AI</strong>.

          I'm also exploring modern AI architectures including
          <strong> Retrieval-Augmented Generation (RAG), embeddings,
          semantic search, vector databases,</strong> and
          <strong> Agentic AI</strong> to build more contextual and
          intelligent applications.

          I enjoy working across the complete AI pipeline —
          from <strong>data preprocessing, model training and evaluation </strong>
          to <strong>LLM integration, retrieval pipelines and AI deployment</strong>.
        </p>


        {/* Cards */}

        <div className="about-grid">

          <div className="about-box">

            <FaBrain />

            <h4>Machine Learning</h4>

            <p>
              ML, Deep Learning & Neural Networks
            </p>

          </div>


          <div className="about-box">

            <FaRobot />

            <h4>Generative AI</h4>

            <p>
              LLMs, Transformers & AI Applications
            </p>

          </div>


          <div className="about-box">

            <FaLaptopCode />

            <h4>RAG & Retrieval</h4>

            <p>
              Embeddings, Semantic Search & Vector DBs
            </p>

          </div>


          <div className="about-box">

            <FaCode />

            <h4>Agentic AI</h4>

            <p>
              AI Agents & Intelligent Workflows
            </p>

          </div>

        </div>


        <button
          className="about-btn"
          onClick={() =>
            document.getElementById("contact").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Let's Build Together
          <FaArrowRight />
        </button>

      </motion.div>

    </section>
  );
}