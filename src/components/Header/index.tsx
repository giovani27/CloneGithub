import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeName } from "../../Styles/theme";

import { Container, Githublogo, Searchform } from "./style";

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
  const navigate = useNavigate();
  const [search, setsearch] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate("/" + search.toLowerCase().trim());
  }

  function toggleTheme() {
    setThemeName(themeName === "light" ? "dark" : "light");
  }
  return (
    <Container>
      <Githublogo onClick={toggleTheme} />
      <Searchform onSubmit={handleSubmit}>
        <input
          value={search}
          placeholder="enter username or repo"
          onChange={(e) => setsearch(e.currentTarget.value)}
        />
      </Searchform>
    </Container>
  );
};

export default Header;
