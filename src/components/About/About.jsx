import React from "react";
import "./About.css";
import { Typography } from "@mui/material";
import avtar from "../../Images/Avtar.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>It is a sample code</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src={avtar} alt="Saikat" className="aboutAvtar" />

          <Typography variant="h4" style={{ margin: "1vmax", color: "black" }}>
            Saikat
          </Typography>
          <Typography style={{ margin: "1vmax" }}>
            Full Stack Developer
          </Typography>
          <Typography style={{ margin: "1vmax" }}>I am a student</Typography>
        </div>

        <div>
          <Typography className="aboutDesc">
            This is description Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Consequuntur sint veritatis quam. Officia repellat
            amet corrupti ea dolorem eaque perspiciatis, sapiente ipsa tenetur,
            quibusdam veniam totam labore accusantium ratione. Ut.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
