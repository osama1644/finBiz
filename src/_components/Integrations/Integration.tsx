import { usePosts } from "../../hooks";
import styles from "./Integration.module.css";
import type { Post } from "../../types";

function Integration() {
  const { data, isLoading, error } = usePosts();

  if (isLoading) return <div className={styles.loader}>Loading...</div>;
  if (error) return <div className={styles.error}>Something went wrong!</div>;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Posts</h1>
      {data?.posts.map((post: Post) => (
        <div key={post.id} className={styles.postCard}>
          <h3 className={styles.postTitle}>{post.title}</h3>
          <p className={styles.postBody}>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Integration;
