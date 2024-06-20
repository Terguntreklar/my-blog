import NavBar from "../NavBar";
import styles from "./page.module.css";

async function getBlogPostById(id: string) {
  const result: Post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { cache: "no-store" }
  ).then((x) => x.json());
  return result;
}

export default async function postView({ params }: { params: { id: string } }) {
  const post = await getBlogPostById(params.id);
  return (
    <div>
      <NavBar />
      <FullScreenPost key={params.id} post={post} />
    </div>
  );
}

function FullScreenPost({ post }: { post: Post }) {
  return (
    <div className={styles.post}>
      <h2 className={styles.title}>{post.title}</h2>
      <h4 className={styles.content}>{post.body}</h4>
      <h6 className={styles.info}>Poster ID: {post.userId}</h6>
    </div>
  );
}
