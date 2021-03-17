import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  BreadCrumb,
  RepoIcon,
  Stats,
  LinkButton,
  ForkIcon,
  StarIcon,
  Githublogo,
} from "./style";

const Repo: React.FC = () => {
  return (
    <Container>
      <BreadCrumb>
        <RepoIcon />
        <Link className={"username"} to={"/giovani"}>
          giovani
        </Link>

        <span>/</span>

        <Link className={"reponame"} to={"/giovani/youtube-content"}>
          youtube
        </Link>
      </BreadCrumb>
      <p>Descriçao do repositorio</p>

      <Stats>
          <li>
            <StarIcon />
            <b>9</b>
            <span>stars</span>
          </li>
          <li>
            <ForkIcon />
            <b>0</b>
            <span>forks</span>
          </li>
      </Stats>
      <LinkButton href="/">
        <Githublogo />
        <span>View GithUB</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
