import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import App from "./App.jsx"
import Home from "./pages/Home"
import About from "./pages/About"
import Blog from "./pages/BlogPage.jsx"
import Newsletter from "./pages/Newsletter"
import "./index.css"

const rootElement = document.getElementById("root")
ReactDOM.createRoot(rootElement).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="newsletter" element={<Newsletter />} />
      </Route>
    </Routes>
  </Router>
)
