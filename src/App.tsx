import "react-calendar-heatmap/dist/styles.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Repo from "./pages/Repo";
import GlobalStyles from "./Styles/GlobalStyles";
import Footer from "./components/footer";
import { ThemeName, themes } from "./Styles/theme";

function App() {
  const [themeName, setthemeName] = useState<ThemeName>("light");
  const currentTheme = themes[themeName];
  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Header themeName={themeName} setThemeName={setthemeName} />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/:username/:reponame" element={<Repo />} />
        </Routes>
        <Footer />

        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
