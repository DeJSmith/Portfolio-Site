import React from "react";
import { ButtonOutline } from "../../elements/globalElements";
import theme from "../../theme/theme";
import styled, { css, keyframes } from "styled-components";

const Card = ({ children, course }) => {
  const glow = keyframes`
    0% {
        
        box-shadow: 0 0 0 0 rgba(247, 137, 33, 0.7);
    }
    
    70% {
        
        box-shadow: 0 0 0 15px rgba(247, 137, 33, 0);
    }
    
    100% {
        
        box-shadow: 0 0 0 0 rgba(247, 137, 33, 0);
    }
  `;

  const live = css`
    border: 5px solid ${theme.colorSecondary};
    animation: ${glow} 2s infinite;
  `;

  const CardStyled = styled.div`
    width: 100%;
    max-width: 320px;
    min-width: 250px;
    height: 300px;
    background-color: ${theme.colorPrimary};
    border-radius: 10px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
    border: 2px solid rgba(7, 7, 7, 0.12);
    font-size: 1rem;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    transition: all 0.3s ease;
    padding: 2rem 1rem 1rem 1rem;
    ${live}

    & .icon {
      margin: 0 auto;
      width: 100%;
      height: 80px;
      max-width: 80px;
      background: linear-gradient(
        90deg,
        ${theme.colorSecondary},
        0%,
        ${theme.colorSecondaryDark} 40%,
        ${theme.colorTertiary} 60%
      );
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      transition: all 0.8s ease;
      background-position: 0px;
      background-size: 200px;
      
    }

    & .title {
      width: 100%;
      margin: 0;
      text-align: center;
      margin-top: 30px;
      color: white;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 4px;
      
    }

    & .text {
      width: 100%;
      margin: 0 auto;
      font-size: 1rem;
      text-align: left;
      margin-top: 20px;
      color: white;
      font-weight: 200;
      letter-spacing: 2px;
      opacity: 0;
      max-height: 0;
      transition: all 0.3s ease;
    }

    &:hover {
      height: 420px;
    }

    &:hover .title {
      text-shadow: 0px -2px 0px rgba(0, 0, 0, 1),
        0 0 5px rgba(255, 255, 255, 0.8), 0 -4px 15px rgba(255, 255, 255, 0.5);
    }

    &:hover .info {
      height: 90%;
    }

    &:hover .text {
      transition: all 0.3s ease;
      opacity: 1;
      max-height: 40px;
    }

    &:hover .icon {
      background-position: -120px;
      transition: all 0.3s ease;
      color: ${theme.colorSecondary};
    }

    &:hover .icon i {
      background: linear-gradient(
        90deg,
        ${theme.colorSecondary},
        ${theme.colorSecondaryDark}
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      opacity: 1;
      transition: all 0.3s ease;
    }

    & .card-border {
      border: 2px solid ${theme.colorSecondary};
    }
  `;

  return (
    <CardStyled {...course}>
      {children}

      <p className="title">{course.title}</p>

      <div className="text">
        {course.description}
        <br />
        <br />
       
          <ButtonOutline>Veiw Repo</ButtonOutline>
        
      </div>
    </CardStyled>
  );
};

export default Card;
