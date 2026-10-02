import "./Skills.css";
import Orbit from "./Orbit";
import "./Orbit.css";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "🧠 Machine Learning & Deep Learning",
   skills: [
  "Machine Learning",
  "Deep Learning",
  "Neural Networks",
  "CNN",
  "RNN",
  "LSTM",
  "BiLSTM",
  "Autoencoders",
  "Model Evaluation",
  "Feature Engineering"
]

  },

  {
    title: "🤖 Generative AI & LLMs",
    skills: [
      "Generative AI",
      "Large Language Models",
      "LLMs",
      "Transformers",
      "Prompt Engineering",
      "LLM Applications",
      "AI Agents",
      "Agentic AI",
      "Hugging Face",
      "Fine-Tuning"
    ]
  },

  {
    title: "🔎 RAG & AI Retrieval",
    skills: [
      "Retrieval-Augmented Generation",
      "RAG",
      "Embeddings",
      "Semantic Search",
      "Vector Search",
      "Vector Databases",
      "Context Retrieval",
      "Document Retrieval",
      "Information Retrieval"
    ]
  },

  {
    title: "📝 NLP & Computer Vision",
    skills: [
      "Natural Language Processing",
      "Text Processing",
      "Information Extraction",
      "Text Classification",
      "Resume Parsing",
      "Skill Extraction",
      "Computer Vision",
      "Image Processing",
      "OpenCV"
    ]
  },

  {
    title: "📊 Data Science & ML Engineering",
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-Learn",
      "Matplotlib",
      "EDA",
      "Data Cleaning",
      "Feature Engineering",
      "Predictive Modeling",
      "Model Inference"
    ]
  },

  {
    title: "⚡ AI Frameworks & Tools",
    skills: [
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Hugging Face",
      "LangChain",
      "OpenAI APIs",
      "AI APIs",
      "Google Colab",
      "Jupyter"
    ]
  },

  {
    title: "💻 Programming & Software",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "C++",
      "Git",
      "GitHub",
      "REST APIs",
      "Docker"
    ]
  },

  {
    title: "🌐 Application & Backend",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "Flask",
      "FastAPI",
      "MongoDB",
      "SQL",
      "JWT Authentication"
    ]
  },

  {
    title: "🧩 Computer Science",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "System Design"
    ]
  },

  {
    title: "☁️ Deployment & Engineering",
    skills: [
      "Docker",
      "Vercel",
      "Netlify",
      "Render",
      "API Deployment",
      "Model Deployment",
      "GitHub"
    ]
  }
];

export default function Skills() {
  return (

<section className="skills" id="skills">

    <motion.div
        className="skills-title"
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:.8}}
        viewport={{once:true}}
    >

        <span>MY EXPERTISE</span>

        <h2>
            Skills &
            <span> Technologies</span>
        </h2>

       <p>
  Building intelligent systems across Machine Learning, Deep Learning,
  NLP, Computer Vision, Transformers, LLMs, Generative AI,
  RAG and Agentic AI.
</p>

    </motion.div>

    <div className="skills-layout">

        {/* LEFT */}

        <div className="skills-column">

            {
                skillCategories
                .slice(0,4)
                .map((category,index)=>(

                    <motion.div
                        key={index}
                        className="skill-card"
                        whileHover={{
                            y:-10,
                            scale:1.02
                        }}
                    >

                        <h3>{category.title}</h3>

                        <div className="skill-tags">

                            {
                                category.skills.map((skill,i)=>(

                                    <span key={i}>
                                        {skill}
                                    </span>

                                ))
                            }

                        </div>

                    </motion.div>

                ))
            }

        </div>

        {/* CENTER */}

        <Orbit />

        {/* RIGHT */}

        <div className="skills-column">

            {
                skillCategories
                .slice(4)
                .map((category,index)=>(

                    <motion.div
                        key={index}
                        className="skill-card"
                        whileHover={{
                            y:-10,
                            scale:1.02
                        }}
                    >

                        <h3>{category.title}</h3>

                        <div className="skill-tags">

                            {
                                category.skills.map((skill,i)=>(

                                    <span key={i}>
                                        {skill}
                                    </span>

                                ))
                            }

                        </div>

                    </motion.div>

                ))
            }

        </div>

    </div>

    {/* Currently Learning */}

    <motion.div

        className="learning-card"

        initial={{opacity:0,y:50}}

        whileInView={{opacity:1,y:0}}

        transition={{duration:.7}}

    >

        <h3>🚀 Currently Exploring</h3>

<div className="learning-tags">

  <span>Large Language Models</span>
  <span>Generative AI</span>
  <span>RAG</span>
  <span>Vector Databases</span>
  <span>Semantic Search</span>
  <span>AI Agents</span>
  <span>Agentic AI</span>
  <span>Transformers</span>
  <span>Fine-Tuning</span>
  <span>Multimodal AI</span>

</div>

    </motion.div>

</section>

);
}