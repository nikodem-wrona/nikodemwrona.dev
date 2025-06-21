import styles from "./BlogList.module.scss";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
};

interface BlogListProps {
  posts: BlogPost[];
  onPostClick: (postId: string) => void;
}

export default function BlogList({ posts, onPostClick }: BlogListProps) {
  return (
    <div className={styles.blogList}>
      {posts.map((post) => (
        <article
          key={post.id}
          className={styles.postItem}
          onClick={() => onPostClick(post.id)}
        >
          <div className={styles.postDate}>{post.date}</div>
          <h2 className={styles.postTitle}>{post.title}</h2>
        </article>
      ))}
    </div>
  );
}
