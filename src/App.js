import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./styles/index.scss";
import Footer from "./components/Footer";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<div>home</div>} />
      <Route path="/about" element={<div>about</div>} />
      <Route path="/contact" element={<div>contact</div>} />
      <Route path="/terms-of-use" element={<div>terms-of-use</div>} />
      <Route path="/privacy-policy" element={<div>privacy-policy</div>} />
      <Route path="*" element={<Navigate to="/" replace />} />
      {/*<Route path="*" element={<div>404</div>} />*/}
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
