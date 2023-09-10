import Menu from "./components/Menu"
import Layout from "./components/Layout";
import HtmlLayout from "./pages/html/HtmlLayout";
import LearnHtml from "./pages/html/LearnHtml";
import VideoHtml from "./pages/html/VideoHtml";
import CssLayout from "./pages/css/CssLayout";
import LearnCss from "./pages/css/LearnCss";
import VideoCss from "./pages/css/VideoCss";
import JavascriptLayout from "./pages/javascript/JavascriptLayout";
import LearnJavascript from "./pages/javascript/LearnJavascript";
import VideoJavascript from "./pages/javascript/VideoJavascript";
import ReactLayout from "./pages/react/ReactLayout";
import LearnReact from "./pages/react/LearnReact";
import VideoReact from "./pages/react/VideoReact";
import Projects from "./pages/projects/Projects"

import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import GitGithubLayout from "./pages/gitgithub/GitGithubLayout";
import LearnGitGithub from "./pages/gitgithub/LearnGitGithub";
import VideoGitGithub from "./pages/gitgithub/VideoGitGithub";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Menu />} />
        <Route element={<Layout />}>
          <Route path="learnhtml" element={<HtmlLayout />}>
            <Route index element={<LearnHtml />} />
            <Route path="Videohtml" element={<VideoHtml />} />
          </Route>
          <Route path="learncss" element={<CssLayout />}>
            <Route index element={<LearnCss />} />
            <Route path="Videocss" element={<VideoCss />} />
          </Route>
          <Route path="learnjavascript" element={<JavascriptLayout />}>
            <Route index element={<LearnJavascript />} />
            <Route path="videojavascript" element={<VideoJavascript />} />
          </Route>
          <Route path="learnreact" element={<ReactLayout />}>
            <Route index element={<LearnReact />} />
            <Route path="videoreact" element={<VideoReact />} />
          </Route>
          <Route path="learngitgithub" element={<GitGithubLayout />}>
            <Route index element={<LearnGitGithub />} />
            <Route path="videogitgithub" element={<VideoGitGithub />} />
          </Route>
          <Route path="projects" element={<Projects />} />
        </Route>
      </Route>
    )
  );
  return (
    <RouterProvider router={router} />
  )
}

export default App
