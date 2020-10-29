import React, { Fragment } from "react";
import { CardStack, Card } from "./CardStackElements";

const Stack = ({ repos }) => {
  return (
    <Fragment>
      <CardStack>
        {repos.map((repo, index) => {
          console.log(repo);
          if (index < 2) {
            return <Card>{repo.name}</Card>;
          }
        })}
      </CardStack>
      <CardStack>
        {repos.map((repo, index) => {
          console.log(repo);
          if (index >= 2 && index < 4) {
            return <Card>{repo.name}</Card>;
          }
        })}
      </CardStack>
    </Fragment>
  );
};

export default Stack;
