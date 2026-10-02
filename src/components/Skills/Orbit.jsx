import "./Orbit.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  FaBrain,
  FaRobot,
  FaDatabase,
  FaSearch,
  FaPython,
  FaCodeBranch,
  FaDocker,
  FaMicrochip,
  FaNetworkWired,
} from "react-icons/fa";

import {
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiScikitlearn,
  SiHuggingface,
  SiLangchain,
} from "react-icons/si";

const orbitIcons = [
  {
    icon: <FaBrain />,
    color: "#A855F7",
    angle: 0,
    label: "Machine Learning",
  },

  {
    icon: <SiTensorflow />,
    color: "#FF6F00",
    angle: 30,
    label: "Deep Learning",
  },

  {
    icon: <SiPytorch />,
    color: "#EE4C2C",
    angle: 60,
    label: "PyTorch",
  },

  {
    icon: <SiScikitlearn />,
    color: "#F7931E",
    angle: 90,
    label: "Scikit-Learn",
  },

  {
    icon: <SiHuggingface />,
    color: "#FFD21E",
    angle: 120,
    label: "Transformers",
  },

  {
    icon: <FaRobot />,
    color: "#22D3EE",
    angle: 150,
    label: "LLMs",
  },

  {
    icon: <FaMicrochip />,
    color: "#EC4899",
    angle: 180,
    label: "Generative AI",
  },

  {
    icon: <SiLangchain />,
    color: "#84CC16",
    angle: 210,
    label: "LLM Apps",
  },

  {
    icon: <FaSearch />,
    color: "#38BDF8",
    angle: 240,
    label: "RAG",
  },

  {
    icon: <FaDatabase />,
    color: "#8B5CF6",
    angle: 270,
    label: "Vector DB",
  },

  {
    icon: <FaNetworkWired />,
    color: "#06B6D4",
    angle: 300,
    label: "Agentic AI",
  },

  {
    icon: <SiOpencv />,
    color: "#5C3EE8",
    angle: 330,
    label: "Computer Vision",
  },
];

export default function Orbit() {
  const [radius, setRadius] = useState(180);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth <= 480) {
        setRadius(110);
      } else if (window.innerWidth <= 768) {
        setRadius(140);
      } else if (window.innerWidth <= 1024) {
        setRadius(160);
      } else {
        setRadius(180);
      }
    };

    updateRadius();

    window.addEventListener("resize", updateRadius);

    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div className="orbit-wrapper">

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* AI Glow */}
      <div className="orbit-glow"></div>

      {/* Outer Ring */}
      <motion.div
        className="outer-ring"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      />

      {/* Inner Ring */}
      <motion.div
        className="inner-ring"
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 28,
          ease: "linear",
        }}
      />

      {/* AI Technology Orbit */}
      <motion.div
        className="orbit-ring"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {orbitIcons.map((item, index) => {
          const x =
            radius * Math.cos((item.angle * Math.PI) / 180);

          const y =
            radius * Math.sin((item.angle * Math.PI) / 180);

          return (
            <motion.div
              key={index}
              className="orbit-icon"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                color: item.color,
              }}
              whileHover={{
                scale: 1.25,
              }}
            >
              {item.icon}

              <span>{item.label}</span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Center AI Core */}
      <motion.div
        className="orbit-center"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
      >
        <FaBrain />
        <span>AI</span>
      </motion.div>

    </div>
  );
}