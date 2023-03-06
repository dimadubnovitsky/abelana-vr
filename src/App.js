import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import styles from "./App.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";

const App = () => (
  <BrowserRouter>
    <Header />
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<div>contact</div>} />
        <Route path="/terms-of-use" element={<div>terms-of-use</div>} />
        <Route path="/privacy-policy" element={<div>privacy-policy</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
        {/*<Route path="*" element={<div>404</div>} />*/}
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
