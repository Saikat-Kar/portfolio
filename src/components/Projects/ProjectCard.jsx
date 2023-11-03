import { Button, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import React from "react";

const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
}) => {
  return (
    <>
      <a href={url} className="projectCard" target="black">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>

        <div>
          <Typography variant="h4">About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button style={{ color: "rgba(40,40,40,0.7)" }}>
          <Delete />
        </Button>
      )}
    </>
  );
};

export default ProjectCard;
