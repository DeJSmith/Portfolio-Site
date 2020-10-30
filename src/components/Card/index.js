import React from "react";
import { CardStyled } from "./CardElements";
import { ButtonOutline } from "../../elements/globalElements";
import theme from "../../theme/theme";

const Card = ({ children, repo }) => {
  const border = { border: `5px solid ${theme.colorSecondary}` };
  return (
    <CardStyled style={repo.live ? border : {}}>
      {children}

      <p className="title">{repo.name}</p>

      <div className="text">
        {repo.description}
        <br />
        <br />
        <a href={repo.html_url}>
          <ButtonOutline>Veiw Repo</ButtonOutline>
        </a>
      </div>
    </CardStyled>
  );
};

export default Card;
