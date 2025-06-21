import "highlight.js/styles/github-dark.css";

import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import styles from "./BlogPost.module.scss";

interface BlogPostProps {
  content: string;
  title: string;
  date: string;
  author: string;
}

export default function BlogPost({
  content,
  title,
  date,
  author,
}: BlogPostProps) {
  return (
    <article className={styles.blogPost}>
      <header className={styles.blogHeader}>
        <h1 className={styles.blogTitle}>{title}</h1>
        <div className={styles.blogMeta}>
          <span className={styles.blogDate}>{date}</span>
          <span className={styles.blogAuthor}>by {author}</span>
        </div>
      </header>
      <div className={styles.blogContent}>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw, rehypeHighlight]}
          remarkPlugins={[remarkGfm]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
