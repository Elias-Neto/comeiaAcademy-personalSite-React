import { BrowserRouter, Routes, Route } from "react-router-dom"

import About from "../pages/About"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
