import { useNavigate } from "react-router-dom";

import { blogPosts } from "../../data/blogPosts";
import BlogList from "./BlogList";

export function BlogListPage() {
  const navigate = useNavigate();

  const handlePostClick = (postId: string) => {
    navigate(`/post/${postId}`);
  };

  return (
    <BlogList
      posts={blogPosts.map(({ id, title, excerpt, date, author }) => ({
        id,
        title,
        excerpt,
        date,
        author,
      }))}
      onPostClick={handlePostClick}
    />
  );
}
