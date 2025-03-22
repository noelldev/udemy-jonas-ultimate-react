import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="profile-pic.jpg" alt="Profile Pic" />;
}

function Intro() {
  return (
    <div className="intro">
      <h1>Noel Dev</h1>
      <p>
        Full-stack Javascript Developer. I'm a passionate software engineer with
        background in electronics engineering. When not coding, I play tennis, I
        cook (and eat), avgeeking out or enjoying the beaches of the
        Philippines.
      </p>
    </div>
  );
}

const skills = [
  {
    skill: "HTML,CSS,TailwindCSS",
    emoji: "🤭",
    level: "Intermediate",
    color: "#e34c26",
  },
  {
    skill: "React",
    emoji: "😍",
    level: "Intermediate",
    color: "#61DAFB",
  },
  {
    skill: "Javascript,Node.js",
    emoji: "💪",
    level: "Advanced",
    color: "#68A063",
  },
  {
    skill: "Express.js,RestAPI",
    emoji: "😊",
    level: "Intermediate",
    color: "#000000",
  },
  {
    skill: "DynomoDB,PostgreSQL",
    emoji: "😁",
    level: "Intermediate",
    color: "#336791",
  },
  {
    skill: "AWS,Linux Ubuntu",
    emoji: "💓",
    level: "Intermediate",
    color: "#FF9900",
  },
  {
    skill: "Git,Github,Bash",
    emoji: "🧑‍💻",
    level: "Intermediate",
    color: "#808080",
  },
  {
    skill: "Typescript",
    emoji: "😃",
    level: "Intermediate",
    color: "#007ACC",
  },
  {
    skill: "Postman,Jest",
    emoji: "✅",
    level: "Intermediate",
    color: "#FF6C37",
  },
];
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          emoji={skill.emoji}
          level={skill.level}
          color={skill.color}
        />
      ))}
    </div>
  );
}

function Skill({ skill, emoji, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color, color: "white" }}>
      <span>{skill}</span>
      <span>{emoji}</span> - <span>{level}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
