import { useNavigate, useParams } from "react-router-dom";

import { blogPosts } from "../../data/blogPosts";
import BlogPost from "./BlogPost";
import styles from "./BlogPostPage.module.scss";

export function BlogPostPage() {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h1>Post not found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <button className={styles.backButton} onClick={() => navigate("/")}>
          ← Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className={styles.blogPostPage}>
      <button className={styles.backButton} onClick={() => navigate("/")}>
        Back
      </button>
      <BlogPost
        title={post.title}
        content={post.content}
        date={post.date}
        author={post.author}
      />
    </div>
  );
}
