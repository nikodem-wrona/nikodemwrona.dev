import "./styles/main.scss";

import { Route, Routes } from "react-router-dom";

import { BlogListPage } from "./components/BlogPostList";
import { BlogPostPage } from "./components/BlogPostPage";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<BlogListPage />} />
          <Route path="/post/:postId" element={<BlogPostPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
