import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import styles from "./App.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Application from "./pages/Application";
import { atomMaker } from "./applicationsData/AtomMaker";
import { evolutionOfStars } from "./applicationsData/EvolutionOfStars";
import { gravitySimulator } from "./applicationsData/GravitySimulator";
import { nearTheSpeedOfLight } from "./applicationsData/NearTheSpeedOfLight";

const applications = [
  {
    path: "/atom-maker",
    data: atomMaker,
  },
  {
    path: "/evolution-of-stars",
    data: evolutionOfStars,
  },
  {
    path: "/gravity-simulator",
    data: gravitySimulator,
  },
  {
    path: "/near-the-speed-of-light",
    data: nearTheSpeedOfLight,
  },
];

const App = () => (
  <BrowserRouter>
    <Header />
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<div>contact</div>} />
        <Route path="/terms-of-use" element={<div>terms-of-use</div>} />
        <Route path="/privacy-policy" element={<div>privacy-policy</div>} />
        {applications.map((app) => (
          <Route path={app.path} element={<Application data={app.data} />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
        {/*<Route path="*" element={<div>404</div>} />*/}
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
