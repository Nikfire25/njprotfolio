import React from "react";
import { useState } from "react";
import { cn } from "../Lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },

  // Data & Analytics
  { name: "SQL", category: "Data" },
  { name: "PySpark", category: "Data" },
  { name: "Azure Databricks", category: "Data" },
  { name: "Dataiku DSS", category: "Data" },
  { name: "Amazon Redshift", category: "Data" },

  // Programming Languages
  { name: "Java", category: "Programming" },
  { name: "C++", category: "Programming" },
  { name: "Python", category: "Programming" },

  // Data Visualization
  { name: "Tableau", category: "Data Visualization" },
  { name: "Power BI", category: "Data Visualization" },

  // Tools & Platforms
  { name: "Git/GitHub", category: "Tools" },
  { name: "VS Code", category: "Tools" },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = ["all", ...new Set(skills.map((skill) => skill.category))];
  const selectedSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);
  return (
    <section id="skills" className="py-24 px-24 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full duration-300 capitalize transition-colors",
                activeCategory === category ? "bg-primary" : ""
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedSkills.map((skill, ind) => (
            <div
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
              key={ind}
            >
              <div className="text-center mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
