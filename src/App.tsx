import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Main from "./Pages/Main";
import Projects from "./Pages/Projects";
import Roots from "./Pages/Roots";
import Skill from "./Pages/Skill";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Roots />}>
          <Route index element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skill" element={<Skill />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;