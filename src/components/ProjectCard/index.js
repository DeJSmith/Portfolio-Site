import React from "react";
import styled from "styled-components";
import stock from "../../assets/Stock.jpg";
import theme from "../../theme/theme";

const CardDiv = styled.div`
  background-color: white;
  //box-shadow: 5px 5px 40px rgba(255, 150, 180, 0.4);
  box-shadow: 5px 5px 40px rgba(0, 0, 0, 0.4);
  text-align: center;
  margin: auto;
  color: ${theme.colorSecondary};
  width: 10rem;
  height: 12rem;
  padding: 5rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  height: 280px;
  width: 200px;
  background-color: #17141d;
  border-radius: 10px;
  box-shadow: -1rem 0 3rem #000;

  transition: 0.4s ease-out;
  position: relative;
  left: 0px;

  &:hover {
    transform: translateY(-20px);
    transition: 0.4s ease-out;
  }

  &:hover ~ .card {
    position: relative;
    left: 50px;
    transition: 0.4s ease-out;
  }
`;

const ProjectCard = ({ repo, key }) => {
  return (
    <Card key={key}>
      <img
        src={stock}
        alt=""
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          marginBottom: "2rem",
        }}
      />
      <strong>{repo.name}</strong>
      <p style={{ color: `${theme.colorPrimary}` }}>{repo.description}</p>
    </Card>
  );
};

export default ProjectCard;

/*

.container {
  position: absolute;
  height: 300px;
  width: 600px;
  top: 60px;
  left: calc(50% - 300px);
  display: flex;
}

.card {
  display: flex;
  height: 280px;
  width: 200px;
  background-color: #17141d;
  border-radius: 10px;
  box-shadow: -1rem 0 3rem #000;

  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
}

.card:not(:first-child) {
    margin-left: -50px;
}

.card:hover {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
}

.card:hover ~ .card {
  position: relative;
  left: 50px;
  transition: 0.4s ease-out;
}

.title {
  color: white;
  font-weight: 300;
  position: absolute;
  left: 20px;
  top: 15px;
}



.card:hover .filledbar {
  width: 120px;
  transition: 0.4s ease-out;
}

.circle {
  position: absolute;
  top: 150px;
  left: calc(50% - 60px);
}

.stroke {
  stroke: white;
  stroke-dasharray: 360;
  stroke-dashoffset: 360;
  transition: 0.6s ease-out;
}


*/
