import v from "../../assets/v.png";
import iii from "../../assets/iii.png";
import vi from "../../assets/vi.png";
import vii from "../../assets/vii.png";
import x from "../../assets/x.png";

const projects = [
  {
    
  id: 1,
  title: "NexHire AI",
  category: ["Gen AI", "RAG",
    "Agentic AI"],

  description:
    "AI-powered interview coach that analyzes resumes, extracts and normalizes skills using NLP, generates adaptive interview questions with LLMs, conducts voice-based interviews, evaluates responses, and builds personalized career roadmaps.",

  image: v,

  tech: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Python",
    "NLP",
    "LLMs",
    "GenAI",
    "RAG",
    "Agentic AI",
    "Speech AI",
  ],

  github: "https://github.com/khushi123438/NexHire-AI",

  },

  {
    id: 2,
    title: "NyaySetu",
    category: ["Full Stack", "AI"],

    description:
      "AI-powered legal assistance platform that helps users understand legal information, access resources, and connect with legal support.",

    image: vi,

    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "LLMs",
    ],

    github: "https://github.com/khushi123438/NyaySetu",
  },

  {
    id: 3,
    title: "Rakshak AI",
    category: ["Machine Learning", "Computer Vision", "NLP", "LLMs"],

    description:
      "Multimodal AI-based disaster intelligence system that analyzes satellite imagery, environmental data, and emergency reports to predict disaster risks, provide real-time situational awareness, and support intelligent response decisions.",

    image: vii,

    tech: [
      "React",
      "Node.js",
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "GenAI",
    ],

    github: "https://github.com/khushi123438/Rakshak-AI",
  },

  {
    id: 4,
    title: "PlacementPro AI",
    category: ["Machine Learning"],

    description:
      "ML-based placement prediction system that analyzes student academic and skill-related data to estimate placement chances. The model uses machine learning algorithms to identify patterns and provides placement probability along with key contributing factors.",

    image: iii,

    tech: [
      "Python",
      "Scikit-Learn",
      "Machine Learning",
      "JavaScript",
    ],

    github: "https://github.com/khushi123438/PlacementPro_AI",
  },

  {
  id: 5,
  title: "CardioGuard AI",
  category: ["Machine Learning", "Deep Learning", "Transformer"],

  description:
    "ML-powered cardiovascular risk assessment system that combines clinical data and ECG signals to predict cardiac risk, analyze heart conditions, and provide explainable insights using multiple AI models.",

  image: x,

  tech: [
    "React",
    "Python",
    "Flask",
    "Machine Learning",
    "Deep Learning",
    "ECG Analysis",
    "Transformer"
  ],

  github: "https://github.com/khushi123438/CardioGuard",
},
];

export default projects;