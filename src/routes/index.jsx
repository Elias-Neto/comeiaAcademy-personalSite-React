import { BrowserRouter, Routes, Route } from "react-router-dom"

import About from "../pages/About"
import Projects from "../pages/Projects"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projetos" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}
