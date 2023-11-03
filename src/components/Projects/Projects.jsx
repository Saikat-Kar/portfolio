import React from "react";
import "./Projects.css";
import { Typography } from "@mui/material";
import { AiOutlineProject } from "react-icons/ai";
import ProjectCard from "./ProjectCard";
import { FaRegSmileWink } from "react-icons/fa";

const Projects = () => {
  const projects = [1, 2, 3];

  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectWrapper">
        {projects.map((project, index) => {
          console.log(project);
          return (
            <ProjectCard
              url="https://github.com/Saikat-Kar"
              projectImage="https://picsum.photos/200/300"
              projectTitle="Sample project"
              description="This is a sample projec ksdbfkjds ksnfvofs iudshfiods"
              technologies="Mongodb, React, Nodejs, Express"
            />
          );
        })}
      </div>

      <Typography variant="h3" style={{ font: "100 1.1rem 'Agbalumo'" }}>
        All The Projects Shown Abobe Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;
